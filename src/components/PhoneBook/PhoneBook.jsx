import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PhoneBookForm } from '../PhoneBookForm/PhoneBookForm';
import { ContactList } from '../ContactsList/ContactsList';
import { Filter } from '../Filter/Filter';
import { Box, Title } from './PhoneBook.styled';

export const PhoneBook = () => {
  return (
    <Box>
      <Title>Phonebook</Title>
      <PhoneBookForm />
      <Filter />
      <ContactList />
      <ToastContainer />
    </Box>
  );
};
