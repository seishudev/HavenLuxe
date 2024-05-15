import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useFetchAllUsersQuery } from '../../services/UserService.js';
import { Field } from '../../components/ui/field/Field.jsx';
import { message } from 'antd';
import cl from './Auth.module.scss';

export const Auth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || '/';
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit
  } = useForm({
    mode: 'onBlur'
  });
  const { data, isLoading, error } = useFetchAllUsersQuery();
  const onSubmit = formData => {
    if (isLoading) message.loading('Loading...');
    if (error) message.error('Error!');
    const existingUser = data.find(user => user.email === formData.email);
    if (existingUser && existingUser.passwordHash === formData.password) {
      localStorage.setItem('userId', existingUser.id);
      localStorage.setItem('userEmail', existingUser.email);
      navigate(fromPage, { replace: true });
      message.success('Authorized!');
    } else {
      message.error('Not found!');
    }
    reset();
  };
  return (
    <section className={cl.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={cl.form}>
        <h1 className={cl.title}>Вход</h1>
        <Field
          label='Email'
          type='text'
          register={register}
          name='email'
          validate={{
            required: 'Поле обязательно для заполнения'
          }}
          error={
            errors.email && <div className='error'>{errors.email.message}</div>
          }
        />
        <Field
          label='Password'
          type='password'
          register={register}
          name='password'
          validate={{
            required: 'Поле обязательно для заполнения'
          }}
          error={
            errors.password && (
              <div className='error'>{errors.password.message}</div>
            )
          }
        />
        <input className={cl.enter} type='submit' value='Войти' />
        <p className={cl.register}>
          У вас нет учетной записи?{' '}
          <Link className={cl.link} to='/registration'>
            Регистрация
          </Link>
        </p>
      </form>
    </section>
  );
};
