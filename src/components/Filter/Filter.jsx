import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/store';
import { InputLable, InputBox } from './Filter.styled';

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
