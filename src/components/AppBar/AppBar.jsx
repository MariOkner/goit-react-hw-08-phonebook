import { useAuth } from 'hooks';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UseMenu/UseMenu';
import { AuthNav } from '../AuthNav/AuthNav';

import { HeaderHTML } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <HeaderHTML>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </HeaderHTML>
  );
};
