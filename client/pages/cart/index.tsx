import {useSelector} from 'react-redux';
import {Book} from '../../types';
import BookItem from '../../components/book-item';
import styles from './style.css';
import {booksSelector} from '../../redux';
import {useAppSelector} from '../../redux/hooks';

const CartPage = () => {
  const books = useAppSelector(booksSelector.inCart);

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
