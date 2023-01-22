// import { useState } from 'react';
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

  return (
    <Container>
      <Heading marginBottom="50px" textAlign="center">
        Phonebook
      </Heading>
      <Section>
        <ContactForm />
      </Section>
      <Section title={'Contacts'}>
        <Filter/>
        <ContactList/>
      </Section>
    </Container>
  );
};
