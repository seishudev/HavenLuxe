import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App } from '../App.jsx';
import { Main } from '../pages/main/Main.jsx';
import { Cart } from '../pages/cart/Cart.jsx';
import { Auth } from '../pages/auth/Auth.jsx';
import { Registration } from '../pages/registration/Registration.jsx';
import { Profile } from '../pages/profile/Profile.jsx';
import { RequireAuth } from '../components/hoc/RequireAuth.jsx';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Main />} />
          <Route path='cart' element={<Cart />} />
          <Route path='auth' element={<Auth />} />
          <Route path='registration' element={<Registration />} />
          <Route
            path='profile'
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
