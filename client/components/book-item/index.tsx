import styles from './style.css';
import book_cover from './img/book_cover.jpg';
import starIcon from './img/Star_light.svg';
import addButtonIcon from './img/Add_square_light.svg';
import {Book} from '../../types';

interface Props {
  book: Book;
}

const BookItem = (props: Props) => {
  console.log(props);
  const book = props.book;

  return (
    <div className={styles.wrapper}>
      <img className={styles.cover} src={book_cover} alt="" />
      <div className={styles.data}>
        <p className={styles.author}>{book.author}</p>
        <p className={styles.title}>{book.title}</p>

        {/* <div className={styles.container}>
          <div className={styles.rating}>
            <img src={starIcon} alt="" />
            <span>{book.rating}</span>
          </div>
          <div className={styles.priceAndButton}>
            <span className={styles.price}>${book.price}</span>
            <button className={styles.addButton}>
              <img src={addButtonIcon} alt="" />
            </button>
          </div>
        </div> */}

        {/* Убрать лишние стили */}

        <div className={styles.container}>
          <img src={starIcon} alt="" />
          <span>{book.rating}</span>
          <span className={styles.price}>${book.price}</span>
          <button className={styles.addButton}>
            <img src={addButtonIcon} alt="" />
          </button>
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default BookItem;
