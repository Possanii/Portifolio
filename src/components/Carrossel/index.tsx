import Banner from '../../assets/images/Banner.png';
import styles from './Carrossel.module.scss';


const Carrossel = () => {
  return (
    <div className={styles.banner} id='Home'>
      <img src={Banner} alt='Banner' />
      <h1>Welcome Player</h1>
    </div>
  );
};

export default Carrossel;