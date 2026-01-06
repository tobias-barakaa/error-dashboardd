import { createServer } from 'http';
import { handler } from './dist/server/entry.mjs';

const PORT = process.env.PORT || 4321;

const server = createServer((req, res) => {
  // Handle healthcheck endpoint
  if (req.url === '/health' || req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ status: 'ok', timestamp: new Date().toISOString() }));
  }
  
  // Pass to Astro handler
  handler(req, res);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});




