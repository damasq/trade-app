import styles from './style.css';
import book_cover from './book_cover.jpg';
import starIcon from './Star_light.svg';
import addButtonIcon from './Add_square_light.svg';
import {IBook} from '../../types';

interface Props {
  book: IBook;
}

const BookItem = (props: Props) => {
  console.log(props);
  const book = props.book;

  return (
    <div className={styles.container}>
      {/* <div className={styles.cover}> */}
      <img className={styles.cover} src={book_cover} alt="" />
      {/* </div> */}
      <div className={styles.data}>
        <p className={styles.author}>{book.author}</p>
        <p className={styles.title}>{book.title}</p>
        <div className={styles.infoBlock}>
          <div className={styles.rating}>
            <img src={starIcon} alt="" />
            <p>{book.rating}</p>
          </div>
          <span className={styles.price}>${book.price}</span>
          {/* <span>[+]</span> */}
          <button className={styles.addButton}>
            <img src={addButtonIcon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
