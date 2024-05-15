import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { favoritesSlice } from '../store/reducers/favorites.slice.js';
import { cartSlice } from '../store/reducers/cart.slice.js';
import { searchSlice } from '../store/reducers/search.slice.js';

const rootActions = {
  ...favoritesSlice.actions,
  ...cartSlice.actions,
  ...searchSlice.actions
};

export const useActions = () => {
  const dispatch = useDispatch();
  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
