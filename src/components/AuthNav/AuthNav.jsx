import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectLoading, selectError } from 'redux/auth/selectors';
import { Link } from './AuthNav.style';

export const AuthNav = () => {
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    if (error) {
      toast.warn(error);
    }
  }, [error]);

  return (
    <div>
      {isLoading && <Loader />}
      <Link to="/register">Register</Link>
      <Link to="/logIn">Log In</Link>
      <ToastContainer />
    </div>
  );
};
