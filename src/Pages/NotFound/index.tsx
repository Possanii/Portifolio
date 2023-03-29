import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss';
import title404 from '../../assets/images/backToTheHomepage.png';
import delorean from '../../assets/images/delorean.png';


const NotFound = () => {
  return (
    <body className={styles.body}>
      <section className={styles.notFound}>
        <div className={styles.img}>
          <img src={title404} alt="Back to the Homepage" />
          <img src={delorean} alt="El Delorean, El Doc y Marti McFly" />
        </div>
        <div className={styles.text}>
          <h1>404</h1>
          <h2>PAGE NOT FOUND</h2>
          <h3>BACK TO HOME?</h3>
          <Link to="/" className={styles.yes} >YES</Link>
          <Link to="https://www.youtube.com/watch?v=G3AfIvJBcGo">NO</Link>
        </div>
      </section>
    </body>
  );
};

export default NotFound;