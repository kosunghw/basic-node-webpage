import http from 'node:http';
import url from 'node:url';
import fs from 'node:fs';

const page404 = fs.readFileSync('./404.html', 'utf-8', (err, data) => {
  if (err) throw err;
  return data;
});

const server = http.createServer((req, res) => {
  const q = url.parse(req.url, true);
  let filename;
  if (q.pathname === '/') {
    filename = './index.html';
  } else {
    filename = '.' + q.pathname + '.html';
  }
  fs.readFile(filename, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.write(page404);
      return res.end();
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    return res.end();
  });
});

server.listen(8080);
