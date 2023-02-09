import express from 'express';

import baseRouter from './routes';
import {reactPages, pagesHandler, startReactServer} from './react-dev-server';

const app = express();
const port = 3000;

app.use('/api', baseRouter);

app.use(reactPages);
app.get('*', pagesHandler);

const server = app.listen(port, () => {
  console.log(`Open the http://localhost:${port}`);
});

startReactServer(server);
