import { useNavigate } from 'react-router-dom';
import cl from './Profile.module.scss';

export const Profile = () => {
  const navigate = useNavigate();
  function logOut() {
    localStorage.removeItem('userId');
    localStorage.removeItem('userEmail');
    navigate('/auth');
  }
  return (
    <section className={cl.container}>
      <div className={cl.profile}>
        <h2 className={cl.title}>Email: {localStorage.getItem('userEmail')}</h2>
        <button className={cl.btn} onClick={() => logOut()}>
          Выйти
        </button>
      </div>
    </section>
  );
};
