import 'reflect-metadata';
import express from 'express';

import baseRouter from './routes';
import {reactPages, pagesHandler, startReactServer} from './react-dev-server';
import {postgresDS} from './data-source';
import {offersMock} from './data.js';
import {User} from './entity/User';
import {Offer} from './entity/Offer';

postgresDS
  .initialize()
  .then(async () => {
    console.log(offersMock);
    offersMock.forEach(async _ => {
      const user = new User();
      user.username = _.username;
      user.offers = await Promise.all(
        _.offers.map(async _ => {
          const offer = new Offer();
          offer.give = _.give;
          offer.want = _.want;
          offer.date = _.date;
          await postgresDS.manager.save(offer);
          return offer;
        }),
      );
      await postgresDS.manager.save(user);
    });
  })
  .catch(error => console.log('Error: ', error));

const app = express();
const port = 3000;

app.use('/api', baseRouter);

app.use(reactPages);
app.get('*', pagesHandler);

const server = app.listen(port, () => {
  console.log(`Open the http://localhost:${port}`);
});

startReactServer(server);
