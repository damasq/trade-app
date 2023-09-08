import express from 'express';
import {postgresDS} from '../data-source';
import {Offer} from '../entity/Offer';
import {User} from '../entity/User';

const userRouter = express.Router();

userRouter.get('/:id', async (req, res) => {
  const id = Number(req.params.id);
  const user = await postgresDS.getRepository(User).findOne({
    where: {
      id,
    },
    relations: {
      offers: true,
    },
  });
  //
  res.send(user);
});

// userRouter.get('/', async (req, res) => {
//   const users = await postgresDS.getRepository(User).find({
//     relations: {
//       offers: true,
//     },
//   });
//   res.send(users);
// });

export default userRouter;
