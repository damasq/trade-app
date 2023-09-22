import styles from './style.css';
import Icon from '../../components/icon';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import {fetchProfile, removeOfferById} from '../../redux/userReducer';

const UserOfferItem = ({offer}: any) => {
  const dispatch = useAppDispatch();

  console.log(12, offer);
  return (
    <div className={styles.wrapper}>
      <div className={styles.offerItem}>
        <p>{offer.want}</p>

        <p>{offer.give}</p>

        <div className={styles.bottomBlock}>
          <p className={styles.date}>{offer.date}</p>
          <span className={`${styles.linkStyle} ${styles.offerLink}`}>
            <Link to={`/offers/${offer.id}`}>Open</Link>
          </span>
        </div>

        <button onClick={() => dispatch(removeOfferById(offer.id))} className={styles.deleteBtn}>
          X
        </button>
      </div>
    </div>
  );
};

const UserProfile = () => {
  const user = useAppSelector(state => state.user.data);
  const params = useParams();
  const offers = user.offers;

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfile(Number(params.id)));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.avatar}></div>
      <p>{user.username}</p>

      <h3>Offers List</h3>

      <div className={styles.offersList}>
        {offers ? (
          offers.map(offer => <UserOfferItem key={offer.id} offer={offer} />)
        ) : (
          <div>
            <p>No Offers</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
