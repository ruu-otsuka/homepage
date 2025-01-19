import http.server
import socketserver
import socket

def get_ip():
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        # doesn't need to be reachable
        s.connect(('10.255.255.255', 1))
        IP = s.getsockname()[0]
    except Exception:
        IP = '127.0.0.1'
    finally:
        s.close()
    return IP

PORT = 8000
IP = get_ip()

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory="out", **kwargs)

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"ローカルアドレス: http://localhost:{PORT}")
    print(f"ネットワークアドレス: http://{IP}:{PORT}")
    httpd.serve_forever()