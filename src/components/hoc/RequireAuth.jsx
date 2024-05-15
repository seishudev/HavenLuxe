import { useLocation, Navigate } from 'react-router-dom';

export const RequireAuth = ({ children }) => {
  const location = useLocation();
  const auth = !!localStorage.getItem('userId');
  if (!auth) return <Navigate to='/auth' state={{ from: location }} />;
  return children;
};
