import styles from './style.css';
import {Book, Offer} from '../../types';
import {Link} from 'react-router-dom';

// type Offer = {
//   date: string
//   give: string
//   want: string
//   id: number
//   user: {
//     id: number
//     username: string
//   }
// }

// type Offer = any

interface Props {
  offer: Offer;
}

const OfferItem = ({offer}: Props) => {
  console.log(offer.user);

  return (
    <div className={styles.wrapper}>
      <div className={styles.offerItem}>
        <p>{offer.user.username}</p>
        <p>{offer.want}</p>

        <p>{offer.give}</p>

        <p>{offer.date}</p>
        <Link to={`/${offer.user.id}/offers/${offer.id}`}>Open</Link>
      </div>
    </div>
  );
};

export default OfferItem;
