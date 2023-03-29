import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import LogoIcon from '../../assets/icons/discord.png';
import MenuWhite from '../../assets/icons/menu_white_36dp.svg';

const Rotas = [{
  to: '#Home',
  nome: 'Home'
},
{
  to: '#AboutMe',
  nome: 'About Me'
},
{
  to: '#knowledge',
  nome: 'Knowledge'
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
            <li className={styles.nav_item} key={index}>
              <a className={styles.rotulo_pagina} key={index} href={rota.to} >{rota.nome}</a>
            </li>
          )}
        </ul>
        <div className={styles.mobile_menu_icon}>
          <button>
            <img className="icon" src={MenuWhite} alt="" />
          </button>
        </div>
      </nav>
      <div className={styles.mobile_menu}>
        <ul>
          {Rotas.map((rota, index) =>
            <li className={styles.nav_item} key={index}>
              <a className={styles.rotulo_pagina} key={index} href={rota.to} >{rota.nome}</a>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;