import express from 'express';
import {getBooksList, getBook, createBook, saveBook} from '../controllers/booksController';
import {Book} from '../entity/Book';
import {booksRepository} from '../repositories/books';
import {createAuthor, getAuthor, getAuthorsList, saveAuthor} from '../controllers/authorController';
import {Author} from '../entity/Author';
import {postgresDS} from '../data-source';

const booksRouter = express.Router();

booksRouter.get('/', async (req, res) => {
  const books = await getBooksList();
  console.log('we are here');
  res.send(books);
});

// ---- add new to DB ----

booksRouter.get('/add_a', async (req, res) => {
  const author = new Author();
  author.firstName = 'Number';
  author.lastName = 'Ten';

  const book = new Book();
  book.title = 'BOOK_15';
  book.description = 'DESCRIPTION_15';
  book.price = 100;
  book.rating = 4;

  author.books = [...author.books, book];

  const authorsRepository = postgresDS.getRepository(Author);
  const booksRepository = postgresDS.getRepository(Book);

  // await authorsRepository.save(author);
  await booksRepository.save(book);

  const savedAuthors = await authorsRepository.find();
  const savedBooks = await booksRepository.find();

  console.log(savedAuthors);
  console.log(savedBooks);
  // await saveAuthor(author);
  // const authors = await getAuthorsList();
  res.json([savedAuthors, savedBooks]);
});

booksRouter.get('/add_b', async (req, res) => {
  const authorsRepository = postgresDS.getRepository(Author);
  const authors = await authorsRepository.find({
    relations: {
      books: true,
    },
  });

  // const authors1 = await postgresDS
  //   .getRepository(Author)
  //   .createQueryBuilder('author')
  //   .innerJoinAndSelect('author.book', 'book')
  //   .getMany();

  console.log(authors);
  res.json(authors);
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
