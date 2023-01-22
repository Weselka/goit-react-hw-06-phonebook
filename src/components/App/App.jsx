// import { useState } from 'react';
// import { nanoid } from 'nanoid';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// import { useLocalStorage } from '../../hooks/useLocalStorage';
import {
  Heading,
  Container,
  Section,
  ContactForm,
  ContactList,
  Filter,
} from 'components';

// const LS_KEY = 'contacts';

export const App = () => {
  // const [contacts, setContacts] = useLocalStorage(LS_KEY, initialContacts);
  // const [filter, setFilter] = useState('');

  // const addContact = data => {
  //   const presence = contacts.some(contact => contact.name === data.name);
  //   console.log(presence);
  //   if (presence) {
  //     Notify.warning(`${data.name} is already in contacts.`);
  //     return;
  //   }

  //   setContacts(contacts => [{ ...data, id: nanoid() }, ...contacts]);
  // };

  // const deleteContact = contactId => {
  //   setContacts(prevState =>
  //     prevState.filter(contact => contact.id !== contactId)
  //   );
  // };

  // const changesFilter = e => {
  //   setFilter(e.currentTarget.value);
  // };

  // const getVisibleContacts = () => {
  //   const normalized = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalized)
  //   );
  // };

  // const visibleContacts = getVisibleContacts();

  return (
    <Container>
      <Heading marginBottom="50px" textAlign="center">
        Phonebook
      </Heading>
      <Section>
        <ContactForm
          // onSubmit={addContact}
        />
      </Section>
      <Section title={'Contacts'}>
        <Filter
          // value={filter} onChange={changesFilter}
        ></Filter>
        {/* {contacts.length > 0 && ( */}
          <ContactList
            // items={visibleContacts}
            // onDelete={deleteContact}
          ></ContactList>
        {/* )} */}
      </Section>
    </Container>
  );
};
