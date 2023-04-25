import BookItem from '../book-item';
import styles from './style.css';
import menuIcon from './Menu.svg';
import logo from './logo.svg';
import searchIcon from './Search_light.svg';
import cartIcon from './Basket_alt_2_light.svg';
import BookPage from '../book-page';
import CartPage from '../cart';
import BooksList from '../books-list';

console.log('sad', logo);

const Layout = () => {
  // const logo = require('./Logo.svg') as string;
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.container}>
          <img src={menuIcon} alt="" />
          <div id={styles.mock}></div>
        </div>

        <img src={logo} id={styles.logo} alt="logo" />

        <div className={styles.container}>
          <img src={searchIcon} alt="" />
          <img id={styles.cartIcon} src={cartIcon} alt="" />
        </div>
      </header>
      <main className={styles.content}>
        {/* <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem /> */}
        <BookPage />
        {/* <BooksList /> */}
        {/* <CartPage /> */}
      </main>
    </div>
  );
};

export default Layout;
