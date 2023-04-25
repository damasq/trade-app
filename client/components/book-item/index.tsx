import styles from './style.css';
import book_cover from './book_cover.jpg';
import starIcon from './Star_light.svg';
import addButtonIcon from './Add_square_light.svg';

const BookItem = () => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.cover}> */}
      <img className={styles.cover} src={book_cover} alt="" />
      {/* </div> */}
      <div className={styles.data}>
        <p className={styles.author}>Nora Barrett</p>
        <p className={styles.title}>The king</p>
        <div className={styles.infoBlock}>
          <div className={styles.rating}>
            <img src={starIcon} alt="" />
            <p>3.5</p>
          </div>
          <span className={styles.price}>$12.3</span>
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
