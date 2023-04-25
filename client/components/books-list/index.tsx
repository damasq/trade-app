import BookItem from '../book-item';
import styles from './style.css';

const BooksList = () => {
  return (
    <div className={styles.container}>
      <BookItem />
      <BookItem />
      <BookItem />
      <BookItem />
      <BookItem />
      <BookItem />
      <BookItem />
    </div>
  );
};

export default BooksList;
