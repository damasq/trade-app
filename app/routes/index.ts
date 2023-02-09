import express from 'express';

import booksRouter from './books';

const baseRouter = express.Router();

baseRouter.use('/books', booksRouter);

export default baseRouter;
