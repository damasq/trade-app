import express from 'express';
import {getBooksList, getBook, updateCart} from '../controllers/books';

const booksRouter = express.Router();

booksRouter.get('/', async (req, res) => {
  const books = await getBooksList();
  res.send(books);
});

booksRouter.get('/:id', async (req, res) => {
  const book = await getBook(req.params.id);
  res.send(book);
});

booksRouter.put('/:id/updateCart', async (req, res) => {
  await updateCart(req.params.id);
  // res.send();
});

// booksRouter.put('?search', (req, res) => {
//   const books = getBooksList();
//   res.send(books);
// });

export default booksRouter;
