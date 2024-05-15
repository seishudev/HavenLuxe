import { Outlet } from 'react-router-dom';
import { Header } from './layouts/header/Header.jsx';
import { Footer } from './layouts/footer/Footer.jsx';
import './assets/styles/main.scss';

export const App = () => {
  return (
    <div className='wrapper'>
      <Header />
      <main className='main'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
