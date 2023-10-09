import styles from './style.css';
import {Offer} from '../../types';
import {Link} from 'react-router-dom';
import {useAppDispatch} from '../../redux/hooks';
import {removeOfferById} from '../../redux/userReducer';

interface Props {
  offer: Offer;
}

const UserOfferItem = ({offer}: any) => {
  const dispatch = useAppDispatch();

  console.log(12, offer);
  return (
    <div className={styles.wrapper}>
      <div className={styles.offerImage}></div>
      <div className={styles.offerInfo}>
        <p>give:</p>
        <p className={styles.give}>{offer.give}</p>

        <p>for your:</p>
        <p className={styles.want}>{offer.want}</p>

        <p className={styles.address}>63 Sutor Drive Ellicott City, MD 21042</p>

        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, perspiciatis?
        </p>

        <p className={styles.date}>{offer.date}</p>
        <div className={`${styles.linkStyle} ${styles.offerLink}`}>
          <Link to={`/offers/${offer.id}`}>Open</Link>
        </div>

        {/* <button onClick={() => dispatch(removeOfferById(offer.id))} className={styles.deleteBtn}>
          // X
        </button> */}
        <div className={styles.buttons}>
          <button className={styles.editBtn}>Edit</button>
          <button onClick={() => dispatch(removeOfferById(offer.id))} className={styles.deleteBtn}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserOfferItem;
