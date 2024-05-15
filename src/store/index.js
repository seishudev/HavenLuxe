import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { favoritesReducer } from './reducers/favorites.slice.js';
import { cartReducer } from './reducers/cart.slice.js';
import { searchReducer } from './reducers/search.slice.js';
import { productAPI } from '../services/ProductService.js';
import { userAPI } from '../services/UserService.js';

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  cart: cartReducer,
  search: searchReducer,
  [productAPI.reducerPath]: productAPI.reducer,
  [userAPI.reducerPath]: userAPI.reducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(productAPI.middleware, userAPI.middleware)
});
