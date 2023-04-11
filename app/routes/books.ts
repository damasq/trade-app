import express from 'express';
import {getBooksList, getBook, createBook, saveBook} from '../controllers/booksController';
import {Book} from '../entity/Book';
import {booksRepository} from '../repositories/books';
import {createAuthor, getAuthor, getAuthorsList, saveAuthor} from '../controllers/authorController';
import {Author} from '../entity/Author';

const booksRouter = express.Router();

booksRouter.get('/', async (req, res) => {
  const books = await getBooksList();
  res.send(books);
});

// ---- add new to DB ----

booksRouter.get('/add_a', async (req, res) => {
  const authorData = {
    firstName: 'Number',
    lastName: 'One',
  };

  const author = createAuthor(authorData);

  await saveAuthor(author);
  const authors = await getAuthorsList();
  res.json(authors);
});

booksRouter.get('/add_b', async (req, res) => {
  // const author = await getAuthor(1)
  // console.log('books:', books);

  const author = (await getAuthor(1)) as Author;

  const book = {
    title: 'BOOK_1',
    description: 'DESCRIPTION_1',
    author_id: author.id,
  };

  console.log('author:', author);

  await saveBook(book);
  await saveAuthor(author);

  const books = await getBooksList();
  res.json(books);
});

booksRouter.get('/add_b2', async (req, res) => {
  const books = await getBooksList();
  // const author = await getAuthor(1)
  console.log('books:', books);
  const book = new Book();
  book.title = 'book 2';
  book.description = '-';

  const author = (await getAuthor(1)) as Author;
  // author.firstName = 'First';
  // author.lastName = 'Last';
  // author.books = [book];
  book.author = author;
  console.log('author:', author);

  // console.log(books)
  await saveBook(book);
  await saveAuthor(author);
  res.json(books);
});

// -----------------------

booksRouter.get('/:id', async (req, res) => {
  const book = await getBook(req.params.id);
  res.send(book);
});

// booksRouter.put('/:id/updateCart', async (req, res) => {
//   await updateCart(req.params.id);
//   res.send();
// });

// booksRouter.get('/test', async (req, res) => {
//   // await updateCart(req.params.id);
//   // console.log("add")
//   const books = await getBooksList();

//   res.send(books);
// });

export default booksRouter;
