import cl from './Button.module.scss';

export const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={cl.btn}>
      {children}
    </button>
  );
};
