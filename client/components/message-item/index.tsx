import styles from './style.css';
import {Offer} from '../../types';
import {Link} from 'react-router-dom';

interface Props {
  offer: Offer;
}

const ChatPageItem = ({message, i}: any) => {
  return (
    <div className={styles.wrapper}>
      <div className={message.sender == 'me' ? styles.sent : styles.incoming}>
        <div>
          <p className={styles.text}>
            {message.text} {i}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatPageItem;
