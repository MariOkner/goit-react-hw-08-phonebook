import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';

import {
  ContactListHTML,
  ContactItemHTML,
  ContactDeleteHTML,
} from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  return (
    <ContactListHTML>
      {contacts.map(({ id, name, number }) => (
        <ContactItemHTML key={id}>
          {name}: {number}
          <ContactDeleteHTML
            id={id}
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </ContactDeleteHTML>
        </ContactItemHTML>
      ))}
    </ContactListHTML>
  );
};
