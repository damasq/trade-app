import express from 'express';

import offerRouter from './offer';
import userRouter from './user';

const baseRouter = express.Router();

// baseRouter.use('/books', booksRouter);

baseRouter.use('/users', userRouter);
baseRouter.use('/offers', offerRouter);

export default baseRouter;
