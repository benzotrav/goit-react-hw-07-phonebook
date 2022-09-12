import PropTypes from 'prop-types';
import { useDeleteContactMutation } from '../../redux/contactsApi';
import { LoadingButton } from '@mui/lab';
import { Item, TextWrap, Text } from './ContactListItem.styled';

export const ContactListItem = ({ contact }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <Item>
      <TextWrap>
        <Text>
          name: <b>{contact.name}</b>
        </Text>
      </TextWrap>
      <TextWrap>
        <Text>
          number: <b>{contact.phone}</b>
        </Text>
      </TextWrap>
      <LoadingButton
        type="button"
        onClick={() => deleteContact(contact.id)}
        color={'error'}
        loading={isLoading}
        loadingPosition="end"
        variant="outlined"
        disabled={isLoading}
      >
        Delete
      </LoadingButton>
    </Item>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.objectOf(PropTypes.string),
};
