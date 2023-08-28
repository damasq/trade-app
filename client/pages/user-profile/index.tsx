import styles from './style.css';
import Icon from '../../components/icon';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {useEffect} from 'react';
import OfferItem from '../../components/offer-item';
import {Link, useParams} from 'react-router-dom';
import {fetchProfile} from '../../redux/userReducer';

const UserProfile = () => {
  const user = useAppSelector(state => state.user.data);
  const params = useParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfile(Number(params.id)));
  }, []);

  return (
    <div className={styles.container}>
      <p>Profile</p>
      <div className={styles.avatar}></div>
      <p>{user.username}</p>
      <Link to="offers">
        <p>offers list</p>
      </Link>
    </div>
  );
};

export default UserProfile;
