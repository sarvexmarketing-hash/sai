#!/usr/bin/env python3
"""
High-fidelity local server replicating https://pika.art/
Serves local Next.js client bundles, CSS, fonts, and icons,
while proxying/redirecting media, CDN video streams, and API feature flags
so the site renders 100% identically to the live production site.
"""

import os
import sys
import json
import mimetypes
import urllib.parse
from http.server import HTTPServer, BaseHTTPRequestHandler

import agent_engine
import previews

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
PIKA_DIR = os.path.join(BASE_DIR, "pika.art")
CDN_DIR = os.path.join(BASE_DIR, "cdn.pika.art")
POSTHOG_ASSETS_DIR = os.path.join(BASE_DIR, "us-assets.i.posthog.com")
POSTHOG_DIR = os.path.join(BASE_DIR, "us.i.posthog.com")
WORKSPACE_HTML = os.path.join(BASE_DIR, "workspace.html")

mimetypes.init()
mimetypes.add_type("application/javascript", ".js")
mimetypes.add_type("text/css", ".css")
mimetypes.add_type("image/svg+xml", ".svg")
mimetypes.add_type("image/webp", ".webp")
mimetypes.add_type("font/woff2", ".woff2")
mimetypes.add_type("font/woff", ".woff")
mimetypes.add_type("font/ttf", ".ttf")
mimetypes.add_type("image/png", ".png")
mimetypes.add_type("image/jpeg", ".jpg")
mimetypes.add_type("image/jpeg", ".jpeg")
mimetypes.add_type("video/mp4", ".mp4")
mimetypes.add_type("application/json", ".json")

FONT_FALLBACKS = {
    "Telka-Black.woff2": "Telka-Extended-Bold.woff2",
    "Telka-Bold.woff2": "Telka-Extended-Bold.woff2",
    "Telka-Extended-Black.woff2": "Telka-Extended-Bold.woff2",
    "Telka-Extended-Super.woff2": "Telka-Extended-Bold.woff2",
    "Telka-Super.woff2": "Telka-Extended-Bold.woff2",
    "Telka-Light.woff2": "Telka-Regular.woff2",
    "Telka-Extended-Light.woff2": "Telka-Extended-Regular.woff2",
}

class PikaReplicationHandler(BaseHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, HEAD")
        self.send_header("Access-Control-Allow-Headers", "*")
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(204)
        self.end_headers()

    def do_HEAD(self):
        self.do_GET()

    def do_POST(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path

        # Multi-agent software generation endpoint
        if path.startswith("/api/projects/") and path.endswith("/generate"):
            parts = path.split("/")
            proj_id = parts[3]
            length = int(self.headers.get("Content-Length", 0))
            body = self.rfile.read(length).decode("utf-8") if length > 0 else "{}"
            try:
                data = json.loads(body)
                prompt = data.get("prompt", "")
            except Exception:
                prompt = ""
            result = agent_engine.engine.generate_patch(proj_id, prompt)
            payload = json.dumps(result).encode("utf-8")
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.send_header("Content-Length", str(len(payload)))
            self.end_headers()
            self.wfile.write(payload)
            return

        # Save project file endpoint
        if path.startswith("/api/projects/") and path.endswith("/file"):
            parts = path.split("/")
            proj_id = parts[3]
            length = int(self.headers.get("Content-Length", 0))
            body = self.rfile.read(length).decode("utf-8") if length > 0 else "{}"
            try:
                data = json.loads(body)
                file_path = data.get("filePath", "")
                content = data.get("content", "")
                success = agent_engine.engine.save_file(proj_id, file_path, content)
            except Exception as e:
                success = False
            payload = json.dumps({"success": success}).encode("utf-8")
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.send_header("Content-Length", str(len(payload)))
            self.end_headers()
            self.wfile.write(payload)
            return

        # Handle telemetry/metrics beacons gracefully
        self.send_response(200)
        self.send_header("Content-Type", "application/json")
        self.end_headers()
        self.wfile.write(b'{"status":"ok"}')

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        path = urllib.parse.unquote(parsed.path)
        query = parsed.query

        # AI Software Development Workspace Studio
        if path == "/workspace" or path.startswith("/workspace"):
            if os.path.isfile(WORKSPACE_HTML):
                self.serve_file(WORKSPACE_HTML, content_type="text/html; charset=utf-8")
                return

        # Enterprise use case route
        if path.startswith("/use-cases"):
            self.send_response(302)
            self.send_header("Location", "/#community")
            self.end_headers()
            return

        # Sandboxed Live Interactive Archetype Previews
        if path.startswith("/preview/"):
            archetype_id = path[len("/preview/"):].strip("/")
            preview_content = previews.get_preview_html(archetype_id).encode("utf-8")
            self.send_response(200)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.send_header("Content-Length", str(len(preview_content)))
            self.end_headers()
            self.wfile.write(preview_content)
            return

        # API: List all projects
        if path == "/api/projects":
            projects = agent_engine.engine.list_projects()
            payload = json.dumps(projects).encode("utf-8")
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.send_header("Content-Length", str(len(payload)))
            self.end_headers()
            self.wfile.write(payload)
            return

        # API: Project specific endpoints
        if path.startswith("/api/projects/"):
            parts = path.split("/")
            proj_id = parts[3] if len(parts) > 3 else "website"
            subaction = parts[4] if len(parts) > 4 else ""

            if subaction == "export":
                zip_data = agent_engine.engine.export_zip(proj_id)
                self.send_response(200)
                self.send_header("Content-Type", "application/zip")
                self.send_header("Content-Disposition", f'attachment; filename="{proj_id}-source.zip"')
                self.send_header("Content-Length", str(len(zip_data)))
                self.end_headers()
                self.wfile.write(zip_data)
                return

            if subaction == "run-tests":
                results = agent_engine.engine.run_tests(proj_id)
                payload = json.dumps(results).encode("utf-8")
                self.send_response(200)
                self.send_header("Content-Type", "application/json")
                self.send_header("Content-Length", str(len(payload)))
                self.end_headers()
                self.wfile.write(payload)
                return

            if subaction == "db-query":
                qs = urllib.parse.parse_qs(query)
                q = qs.get("q", ["all"])[0]
                records = agent_engine.engine.query_database(proj_id, q)
                payload = json.dumps(records).encode("utf-8")
                self.send_response(200)
                self.send_header("Content-Type", "application/json")
                self.send_header("Content-Length", str(len(payload)))
                self.end_headers()
                self.wfile.write(payload)
                return

            # Single project retrieval
            proj_data = agent_engine.engine.get_project(proj_id)
            payload = json.dumps(proj_data).encode("utf-8")
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.send_header("Content-Length", str(len(payload)))
            self.end_headers()
            self.wfile.write(payload)
            return

        # Root landing page
        if path in ("", "/"):
            self.serve_index()
            return

        # Next.js image endpoint
        if path == "/_next/image":
            self.handle_next_image(query)
            return

        # Unleash feature flags
        if path.startswith("/unleash"):
            self.handle_unleash(path)
            return

        # Missing font fallbacks
        if path.startswith("/pika-fonts/"):
            font_name = os.path.basename(path)
            font_path = os.path.join(PIKA_DIR, "pika-fonts", font_name)
            if not os.path.isfile(font_path) and font_name in FONT_FALLBACKS:
                fallback_name = FONT_FALLBACKS[font_name]
                fallback_path = os.path.join(PIKA_DIR, "pika-fonts", fallback_name)
                if os.path.isfile(fallback_path):
                    self.serve_file(fallback_path, content_type="font/woff2")
                    return

        # PostHog tracking assets
        if path.startswith("/us-assets.i.posthog.com/"):
            rel = path[len("/us-assets.i.posthog.com/"):]
            if self.try_serve_file(os.path.join(POSTHOG_ASSETS_DIR, rel)):
                return
        if path.startswith("/us.i.posthog.com/"):
            rel = path[len("/us.i.posthog.com/"):]
            if self.try_serve_file(os.path.join(POSTHOG_DIR, rel)):
                return

        # Check local CDN assets
        if path.startswith("/cdn.pika.art/"):
            rel = path[len("/cdn.pika.art/"):]
            if self.try_serve_file(os.path.join(CDN_DIR, rel)):
                return
            # Redirect to real CDN if not local
            self.send_response(302)
            self.send_header("Location", f"https://cdn.pika.art/{rel}")
            self.end_headers()
            return

        if path.startswith("/v2/") or path.startswith("/assets/"):
            rel = path.lstrip("/")
            if self.try_serve_file(os.path.join(CDN_DIR, rel)):
                return

        # Standard file in pika.art
        rel = path.lstrip("/")
        pika_path = os.path.join(PIKA_DIR, rel)
        if self.try_serve_file(pika_path):
            return

        # Scraped endpoints saved with .html
        if self.try_serve_file(pika_path + ".html"):
            return

        # Check in CDN root
        cdn_path = os.path.join(CDN_DIR, rel)
        if self.try_serve_file(cdn_path):
            return

        # Handle RSC requests (?_rsc=...)
        if "_rsc=" in query:
            rsc_path = os.path.join(PIKA_DIR, "index-55efe4ae09ffc.html")
            if os.path.isfile(rsc_path):
                self.serve_file(rsc_path, content_type="text/x-component")
                return

        # Client-side route fallback (e.g. /apps, /blog)
        if not ("." in os.path.basename(path)):
            self.serve_index()
            return

        self.send_error(404, f"File not found: {path}")

    def serve_index(self):
        index_path = os.path.join(PIKA_DIR, "index.html")
        if not os.path.isfile(index_path):
            self.send_error(404, "index.html not found")
            return

        with open(index_path, "r", encoding="utf-8") as f:
            html = f.read()

        # Route CDN video and media requests through local server for 100% offline local playback
        html = html.replace("https://cdn.pika.art/", "/")

        # Ensure hero video and showcase video players are visible and playing smoothly
        enhancement = """
        <style>
          video { opacity: 1 !important; }
          #workflow, #community { display: block !important; opacity: 1 !important; visibility: visible !important; }
          #introducing-sai, #about-company { display: block !important; visibility: visible !important; opacity: 1 !important; }
          @keyframes saiMarquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          /* MADE WITH SAI TECHNOLOGIES SHOWCASE CARDS VISIBILITY FIX */
          .group\/tile, li.group\/tile, [class*="group/tile"] {
            background-color: #1a1918 !important;
            border: 1px solid rgba(255, 255, 255, 0.14) !important;
            box-shadow: 0 12px 28px -6px rgba(0, 0, 0, 0.35) !important;
          }
          .group\/tile:hover, li.group\/tile:hover, [class*="group/tile"]:hover {
            border-color: rgba(168, 85, 247, 0.5) !important;
            box-shadow: 0 18px 36px -4px rgba(0, 0, 0, 0.45) !important;
            transform: translateY(-4px) !important;
          }
          .group\/tile h3, [class*="group/tile"] h3 {
            color: #ffffff !important;
            font-weight: 700 !important;
            opacity: 1 !important;
            visibility: visible !important;
          }
          .group\/tile p, [class*="group/tile"] p {
            color: rgba(255, 255, 255, 0.82) !important;
            opacity: 1 !important;
            visibility: visible !important;
          }
          .group\/tile span, [class*="group/tile"] span {
            opacity: 1 !important;
            visibility: visible !important;
          }
          .group\/tile .text-white\/50, [class*="group/tile"] .text-white\/50 {
            color: rgba(255, 255, 255, 0.6) !important;
          }
          .group\/tile .text-white\/40, [class*="group/tile"] .text-white\/40 {
            color: rgba(255, 255, 255, 0.5) !important;
          }
          .group\/tile .text-white, [class*="group/tile"] .text-white {
            color: #ffffff !important;
          }
          .group\/tile .bg-white\/10, [class*="group/tile"] .bg-white\/10 {
            background-color: rgba(255, 255, 255, 0.1) !important;
            border: 1px solid rgba(255, 255, 255, 0.12) !important;
          }
          .group\/tile .bg-white\/5, [class*="group/tile"] .bg-white\/5 {
            background-color: rgba(255, 255, 255, 0.07) !important;
            color: rgba(255, 255, 255, 0.75) !important;
            border: 1px solid rgba(255, 255, 255, 0.1) !important;
          }
          .group\/tile .border-white\/10, [class*="group/tile"] .border-white\/10 {
            border-color: rgba(255, 255, 255, 0.14) !important;
          }
        </style>
        <script>
          document.addEventListener('DOMContentLoaded', function() {
            var vids = document.querySelectorAll('video');
            vids.forEach(function(v) {
              v.muted = true;
              v.playsInline = true;
              var p = v.play();
              if (p !== undefined) {
                p.catch(function(err) {});
              }
            });
          });
        </script>
        </body>
        """
        html = html.replace("</body>", enhancement)

        data = html.encode("utf-8")
        self.send_response(200)
        self.send_header("Content-Type", "text/html; charset=utf-8")
        self.send_header("Content-Length", str(len(data)))
        self.end_headers()
        self.wfile.write(data)

    def handle_next_image(self, query):
        qs = urllib.parse.parse_qs(query)
        img_url = qs.get("url", [""])[0]

        if not img_url:
            self.send_error(400, "Missing url parameter")
            return

        clean_url = urllib.parse.unquote(img_url)

        # 1. Check if the file is stored locally in pika.art
        if clean_url.startswith("/"):
            local_candidate = os.path.join(PIKA_DIR, clean_url.lstrip("/"))
            if os.path.isfile(local_candidate):
                ctype, _ = mimetypes.guess_type(local_candidate)
                self.serve_file(local_candidate, content_type=ctype)
                return

        # 2. Check if the file is stored in cdn.pika.art
        if clean_url.startswith("https://cdn.pika.art/"):
            rel = clean_url[len("https://cdn.pika.art/"):]
            local_candidate = os.path.join(CDN_DIR, rel)
            if os.path.isfile(local_candidate):
                ctype, _ = mimetypes.guess_type(local_candidate)
                self.serve_file(local_candidate, content_type=ctype)
                return
            # Redirect to CDN directly so browser receives high-res image
            self.send_response(302)
            self.send_header("Location", clean_url)
            self.end_headers()
            return

        # 3. For relative marketing images not stored locally, redirect to production next/image
        target_redirect = f"https://pika.art/_next/image?{query}"
        self.send_response(302)
        self.send_header("Location", target_redirect)
        self.end_headers()

    def handle_unleash(self, path):
        # Serve feature toggles configuration
        unleash_file = os.path.join(PIKA_DIR, "unleash.html")
        if path in ("/unleash", "/unleash/client/features"):
            if os.path.isfile(unleash_file):
                self.serve_file(unleash_file, content_type="application/json")
                return

        if path.startswith("/unleash/features/"):
            flag_name = path[len("/unleash/features/"):]
            flag_file = os.path.join(PIKA_DIR, "unleash", "features", f"{flag_name}.html")
            if os.path.isfile(flag_file):
                self.serve_file(flag_file, content_type="application/json")
                return
            payload = json.dumps({
                "name": flag_name,
                "enabled": True,
                "variant": {"name": "disabled", "enabled": False, "payload": None},
                "impression_data": False,
                "impressionData": False
            }).encode("utf-8")
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.send_header("Content-Length", str(len(payload)))
            self.end_headers()
            self.wfile.write(payload)
            return

        self.send_response(200)
        self.send_header("Content-Type", "application/json")
        self.end_headers()
        self.wfile.write(b'{"status":"ok"}')

    def try_serve_file(self, full_path):
        if os.path.isfile(full_path):
            self.serve_file(full_path)
            return True
        elif os.path.isdir(full_path):
            idx = os.path.join(full_path, "index.html")
            if os.path.isfile(idx):
                self.serve_file(idx)
                return True
        return False

    def serve_file(self, full_path, content_type=None):
        try:
            file_size = os.path.getsize(full_path)

            if not content_type:
                if "/files/agent/" in full_path or full_path.endswith(".mp4"):
                    content_type = "video/mp4"
                else:
                    content_type, _ = mimetypes.guess_type(full_path)
                    if not content_type:
                        if full_path.endswith(".html"):
                            content_type = "text/html; charset=utf-8"
                        else:
                            content_type = "application/octet-stream"

            # Support Range requests (essential for HTML5 video playback and scrubbing)
            range_header = self.headers.get("Range")
            if range_header and range_header.startswith("bytes="):
                range_spec = range_header[6:].strip()
                start_str, end_str = range_spec.split("-", 1) if "-" in range_spec else (range_spec, "")
                start = int(start_str) if start_str else 0
                end = int(end_str) if end_str else file_size - 1
                end = min(end, file_size - 1)
                length = end - start + 1

                self.send_response(206)
                self.send_header("Content-Type", content_type)
                self.send_header("Content-Range", f"bytes {start}-{end}/{file_size}")
                self.send_header("Content-Length", str(length))
                self.send_header("Accept-Ranges", "bytes")
                self.end_headers()

                with open(full_path, "rb") as f:
                    f.seek(start)
                    self.wfile.write(f.read(length))
                return

            self.send_response(200)
            self.send_header("Content-Type", content_type)
            self.send_header("Content-Length", str(file_size))
            self.send_header("Accept-Ranges", "bytes")
            if content_type.startswith("text/html") or "javascript" in content_type or "css" in content_type:
                self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
            self.end_headers()

            with open(full_path, "rb") as f:
                self.wfile.write(f.read())
        except Exception as e:
            self.send_error(500, f"Error serving file: {e}")

    def log_message(self, format, *args):
        sys.stderr.write(f"[{self.log_date_time_string()}] {format % args}\n")

def run(port=3000):
    server_address = ("0.0.0.0", port)
    try:
        httpd = HTTPServer(server_address, PikaReplicationHandler)
    except OSError:
        port = 8080
        server_address = ("0.0.0.0", port)
        httpd = HTTPServer(server_address, PikaReplicationHandler)

    print(f"Sai Technologies running at http://localhost:{port}/")
    sys.stdout.flush()
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping server...")
        httpd.server_close()

if __name__ == "__main__":
    port = 3000
    if len(sys.argv) > 1 and sys.argv[1].isdigit():
        port = int(sys.argv[1])
    run(port)
