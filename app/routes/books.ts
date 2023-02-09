import express from 'express';
import {getBooksList} from '../controllers/books';

const booksRouter = express.Router();

booksRouter.get('/', (req, res) => {
  const books = getBooksList();
  res.send(books);
});

export default booksRouter;
