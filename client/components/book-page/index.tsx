import styles from './style.css';
import book_cover from './book_cover.jpg';
import star from './Star_light_0.svg';
import star1 from './Star_light.svg';

const Stars = () => {
  let rating = 3;
  let arr = [];
  // for (let i = 0)
  return (
    <div>
      <img src={star} alt="" />
      <img src={star1} alt="" />
    </div>
  );
};

const BookPage = () => {
  return (
    <div>
      <div className={styles.container}>
        <img src={book_cover} alt="" />
        <div className={styles.info}>
          <p id={styles.title}>To kill a Mockingbird</p>
          <p id={styles.author}>Harper Lee</p>
          <div className={styles.rating}>
            <Stars /> rating
          </div>
          <button>Add to cart</button>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi ipsum eius dicta consequatur aspernatur
        similique, maxime dignissimos amet unde! Sit similique itaque ex dolore, mollitia voluptatem, fugit et adipisci
        facere ut quo nobis, voluptas placeat laudantium quibusdam tenetur nostrum tempora! Ea quos repellat laudantium
        quibusdam explicabo sunt. Consequuntur dolorum numquam qui illum facere voluptatem sit autem quo iusto commodi,
        provident ducimus voluptates perspiciatis, natus impedit ullam voluptas. Consectetur, praesentium velit. Minima
        debitis reiciendis dolor doloribus commodi ex sed exercitationem omnis et nihil. Dolores, incidunt magnam?
        Reprehenderit, error et, ipsam eligendi aspernatur praesentium minus at recusandae molestias aliquam molestiae,
        iure amet?
      </p>
    </div>
  );
};

export default BookPage;
