"""
Mission Control API — Colconexus
Soporta: GET /api/data, POST /api/tasks, POST /api/discussions,
         PATCH /api/tasks/{id}, PATCH /api/agents/{name}
Datos: C:\\Users\\ElkinT\\.openclaw\\workspace\\shared_tasks.json
"""
import http.server
import socketserver
import json
import os
import re
from datetime import datetime, timezone

PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))
TASK_FILE = r"C:\Users\ElkinT\.openclaw\workspace\shared_tasks.json"

# ── helpers ────────────────────────────────────────────────────────────────
def read_data():
    with open(TASK_FILE, 'r', encoding='utf-8-sig') as f:
        return json.load(f)

def write_data(data):
    data['last_updated'] = datetime.now(timezone.utc).isoformat()
    with open(TASK_FILE, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

def send_json(handler, code, obj):
    body = json.dumps(obj, ensure_ascii=False).encode('utf-8')
    handler.send_response(code)
    handler.send_header('Content-Type', 'application/json; charset=utf-8')
    handler.send_header('Content-Length', len(body))
    handler.send_header('Access-Control-Allow-Origin', '*')
    handler.send_header('Access-Control-Allow-Methods', 'GET,POST,PATCH,OPTIONS')
    handler.send_header('Access-Control-Allow-Headers', 'Content-Type')
    handler.end_headers()
    handler.wfile.write(body)

def read_body(handler):
    length = int(handler.headers.get('Content-Length', 0))
    return json.loads(handler.rfile.read(length)) if length else {}

# ── handler ────────────────────────────────────────────────────────────────
class MCHandler(http.server.SimpleHTTPRequestHandler):

    def log_message(self, *a): pass  # silenciar logs de consola

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET,POST,PATCH,OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    # ── GET ────────────────────────────────────────────────────────────────
    def do_GET(self):
        p = self.path.split('?')[0]

        if p == '/api/data':
            try:
                send_json(self, 200, read_data())
            except Exception as e:
                send_json(self, 500, {'error': str(e)})

        elif p == '/api/tasks':
            try:
                send_json(self, 200, read_data().get('tasks', []))
            except Exception as e:
                send_json(self, 500, {'error': str(e)})

        elif p == '/api/discussions':
            try:
                send_json(self, 200, read_data().get('discussions', []))
            except Exception as e:
                send_json(self, 500, {'error': str(e)})

        elif p == '/':
            # servir index.html
            idx = os.path.join(DIRECTORY, 'index.html')
            with open(idx, 'rb') as f:
                content = f.read()
            self.send_response(200)
            self.send_header('Content-Type', 'text/html; charset=utf-8')
            self.send_header('Content-Length', len(content))
            self.end_headers()
            self.wfile.write(content)

        else:
            # fallback estático
            super().do_GET()

    # ── POST ───────────────────────────────────────────────────────────────
    def do_POST(self):
        p = self.path.split('?')[0]
        body = read_body(self)

        if p == '/api/tasks':
            try:
                data = read_data()
                tasks = data.get('tasks', [])
                # generar id
                nums = [int(re.sub(r'\D','',t['id'])) for t in tasks if re.sub(r'\D','',t.get('id',''))]
                new_id = 'T' + str(max(nums)+1 if nums else 1).zfill(3)
                task = {
                    'id': new_id,
                    'agent': body.get('agent', 'SISTEMA'),
                    'title': body.get('title', 'Sin título'),
                    'status': body.get('status', 'todo'),
                    'priority': body.get('priority', 'MEDIA'),
                    'description': body.get('description', ''),
                    'needs_review': bool(body.get('needs_review', False)),
                    'review_comment': body.get('review_comment', ''),
                    'owner_feedback': '',
                    'subtasks': body.get('subtasks', []),
                    'created_at': datetime.now(timezone.utc).isoformat(),
                }
                tasks.append(task)
                data['tasks'] = tasks
                write_data(data)
                send_json(self, 201, task)
            except Exception as e:
                send_json(self, 500, {'error': str(e)})

        elif p == '/api/discussions':
            try:
                data = read_data()
                disc = data.get('discussions', [])
                msg = {
                    'timestamp': datetime.now(timezone.utc).isoformat(),
                    'agent': body.get('agent', 'SISTEMA'),
                    'message': body.get('message', ''),
                }
                disc.append(msg)
                data['discussions'] = disc
                write_data(data)
                send_json(self, 201, msg)
            except Exception as e:
                send_json(self, 500, {'error': str(e)})

        else:
            send_json(self, 404, {'error': 'Not found'})

    # ── PATCH ──────────────────────────────────────────────────────────────
    def do_PATCH(self):
        p = self.path.split('?')[0]
        body = read_body(self)

        # PATCH /api/tasks/{id}
        m = re.match(r'^/api/tasks/(.+)$', p)
        if m:
            tid = m.group(1)
            try:
                data = read_data()
                tasks = data.get('tasks', [])
                found = None
                for t in tasks:
                    if t.get('id') == tid:
                        for k, v in body.items():
                            t[k] = v
                        t['updated_at'] = datetime.now(timezone.utc).isoformat()
                        # si se aprueba, limpiar needs_review
                        if body.get('status') == 'done':
                            t['needs_review'] = False
                        found = t
                        break
                if not found:
                    send_json(self, 404, {'error': f'Task {tid} not found'})
                    return
                data['tasks'] = tasks
                write_data(data)
                send_json(self, 200, found)
            except Exception as e:
                send_json(self, 500, {'error': str(e)})
            return

        # PATCH /api/agents/{name}
        m = re.match(r'^/api/agents/(.+)$', p)
        if m:
            name = m.group(1)
            try:
                data = read_data()
                st = data.get('agents_status', {})
                st[name] = body.get('status', 'standby')
                data['agents_status'] = st
                write_data(data)
                send_json(self, 200, {'agent': name, 'status': st[name]})
            except Exception as e:
                send_json(self, 500, {'error': str(e)})
            return

        send_json(self, 404, {'error': 'Not found'})


# ── main ───────────────────────────────────────────────────────────────────
os.chdir(DIRECTORY)
print(f"Mission Control API  →  http://localhost:{PORT}")
print(f"Datos:  {TASK_FILE}")
print("Ctrl+C para detener\n")

with socketserver.TCPServer(("", PORT), MCHandler) as httpd:
    httpd.allow_reuse_address = True
    httpd.serve_forever()
