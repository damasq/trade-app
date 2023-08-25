import {useParams} from 'react-router-dom';
import styles from './style.css';

const OfferPage = () => {
  const params = useParams();
  return (
    <div className={styles.wrapper}>
      <div className={styles.offerItem}>
        <p>USERNAME-3</p>
        <p>WANT</p>

        <p>GIVE</p>

        <p>WANT</p>
        <button>Open</button>
      </div>
    </div>
  );
};

export default OfferPage;
