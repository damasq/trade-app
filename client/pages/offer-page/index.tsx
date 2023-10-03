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
      <div className={styles.images}>
        <div className={styles.img}></div>
        <div className={styles.img}></div>
        <div className={styles.img}></div>
        <div className={styles.img}></div>
      </div>

      <span className={`${styles.linkStyle} ${styles.profileLink}`}>
        <Link to={`/users/${offer.user?.id}`}>{offer.user?.username}</Link>
      </span>
      <p>{offer.want}</p>

      <p>{offer.give}</p>

      <h3>Description</h3>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus asperiores fugiat magni, sapiente cumque
        nihil aliquid ut. Dicta maxime magnam rerum modi ea nobis earum vero, iusto mollitia quos labore!
      </p>

      <div className={styles.bottomBlock}>
        <p className={styles.date}>published at {offer.date}</p>
      </div>

      <button>Open chat</button>
    </div>
  );
};

export default OfferPage;
