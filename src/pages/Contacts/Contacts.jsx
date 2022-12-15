import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
// import { Helmet } from 'react-helmet';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { selectContacts, selectLoading, selectError } from 'redux/selectors';

import {
  Container,
  PhonebookIcon,
  TitlePhonebook,
  TitleContacts,
} from './Contacts.styled';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.warn(error);
    }
  }, [error]);

  return (
    <>
      <Container>
        <TitlePhonebook title="Phonebook">
          <PhonebookIcon />
          Phonebook
        </TitlePhonebook>
        {isLoading && <Loader />}
        <ContactForm />

        <TitleContacts title="Contacts">Contacts</TitleContacts>
        {contacts.length === 0 ? null : <Filter />}
        {contacts.length === 0 ? null : <ContactList />}
        <ToastContainer />
      </Container>
    </>
  );
}
