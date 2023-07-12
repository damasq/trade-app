import 'reflect-metadata';
import express from 'express';

import baseRouter from './routes';
import {reactPages, pagesHandler, startReactServer} from './react-dev-server';
import {postgresDS} from './data-source';
import {Author} from './entity/Author';
import {Book} from './entity/Book';
import data from './data.js';

// let data1 = data;

type InitBook = {
  title: string;
  description: string;
  price: number;
  rating: number;
};

type InitAuthor = {
  firstName: string;
  lastName: string;
  books: InitBook[];
};

type InitData = InitAuthor[];

// console.log(data);

// const data = [
//   {
//     firstName: 'Number',
//     lastName: 'Oneasd',
//     books: [
//       {
//         title: 'BOOK_1',
//         description: 'DESCRIPTION_1',
//         price: 111,
//         rating: 1,
//       },
//     ],
//   },
//   {
//     firstName: 'Number',
//     lastName: 'Two',
//     books: [
//       {
//         title: 'book_1',
//         description: 'description_1',
//         price: 11100,
//         rating: 1,
//       },
//     ],
//   },
// ];

postgresDS
  .initialize()
  .then(async () => {
    console.log(data);
    data.forEach(async _ => {
      const author = new Author();
      author.firstName = _.firstName;
      author.lastName = _.lastName;
      author.books = await Promise.all(
        _.books.map(async _ => {
          const book = new Book();
          book.title = _.title;
          book.description = _.description;
          book.price = _.price;
          book.rating = _.rating;
          await postgresDS.manager.save(book);
          return book;
        }),
      );
      await postgresDS.manager.save(author);
    });
  })
  .catch(error => console.log('Error: ', error));

const app = express();
const port = 3000;

app.use('/api', baseRouter);

app.use(reactPages);
app.get('*', pagesHandler);

const server = app.listen(port, () => {
  console.log(`Open the http://localhost:${port}`);
});

startReactServer(server);
