import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { contactsSelectors, contactsOperations } from './redux/contacts';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import LoaderComponent from './components/Loader';
import Container from './components/Container';
import './App.css';

export default function App() {
  const error = useSelector(contactsSelectors.getError);
  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();
  const contactsLoading = useSelector(contactsSelectors.getLoading);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />

      {contactsLoading && <LoaderComponent />}

      <h2>Contacts</h2>
      {contacts.length > 1 && !error && <Filter />}

      {contacts.length > 0 && !error ? (
        <ContactList />
      ) : (
        <p>Currently your phonebook has no contacts. Please add them.</p>
      )}
    </Container>
  );
}
