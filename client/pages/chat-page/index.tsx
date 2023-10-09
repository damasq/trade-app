import {useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import ChatPageItem from '../../components/message-item';
import {useAppSelector} from '../../redux/hooks';
import styles from './style.css';

const words = [
  'Lorem',
  'ipsum,',
  'dolor',
  'sit',
  'amet',
  'consectetur',
  'adipisicing',
  'elit.',
  'Unde',
  'eveniet',
  'impedit',
  'ipsam',
  'numquam',
  'vel',
  'natus',
  'quidem',
  'at,',
  'maiores',
  'expedita',
  'consequuntur!',
];

const arr: {sender: string; text: string}[] = [];

for (let i = 0; i < 20; i++) {
  arr.push({
    sender: Math.random() > 0.5 ? 'me' : 'somebody',
    text: words.slice(Math.round(Math.random() * 19)).join(' '),
  });
}

// const arr = Array(20).fill({
//   sender: Math.random() > 0.5 ? 'me' : 'somebody',
//   text: words.slice(Math.ceil(Math.random() * 20)).join(' '),
// });

const ChatPage = () => {
  const [messages, setMessages] = useState(arr);
  const [text, setText] = useState('');

  const messageHandler = () => {
    setMessages(prevState => [{sender: 'me', text}, ...prevState]);
    setText('');
  };

  return (
    <div className={styles.wrapper}>
      {/* <div className={styles.chatItem}> */}
      <div className={styles.header}>
        <Link to="/dialogs">
          <button className={styles.backBtn}>&lt;</button>
        </Link>
        <div className={styles.avatar}></div>
        <p className={styles.username}>Username</p>
      </div>
      <div className={styles.messagesContainer}>
        {messages.map((message, i) => (
          <ChatPageItem key={i} message={message} i={i} />
        ))}
      </div>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          value={text}
          onChange={event => {
            setText(event.target.value);
          }}
          type="text"
          placeholder="type message"
        />
        <button className={styles.sendBtn} onClick={messageHandler} type="button">
          &gt;
        </button>
      </div>
      {/* </div> */}
    </div>
  );
};

export default ChatPage;
