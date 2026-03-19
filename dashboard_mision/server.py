import http.server
import socketserver
import json
import os

PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))
TASK_FILE = r"C:\Users\ElkinT\.openclaw\workspace\shared_tasks.json"

class MyHandler(http.server.SimpleHTTPRequestHandler):
    def translate_path(self, path):
        # Serve the index.html from the current directory
        return os.path.join(DIRECTORY, "index.html")

    def do_GET(self):
        if self.path == '/api/tasks':
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            try:
                with open(TASK_FILE, 'r', encoding='utf-8') as f:
                    data = f.read()
                self.wfile.write(data.encode())
            except Exception as e:
                self.wfile.write(json.dumps({"error": str(e)}).encode())
        else:
            return super().do_GET()

os.chdir(DIRECTORY)
with socketserver.TCPServer(("", PORT), MyHandler) as httpd:
    print(f"🚀 Dashboard de Misión disponible en: http://localhost:{PORT}")
    print("Presiona Ctrl+C para detener el servidor.")
    httpd.serve_forever()
