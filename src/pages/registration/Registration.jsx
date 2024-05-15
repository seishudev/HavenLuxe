import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {
  useFetchAllUsersQuery,
  useAddUserMutation
} from '../../services/UserService.js';
import { Field } from '../../components/ui/field/Field.jsx';
import { message } from 'antd';
import cl from './Registration.module.scss';

export const Registration = () => {
  const navigate = useNavigate();
  const {
    register,
    watch,
    reset,
    formState: { errors },
    handleSubmit
  } = useForm({
    mode: 'onBlur'
  });
  const { data } = useFetchAllUsersQuery();
  const [addUser, { isLoading, error }] = useAddUserMutation();
  const password = watch('password');
  const onSubmit = formData => {
    const existingUser = data.find(user => user.email === formData.email);
    if (existingUser) {
      message.error('Already exist!');
    } else {
      if (isLoading) {
        message.loading('Loading...');
        return;
      }
      if (error) {
        message.error('Error!');
        return;
      }
      addUser({ email: formData.email, passwordHash: formData.password });
      navigate('/auth', { replace: true });
      message.success('Registered!');
    }
    reset();
  };
  return (
    <section className={cl.container}>
      <form className={cl.form} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={cl.title}>Регистрация</h1>
        <Field
          label='Email'
          type='text'
          register={register}
          name='email'
          validate={{
            required: 'Поле обязательно для заполнения',
            pattern: {
              value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
              message: 'Поле должно содержать E-Mail в формате example@site.com'
            }
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
            required: 'Поле обязательно для заполнения',
            minLength: {
              value: 6,
              message: 'Минимум 6 символов'
            }
          }}
          error={
            errors.password && (
              <div className='error'>{errors.password.message}</div>
            )
          }
        />
        <Field
          label='Confirm Password'
          type='password'
          register={register}
          name='confirm'
          validate={{
            required: 'Поле обязательно для заполнения',
            validate: value => value === password || 'Пароли не совпадают'
          }}
          error={
            errors.confirm && (
              <div className='error'>{errors.confirm.message}</div>
            )
          }
        />
        <input className={cl.enter} type='submit' value='Зарегистрироваться' />
        <p className={cl.login}>
          Уже имеется учетная запись?{' '}
          <Link className={cl.link} to='/auth'>
            Авторизация
          </Link>
        </p>
      </form>
    </section>
  );
};
