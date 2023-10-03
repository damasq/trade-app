import styles from './style.css';
import menuIcon from './img/Menu.svg';
import logo from './img/logo.svg';
import searchIcon from './img/Search_light.svg';
import cartIcon from './img/Basket_alt_2_light.svg';

import homeIcon from './img/Home_light.svg';
import orderIcon from './img/Order_light.svg';
import chatIcon from './img/Chat_light.svg';
import profileIcon from './img/User_circle_light.svg';

import {Link, NavLink, Outlet} from 'react-router-dom';

const Layout = () => {
  // const logo = require('./Logo.svg') as string;
  return (
    <div className={styles.wrapper}>
      <main className={styles.content}>
        <Outlet />
      </main>
      <div className={styles.navbar}>
        <NavLink to="/" className={({isActive}) => (isActive ? styles.navPadActive : styles.navPad)}>
          <img src={homeIcon} alt="" />
        </NavLink>
        <NavLink to="/" className={({isActive}) => (isActive ? styles.navPadActive : styles.navPad)}>
          <img src={orderIcon} alt="" />
        </NavLink>

        <Link to="offers/form">
          <div className={`${styles.navPad} ${styles.addOfferBtn}`}></div>
        </Link>

        <NavLink to="/dialogs" className={({isActive}) => (isActive ? styles.navPadActive : styles.navPad)}>
          <img src={chatIcon} alt="" />
        </NavLink>

        <NavLink to="/users/1" className={({isActive}) => (isActive ? styles.navPadActive : styles.navPad)}>
          <img src={profileIcon} alt="" />
        </NavLink>
      </div>
    </div>
  );
};

export default Layout;
