import express from 'express';
import {getBooksList, getBook, addToCart} from '../controllers/books';

const booksRouter = express.Router();

booksRouter.get('/', (req, res) => {
  const books = getBooksList();
  res.send(books);
});

booksRouter.get('/:id', (req, res) => {
  const book = getBook();
  res.send(book);
});

booksRouter.put('/:id/addToCart', (req, res) => {
  // const book = getBook();
  addToCart();
  res.send();
});

booksRouter.put('?search', (req, res) => {
  const books = getBooksList();
  res.send(books);
});

export default booksRouter;
