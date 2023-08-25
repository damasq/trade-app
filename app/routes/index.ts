import express from 'express';

import booksRouter from './books';
import authorsRouter from './authors';
import cartRouter from './cart';
import offerRouter from './offer';
import userRouter from './user';

const baseRouter = express.Router();

// baseRouter.use('/books', booksRouter);
baseRouter.use('/user', userRouter);
baseRouter.use('/authors', authorsRouter);
baseRouter.use('/cart', cartRouter);
baseRouter.use('/offer', offerRouter);

export default baseRouter;
