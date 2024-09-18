import http from 'node:http';
import url from 'node:url';
import path from 'node:path';
import express from 'express';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.get(['/', '/index'], (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '/about.html'));
});

app.get('/contact-me', (req, res) => {
  res.sendFile(path.join(__dirname, '/contact-me.html'));
});

// The 404 Route (ALWAYS keep this as the last route)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './404.html'));
});

app.listen(3000);
