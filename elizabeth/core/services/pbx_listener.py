"""
elizabeth/core/services/pbx_listener.py
Listener AMI de Asterisk/Issabel — detecta llamadas entrantes
y dispara el flujo de identificación de cliente
"""
import os, asyncio, telnetlib3

PBX_HOST = os.getenv("PBX_HOST", "localhost")
PBX_PORT = int(os.getenv("PBX_AMI_PORT", 5038))
AMI_USER = os.getenv("PBX_AMI_USER", "admin")
AMI_PASS = os.getenv("PBX_AMI_PASS", "admin")

class PbxListener:
    def __init__(self):
        self.on_llamada = None   # callback externo

    async def escuchar(self):
        while True:
            try:
                reader, writer = await telnetlib3.open_connection(PBX_HOST, PBX_PORT)
                # Login AMI
                writer.write(f"Action: Login\r\nUsername: {AMI_USER}\r\nSecret: {AMI_PASS}\r\n\r\n")
                print("[PBX] Conectado al AMI de Asterisk")
                await self._procesar(reader)
            except Exception as e:
                print(f"[PBX] Error: {e} — reintentando en 10s")
                await asyncio.sleep(10)

    async def _procesar(self, reader):
        evento = {}
        async for linea in reader:
            linea = linea.strip()
            if not linea:
                # bloque de evento completo
                if evento.get("Event") == "Newchannel":
                    callerid = evento.get("CallerIDNum", "")
                    agente   = evento.get("ChannelStateDesc", "")
                    print(f"[PBX] Llamada entrante de {callerid}")
                    if self.on_llamada:
                        await self.on_llamada(callerid, agente)
                evento = {}
            elif ": " in linea:
                k, v = linea.split(": ", 1)
                evento[k] = v
