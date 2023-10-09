import styles from './style.css';
import Icon from '../../components/icon';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import {fetchProfile, removeOfferById} from '../../redux/userReducer';
import UserOfferItem from '../../components/user-profile-item';

function formatDate(date: Date) {
  function padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
  }
  return [padTo2Digits(date.getDate()), padTo2Digits(date.getMonth() + 1), date.getFullYear()].join('-');
}

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
      <div className={styles.profile}>
        <div className={styles.avatar}></div>
        <div className={styles.info}>
          <p className={styles.username}>{user.username}</p>

          <p className={styles.registrationDate}>
            <span>user since: </span>
            {formatDate(new Date())}
          </p>

          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, consectetur!
          </p>
        </div>
      </div>

      <h3 className={styles.offerListTitle}>Offers List</h3>

      <div className={styles.offersList}>
        {offers?.length ? (
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
