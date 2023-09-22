import {FormEvent} from 'react';
import {useNavigate} from 'react-router-dom';
import {useAppDispatch} from '../../redux/hooks';
import {addNewOffer} from '../../redux/offerReducer';
import styles from './style.css';

const OfferFormPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    dispatch(addNewOffer(formData));
    navigate('/');
  }

  return (
    <div className={styles.wrapper}>
      <form className={styles.newOfferForm} method="post" onSubmit={handleSubmit}>
        <label>
          give
          {/* value={'qwe'} */}
          <input id="give" name="give" type="text" />
        </label>
        <label>
          want
          <input id="want" name="want" type="text" />
        </label>
        <button>submit</button>
      </form>
    </div>
  );
};

export default OfferFormPage;
