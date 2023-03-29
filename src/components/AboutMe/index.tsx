import styles from './AboutMe.module.scss';
import profilePhoto from '../../assets/images/Profile.png';


const AboutMe = () => {
  return (
    <div className={styles.container} id='AboutMe'>
      <section className={styles.profile}>
        <h1>About Me</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <a href='Curriculo_Gustavo_Possani_Piovesan.pdf' download='Curriculo_Gustavo_Possani_Piovesan.pdf'>DOWNLOAD CV</a>
      </section>
      <section className={styles.profile}>
        <img src={profilePhoto} />
      </section>
    </div>
  );
};

export default AboutMe;