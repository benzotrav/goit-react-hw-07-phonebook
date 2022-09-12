import { ContactListItem } from '../ContactsListItem/ContactsListItem';
import { Title, Box, ContactsBox } from './ContactList.styled';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const visibleContacts = contacts.filter(({ name }) => name.includes(filter));

  return (
    <Box>
      <Title>Contacts</Title>
      <ContactsBox>
        {visibleContacts.map(contact => (
          <ContactListItem contact={contact} key={contact.id} />
        ))}
      </ContactsBox>
    </Box>
  );
};
