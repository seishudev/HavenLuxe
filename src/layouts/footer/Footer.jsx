import { Link } from 'react-router-dom';
import cl from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={cl.footer}>
      <span>Интернет-магазин</span>
      <Link to='/'>
        <div className={cl.logo}>LuxeHaven</div>
      </Link>
      <span>@seishudev</span>
    </footer>
  );
};
