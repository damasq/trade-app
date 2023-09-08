import styles from './style.css';
import {Offer} from '../../types';
import {Link} from 'react-router-dom';

interface Props {
  offer: Offer;
}

const OfferItem = ({offer}: Props) => {
  return (
    <div className={styles.wrapper}>
      <span className={`${styles.linkStyle} ${styles.profileLink}`}>
        <Link to={`users/${offer.user.id}`}>{offer.user.username}</Link>
      </span>
      <p>{offer.want}</p>

      <p>{offer.give}</p>

      <div className={styles.bottomBlock}>
        <p className={styles.date}>{offer.date}</p>
        <span className={`${styles.linkStyle} ${styles.offerLink}`}>
          <Link to={`offers/${offer.id}`}>Open</Link>
        </span>
      </div>
    </div>
  );
};

export default OfferItem;
