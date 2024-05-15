import cl from './Field.module.scss';

export const Field = ({ label, type, register, name, validate, error }) => {
  return (
    <div className={cl.container}>
      <label className={cl.block}>
        {label}
        <input className={cl.input} type={type} {...register(name, validate)} />
      </label>
      {error}
    </div>
  );
};
