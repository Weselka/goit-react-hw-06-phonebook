// import { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getFilter } from '../../redux/selectors';
import { Label, Form, Input, Button } from './ContactForm.styled';

export const ContactForm = () =>
  // { onSubmit }
  {
    const filter = useSelector(getFilter);
    console.log(filter);
    // const [name, setName] = useState('');
    // const [number, setNumber] = useState('');

    const handleChange = e => {
      const { name, value } = e.target;

      switch (name) {
        case 'name':
          // setName(value);
          filter.name = value;
          console.log(filter);
          break;
        case 'number':
          // setNumber(value);
          filter.number = value;
          console.log(filter);
          break;
        default:
          return Notify.warning(`${name} or ${value} entered incorrectly.`);
      }
    };

    const handleSubmit = e => {
      e.preventDefault();
      console.log(filter);
      // const dataForm = { name, number };
      const dataForm = e.currentTarget;

      // onSubmit(dataForm);
      dataForm.reset();
    };

    return (
      <Form onSubmit={handleSubmit}>
        <Label>
          Name
          <Input
            // value={filter.name.value}
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
            // value={filter.number.value}
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
