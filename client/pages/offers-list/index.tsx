import styles from './style.css';
import Icon from '../../components/icon';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {useEffect, useState} from 'react';
import OfferItem from '../../components/offer-item';
import {fetchOffers} from '../../redux/offerReducer';

const OffersList = () => {
  const offers = useAppSelector(state => state.offers.list);

  const dispatch = useAppDispatch();
  console.log(1, offers);

  useEffect(() => {
    dispatch(fetchOffers());
    console.log('useEffect');
  }, [offers]);

  return (
    <div className={styles.container}>
      {offers.map(offer => (
        <OfferItem key={offer.id} offer={offer} />
      ))}
    </div>
  );
};

export default OffersList;
