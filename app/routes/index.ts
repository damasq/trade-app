import express from 'express';

import booksRouter from './books';
import authorsRouter from './authors';
import cartRouter from './cart';

const baseRouter = express.Router();

baseRouter.use('/books', booksRouter);
baseRouter.use('/authors', authorsRouter);
baseRouter.use('/cart', cartRouter);

export default baseRouter;
