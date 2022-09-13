import { InputLable, InputBox } from './Filter.styled';
import { changeFilter } from 'redux/createslice';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <InputLable>
      Find contacts by name
      <InputBox
        type="text"
        name="filter"
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </InputLable>
  );
};
