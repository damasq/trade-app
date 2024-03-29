import express from 'express';
import { postgresDS } from '../data-source';
import { Offer } from '../entity/Offer';
import { User } from '../entity/User';

const offerRouter = express.Router();

offerRouter.get('/', async (req, res) => {
  // const id = Number(req.params.id);
  const offers = await postgresDS.getRepository(Offer).find({
    relations: {
      user: true,
    },
  });
  res.send(offers);
});


offerRouter.get('/:id', async (req, res) => {
  const id = Number(req.params.id);
  const offer = await postgresDS.getRepository(Offer).findOne({
    where: {
      id,
    },
    relations: {
      user: true,
    },
  });
  // console.log(offer)

  res.send(offer);
});
// 

offerRouter.delete('/:id', async (req, res) => {
  const id = Number(req.params.id);

  const offer = await postgresDS.getRepository(Offer).findOneBy({ id }) as Offer
  await postgresDS.getRepository(Offer).remove(offer)

  res.send()
})

offerRouter.post('/', async (req, res) => {
  const { give, want } = req.body.data
  const offer = new Offer();
  offer.give = give;
  offer.want = want;
  offer.date = new Date().toLocaleString('en-GB', { timeZone: 'UTC' });

  const user = await postgresDS.getRepository(User).findOne({
    where: {
      id: 1,
    },
    relations: {
      offers: true,
    },
  });
  // 
  offer.user = user as User

  // user?.offers.push(offer)
  await postgresDS.getRepository(Offer).save(offer)
  // 
})

offerRouter.get('/add_data', async (req, res) => {
  const offer = new Offer();
  offer.give = 'GIVE-3';
  offer.want = 'WANT-3';
  offer.date = new Date().toString();

  const user = new User();
  user.username = 'USERNAME-3';
  user.offers = [offer];

  const offerRepository = postgresDS.getRepository(Offer);
  const userRepository = postgresDS.getRepository(User);

  await offerRepository.save(offer);
  await userRepository.save(user);

  const savedOffers = await offerRepository.find();
  const savedUser = await userRepository.find();

  console.log(savedOffers);
  console.log(savedUser);
  // await saveAuthor(author);
  // const authors = await getAuthorsList();
  res.json([savedOffers, savedUser]);
});

offerRouter.get('/add_offer', async (req, res) => {
  const offer = new Offer();
  offer.give = 'GIVE-100';
  offer.want = 'WANT-100';
  offer.date = new Date().toString();

  const user = (await postgresDS.getRepository(User).findOne({
    where: {
      id: 3,
    },
    relations: {
      offers: true,
    },
  })) as User;

  const offerRepository = postgresDS.getRepository(Offer);
  await offerRepository.save(offer);

  user.offers.push(offer);

  const userRepository = postgresDS.getRepository(User);

  await userRepository.save(user);
  res.json([user]);
});

offerRouter.get('/delete', async (req, res) => {
  const offer = new Offer();
  offer.give = 'GIVE-3';
  offer.want = 'WANT-3';
  offer.date = new Date().toString();

  const user = new User();
  user.username = 'USERNAME-3';
  user.offers = [offer];

  const offerRepository = postgresDS.getRepository(Offer);
  const userRepository = postgresDS.getRepository(User);

  await offerRepository.save(offer);
  await userRepository.save(user);

  const savedOffers = await offerRepository.find();
  const savedUser = await userRepository.find();

  console.log(savedOffers);
  console.log(savedUser);
  // await saveAuthor(author);
  // const authors = await getAuthorsList();
  res.json([savedOffers, savedUser]);
});

export default offerRouter;
