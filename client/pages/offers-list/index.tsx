import styles from './style.css';
import Icon from '../../components/icon';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {useEffect, useState} from 'react';
import OfferItem from '../../components/offer-item';
import {fetchOffers} from '../../redux/offerReducer';
import filterIcon from './img/Filter_big.png';

const OffersList = () => {
  const offers = useAppSelector(state => state.offers.list);

  const dispatch = useAppDispatch();
  console.log(1, offers);

  useEffect(() => {
    dispatch(fetchOffers());
    console.log('useEffect');
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerWrapper}>
          <input className={styles.searchInput} type="text" placeholder="Search here..." />
          <button className={styles.searchButton}>
            <img className={styles.filterIcon} src={filterIcon} alt="" />
          </button>
        </div>
      </div>
      <div className={styles.content}>
        {offers.map(offer => (
          <OfferItem key={offer.id} offer={offer} />
        ))}
      </div>
    </div>
  );
};

export default OffersList;
