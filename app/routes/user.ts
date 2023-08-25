import express from 'express';
import {postgresDS} from '../data-source';
import {Offer} from '../entity/Offer';
import {User} from '../entity/User';

const userRouter = express.Router();

userRouter.get('/', async (req, res) => {
  const users = await postgresDS.getRepository(User).find({
    relations: {
      offers: true,
    },
  });
  res.send(users);
});

export default userRouter;
