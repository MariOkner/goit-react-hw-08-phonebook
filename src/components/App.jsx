import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';

import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';

import { refreshUser } from 'redux/auth/operations';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

const Homepage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const ContactPage = lazy(() => import('../pages/Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute element={RegisterPage} redirectTo="/contacts" />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute element={LoginPage} redirectTo="/contacts" />
            }
          />
          <Route
            path="/contacts"
            element={<PrivateRoute element={ContactPage} redirectTo="/Login" />}
          />
        </Route>
      </Routes>
    )
  );
};
