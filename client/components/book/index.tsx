import styles from './style.css';

const BookItem = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cover}>book cover</div>
      <div className={styles.info}>
        <p className={styles.author}>Nora Barrett</p>
        <p className={styles.title}>The king</p>
        <div>
          <span>star 3.5</span>
          <span>$12.3</span>
          <span>[+]</span>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
