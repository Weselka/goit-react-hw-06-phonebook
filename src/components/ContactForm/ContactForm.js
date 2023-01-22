// import { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/actions';

import { Label, Form, Input, Button } from './ContactForm.styled';

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

    const handleChange = e => {
      const { name, value } = e.target;

      switch (name) {
        case 'name':
          contacts.name = value;
          console.log(contacts);
          break;
        case 'number':
          contacts.number = value;
          console.log(contacts);
          break;
        default:
          return Notify.warning(`${name} or ${value} entered incorrectly.`);
      }
    };

    const handleSubmit = e => {
      e.preventDefault();
      const dataForm = e.target;
      dispatch(addContact(dataForm.elements));
      dataForm.reset();
    };

    return (
      <Form onSubmit={handleSubmit}>
        <Label>
          Name
          <Input
            // value={contacts.name.value}
            onChange={handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Number
          <Input
            // value={contacts.number.value}
            onChange={handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  };

ContactForm.propTypes = {
  dataForm: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  }),
};
