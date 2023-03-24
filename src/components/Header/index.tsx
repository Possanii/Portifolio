import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import LogoIcon from '../../assets/icons/discord.png';

const Rotas = [{
  to: '#Home',
  nome: 'Home'
},
{
  to: '#AboutMe',
  nome: 'About Me'
}];

const Header = () => {
  return (
    <header className={styles.container} id='Home'>
      <Link to='/' className={styles.logo}>
        <img src={LogoIcon} alt='logo' width='30' height='30' />
        <span>Gustavo Piovesan</span>
      </Link>
      <nav className={styles.navbar} >
        <ul className={styles.rotulos}>
          {Rotas.map((rota, index) =>
            <a className={styles.rotulo_pagina} key={index} href={rota.to} >{rota.nome}</a>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;