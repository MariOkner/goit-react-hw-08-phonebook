import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';

import { WrapperHTML, UsernameHTML, Button } from './UseMenu.style';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());

  return (
    <WrapperHTML>
      <UsernameHTML>Welcome, {user.name}</UsernameHTML>
      <Button type="button" onClick={handleLogOut}>
        Logout
      </Button>
    </WrapperHTML>
  );
};
