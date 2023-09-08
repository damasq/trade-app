import styles from './style.css';
import {Offer} from '../../types';
import {Link} from 'react-router-dom';

interface Props {
  offer: Offer;
}

const MessageItem = ({message, i}: any) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>
        {message} {i}
      </p>
    </div>
  );
};

export default MessageItem;
