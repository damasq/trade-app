import styles from './style.css';
import {booksSelector} from '../../redux';
import {Book} from '../../types';
import Icon from '../../components/icon';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {useEffect, useState} from 'react';
import {fetchBooks} from '../../redux/booksReducer';
import OfferItem from '../../components/offer-item';
import {fetchOffers} from '../../redux/offerReducer';

const UserProfile = () => {
  const offers = useAppSelector(state => state.offers.data);

  const dispatch = useAppDispatch();
  console.log(1, offers);

  useEffect(() => {
    dispatch(fetchOffers());
    console.log('useEffect');
  }, []);

  return <div className={styles.container}></div>;
};

export default UserProfile;
