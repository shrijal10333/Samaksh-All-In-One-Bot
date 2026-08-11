// © Author: itsfizys
// Render & UptimeRobot Keep-Alive HTTP Server

const http = require('http');

function startKeepAliveServer() {
    const port = process.env.PORT || 3000;

    const server = http.createServer((req, res) => {
        if (req.url === '/' || req.url === '/health' || req.url === '/ping') {
            res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('Samaksh Bot is operational! 🚀');
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('Not Found');
        }
    });

    server.listen(port, () => {
        console.log(`\x1b[32m  00:00:00   OK     Keep-Alive HTTP server listening on port ${port} (Render / UptimeRobot ready)\x1b[0m`);
    });

    server.on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
            console.log(`\x1b[33m  00:00:00   WARN   Port ${port} in use, skipping HTTP keep-alive server\x1b[0m`);
        } else {
            console.error(`\x1b[31m  00:00:00   ERR    Keep-Alive HTTP server error: ${err.message}\x1b[0m`);
        }
    });
}

module.exports = { startKeepAliveServer };
