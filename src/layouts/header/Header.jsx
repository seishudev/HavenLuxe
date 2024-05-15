import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useActions } from '../../hooks/useActions.js';
import { IoSearch } from 'react-icons/io5';
import { LuHeart } from 'react-icons/lu';
import { Modal } from '../../components/ui/modal/Modal.jsx';
import { BsCartCheck } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import cl from './Header.module.scss';

export const Header = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [inputVisible, setInputVisible] = useState(false);
  const cart = useSelector(state => state.cart);
  const search = useSelector(state => state.search);
  const { changeSearch } = useActions();
  function openModal() {
    setModal(true);
    document.body.style.overflow = 'hidden';
  }
  function toggleInputVisible() {
    setInputVisible(prevState => !prevState);
  }
  return (
    <header className={cl.header}>
      <Link to='/'>
        <div className={cl.logo}>LuxeHaven</div>
      </Link>
      <div className={cl.nav}>
        {inputVisible && (
          <div className={cl.container}>
            <input
              className={cl.input}
              type='text'
              placeholder='Поиск товаров...'
              value={search}
              onChange={e => changeSearch(e.target.value)}
            />
          </div>
        )}
        <IoSearch onClick={toggleInputVisible} className={cl.search} />
        <LuHeart onClick={openModal} className={cl.heart} />
        <Modal visible={modal} setVisible={setModal} />
        <Link to='/cart'>
          <BsCartCheck className={cl.cart} />
          {cart.length > 0 && (
            <span className={cl.quantity}>{cart.length}</span>
          )}
        </Link>
        <Link to='/profile'>
          <CgProfile className={cl.auth} />
        </Link>
      </div>
    </header>
  );
};
