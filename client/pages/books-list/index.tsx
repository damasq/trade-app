import BookItem from '../../components/book-item';
import styles from './style.css';
import {booksSelector} from '../../redux';
import {Book} from '../../types';
import Icon from '../../components/icon';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {useEffect, useState} from 'react';
import {fetchBooks} from '../../redux/booksReducer';

const BooksList = () => {
  // const books = useAppSelector(booksSelector.all);
  const books = useAppSelector(state => state.books.data);
  // console.log('2', books);

  const dispatch = useAppDispatch();
  // dispatch(fetchBooks());

  return (
    <div className={styles.container}>
      {/* <BookItem />
      <BookItem />
      <BookItem />
      <BookItem />
      <BookItem />
      <BookItem />
      <BookItem /> */}
      <button onClick={() => dispatch(fetchBooks())}>click</button>
      <Icon name="star" />
      {books.map((book, i) => (
        <BookItem key={i} book={book} />
      ))}
    </div>
  );
};

export default BooksList;
