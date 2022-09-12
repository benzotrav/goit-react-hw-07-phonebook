import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { nanoid } from 'nanoid';
import { Formik } from 'formik';
import { addContact } from '../../redux/store';
import {
  FormBox,
  InputName,
  InputBox,
  SubmitBtn,
} from './PhoneBookForm.styled';

export const PhoneBookForm = () => {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const submitForm = (e, { resetForm }) => {
    const { name, number } = e;

    const isInclude = contacts.find(
      person => person.name.toLowerCase() === name.toLowerCase()
    );

    if (isInclude) {
      toast(` ${name} is already in contacts.`);
      return;
    }

    const profile = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(addContact(profile));

    resetForm();
  };

  return (
    <Formik initialValues={{ name: '', number: '' }} onSubmit={submitForm}>
      <FormBox>
        <InputName>
          Name
          <InputBox
            type="text"
            name="name"
            required
            placeholder="contact name"
          />
        </InputName>
        <InputName>
          Number
          <InputBox
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="+380992286699"
            required
          />
        </InputName>
        <SubmitBtn type="submit">Add constact</SubmitBtn>
      </FormBox>
    </Formik>
  );
};
