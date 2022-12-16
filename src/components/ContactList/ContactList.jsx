import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectVisibleContacts } from 'redux/contacts/selectors';

import {
  ContactListHTML,
  ContactItemHTML,
  ContactDeleteHTML,
} from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
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
