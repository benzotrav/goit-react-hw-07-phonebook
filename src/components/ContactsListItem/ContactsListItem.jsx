import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Item, RemoveBtn } from './ContactListItem.styled';
import { deleteContact } from '../../redux/store';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <p>name: {contact.name}</p>
      <p>number: {contact.number}</p>
      <RemoveBtn
        type="button"
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </RemoveBtn>
    </Item>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.objectOf(PropTypes.string),
};
