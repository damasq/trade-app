import styles from './style.css';
import {Offer} from '../../types';
import {Link} from 'react-router-dom';

interface Props {
  offer: Offer;
}

const OfferItem = ({offer}: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.images}>
        <div className={styles.img}></div>
        <div className={styles.img}></div>
        <div className={styles.img}></div>
        <div className={styles.img}></div>
      </div>
      <span className={`${styles.linkStyle} ${styles.profileLink}`}>
        <Link to={`users/${offer.user.id}`}>{offer.user.username}</Link>
      </span>

      <p>{offer.give}</p>

      <p>{offer.want}</p>

      <div className={styles.bottomBlock}>
        <p className={styles.date}>{offer.date}</p>
        <p className={styles.address}>63 Sutor Drive Ellicott City, MD 21042</p>
        <span className={`${styles.linkStyle} ${styles.offerLink}`}>
          <Link to={`offers/${offer.id}`}>Open</Link>
        </span>
      </div>
    </div>
  );
};

export default OfferItem;
