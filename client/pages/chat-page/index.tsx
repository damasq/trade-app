import {useState} from 'react';
import {useParams} from 'react-router-dom';
import MessageItem from '../../components/message-item';
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
        <button>back</button>
        <div className={styles.avatar}></div>
        <p>Username</p>
      </div>
      <div className={styles.messagesContainer}>
        {messages.map((message, i) => (
          <MessageItem key={i} message={message} i={i} />
        ))}
      </div>
      <div className={styles.inputContainer}>
        <input
          value={text}
          onChange={event => {
            setText(event.target.value);
          }}
          type="text"
          placeholder="type message"
        />
        <button onClick={messageHandler} type="button">
          Send
        </button>
      </div>
      {/* </div> */}
    </div>
  );
};

export default ChatPage;
