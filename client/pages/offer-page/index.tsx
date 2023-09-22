import {useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {fetchOfferById} from '../../redux/offerReducer';
import styles from './style.css';

const OfferPage = () => {
  const offer = useAppSelector(state => state.offers.single);
  const dispatch = useAppDispatch();
  const params = useParams();

  useEffect(() => {
    console.log(params.id);
    dispatch(fetchOfferById(Number(params.id)));
  }, []);

  return (
    <div className={styles.wrapper}>
      <span className={`${styles.linkStyle} ${styles.profileLink}`}>
        <Link to={`/users/${offer.user?.id}`}>{offer.user?.username}</Link>
      </span>
      <p>{offer.want}</p>

      <p>{offer.give}</p>

      <div className={styles.bottomBlock}>
        <p className={styles.date}>{offer.date}</p>
      </div>

      <button>Open chat</button>
    </div>
  );
};

export default OfferPage;
