import { useEffect, useState } from 'react';

const App = () => {
  const [templ, setTempl] = useState<string>();

  useEffect(() => {
    (async () => {
      fetch('/exolix-static/manifest-build.json')
        .then((response) => response.body)
        .then((rb) => {
          const reader = rb?.getReader();

          return new ReadableStream({
            start(controller) {
              function push() {
                reader?.read().then(({ done, value }) => {
                  if (done) {
                    controller.close();
                    return;
                  }
                  controller.enqueue(value);
                  push();
                });
              }

              push();
            },
          });
        })
        .then((stream) =>
          new Response(stream, {
            headers: { 'Content-Type': 'application/json' },
          }).text()
        )
        .then((result) => {
          const manifest = JSON.parse(result);
          let template = `
<!DOCTYPE html>
          <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1"
        />
        <script src="https://telegram.org/js/telegram-web-app.js"></script>
        <title>EXOLIX</title>
        <!-- HEAD_SCRIPT -->
      </head>
      <body>
        <div id="root"></div>
        <!-- BODY_SCRIPT -->
      </body>
    </html>
    `;
          if (manifest) {
            const chunk = manifest['src/entrypoints/main.ts'];
            let scripts = `<script type="module" crossorigin src="/${chunk.file}"></script>\n`;
            console.log(chunk, chunk.imports);
            if (chunk.imports && Array.isArray(chunk.imports)) {
              scripts += chunk.imports
                .map((file: string) => {
                  if (file.startsWith('_')) {
                    file = file.slice(1);
                  }
                  return `<link rel="modulepreload" crossorigin href="${file}"></link>`;
                })
                .join('\n');
            }
            const newTemplate = template
              .replace('<!-- HEAD_SCRIPT -->', scripts)
              .replace('<!-- BODY_SCRIPT -->', '');

            setTempl(newTemplate);
          }
        });
    })();
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <iframe srcDoc={templ} width="100%" height={600}></iframe>
    </div>
  );
};

export default App;
