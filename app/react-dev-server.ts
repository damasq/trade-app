import express, {RequestHandler} from 'express';
import path from 'path';
import WebSocket from 'ws';
import {Server} from 'http';
import fs from 'fs/promises';

const PUBLIC_DIR = path.join(process.cwd(), 'build');
const HTML_FILE = path.join(PUBLIC_DIR, 'index.html');

export function startReactServer(server: Server) {
  const webSocketServer = new WebSocket.Server({server});

  webSocketServer.on('connection', async ws => {
    for await (const event of fs.watch(PUBLIC_DIR, {recursive: true})) {
      ws.send(JSON.stringify({needRefresh: true}));
    }
  });
}

export const reactPages = express.static(PUBLIC_DIR);

export const pagesHandler: RequestHandler = (req, res) => {
  res.sendFile(HTML_FILE);
};
