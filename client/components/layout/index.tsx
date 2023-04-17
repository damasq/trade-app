import BookItem from '../book';
import styles from './style.css';

const Layout = () => {
  return (
    <div className={styles.test}>
      <header className={styles.header}>
        <div>burger</div>
        <div>
          logo
          {/* <img src={require('./Logo.svg')} alt="" /> */}
        </div>
        <div>loupe</div>
        <div>cart</div>
      </header>
      <main className={styles.main}>
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
      </main>
    </div>
  );
};

export default Layout;
