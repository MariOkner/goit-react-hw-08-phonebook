import { useAuth } from 'hooks';

import { TitlePhonebook, PhonebookIcon, Link, Nav } from './Navigation.style';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Nav>
      <TitlePhonebook title="Phonebook">
        <PhonebookIcon />
        Phonebook
      </TitlePhonebook>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </Nav>
  );
};
