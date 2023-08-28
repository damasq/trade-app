import express from 'express';

import offerRouter from './offer';
import userRouter from './user';

const baseRouter = express.Router();

// baseRouter.use('/books', booksRouter);

baseRouter.use('/user', userRouter);
baseRouter.use('/offer', offerRouter);

export default baseRouter;
