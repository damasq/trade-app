import {useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import ChatPageItem from '../../components/message-item';
import {useAppSelector} from '../../redux/hooks';
import styles from './style.css';

const arr = Array(20).fill('Lorem ipsum dolor sit amet.');

const ChatPage = () => {
  const [messages, setMessages] = useState(arr);
  const [text, setText] = useState('');

  const messageHandler = () => {
    setMessages(prevState => [text, ...prevState]);
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
