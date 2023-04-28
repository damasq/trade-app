import {useSelector} from 'react-redux';
import BookItem from '../book-item';
import styles from './style.css';
import {booksSelector} from '../../redux';
import {IBook} from '../../types';

const BooksList = () => {
  const books = useSelector(booksSelector.all);
  console.log(books);

  return (
    <div className={styles.container}>
      {/* <BookItem />
      <BookItem />
      <BookItem />
      <BookItem />
      <BookItem />
      <BookItem />
      <BookItem /> */}
      {books.map((book, i) => (
        <BookItem key={i} book={book} />
      ))}
    </div>
  );
};

export default BooksList;
