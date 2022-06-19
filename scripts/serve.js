import esbuild from 'esbuild'
import { resolve } from 'path'
import http from 'http'
// https://esbuild.github.io/api/#customizing-server-behavior
// Start esbuild's server on a random local port
esbuild.serve({
  servedir: "www",
}, {
  entryPoints: [resolve('website/examples/menu/index.js')],
  outfile: "www/app.js",
  sourcemap: true,
  bundle: true
}).then(result => {
  // The result tells us where esbuild's local server is
  const {host, port} = result

  // Then start a proxy server on port 3000
  http.createServer((req, res) => {
    const options = {
      hostname: host,
      port: port,
      path: req.url,
      method: req.method,
      headers: req.headers,
    }

    // Forward each incoming request to esbuild
    const proxyReq = http.request(options, proxyRes => {
      // If esbuild returns "not found", send a custom 404 page
      if (proxyRes.statusCode === 404) {
        // res.writeHead(404, { 'Content-Type': 'text/html' });
        // res.end('<h1>A custom 404 page</h1>');
        // return;
        return forwardRequest("/")
      }

      // Otherwise, forward the response from esbuild to the client
      res.writeHead(proxyRes.statusCode, proxyRes.headers)
      proxyRes.pipe(res, { end: true })
    })

    // Forward the body of the request to esbuild
    req.pipe(proxyReq, { end: true })
  }).listen(3000)
})