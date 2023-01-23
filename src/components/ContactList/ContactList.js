import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import { Contact } from 'components';
import { BoardContacts, ContactsItem } from './ContactList.styled';

const getVisibleContacts = (contacts, filter) => {
  console.log(contacts);
  const normalized = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalized)
  );
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <BoardContacts>
      {visibleContacts.map(item => {
        return (
          <ContactsItem key={item.id}>
            <Contact contact={item}></Contact>
          </ContactsItem>
        );
      })}
    </BoardContacts>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
};
