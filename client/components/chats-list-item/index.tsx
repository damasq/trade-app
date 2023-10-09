import styles from './style.css';
import {Offer} from '../../types';
import {Link} from 'react-router-dom';

const ChatsListItem = () => {
  return (
    <div className={styles.wrapper}>
      {/* <p>chat item</p> */}
      <div className={styles.flexitem_1}>
        <div className={styles.avatar}></div>
      </div>
      <div className={styles.flexitem_2}>
        <p className={styles.name}>name lastname</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet con qwerty qwe.</p>
      </div>
      <div className={styles.flexitem_3}>
        <div className={styles.date}>10:00</div>
      </div>
      <div className={styles.openChatLink}>
        <Link to="/chat">open</Link>
      </div>
    </div>
  );
};

export default ChatsListItem;
