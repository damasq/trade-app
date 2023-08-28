import styles from './style.css';
import {Offer} from '../../types';
import {Link} from 'react-router-dom';

interface Props {
  offer: Offer;
}

const OfferItem = ({offer}: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.offerItem}>
        <p>
          <Link to={`user/${offer.user.id}`}>{offer.user.username}</Link>
        </p>
        <p>{offer.want}</p>

        <p>{offer.give}</p>

        <p>{offer.date}</p>
        <Link to={`offers/${offer.id}`}>Open</Link>
      </div>
    </div>
  );
};

export default OfferItem;
