import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import { Contact } from 'components';
import { BoardContacts, ContactsItem } from './ContactList.styled';

export const ContactList = () => {
  const items = useSelector(getContacts);

  return (
    <BoardContacts>
      {items.map(item => {
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
