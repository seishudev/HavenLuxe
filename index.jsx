import ReactDOM from 'react-dom/client';
import { AppRouter } from './src/routes/AppRouter.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './src/store/index.js';
import './src/assets/styles/main.scss';
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
