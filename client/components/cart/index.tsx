import {useSelector} from 'react-redux';
import {IBook} from '../../types';
import BookItem from '../book-item';
import styles from './style.css';
import {booksSelector} from '../../redux';

const CartPage = () => {
  const books = useSelector(booksSelector.inCart);

  return (
    <div className={styles.container}>
      {/* <BookItem />
      <BookItem />
      <BookItem />
      <BookItem /> */}
      {books.map((book, i) => (
        <BookItem key={i} book={book} />
      ))}
    </div>
  );
};

export default CartPage;
