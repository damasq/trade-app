import express from 'express';

import booksRouter from './books';
import cartRouter from './cart';

const baseRouter = express.Router();

baseRouter.use('/books', booksRouter);
baseRouter.use('/cart', cartRouter);

export default baseRouter;
