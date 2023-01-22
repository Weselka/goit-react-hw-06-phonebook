
// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getFilter } from '../../redux/selectors';
import { setChangesFilter } from '../../redux/filterSlice';
import { FilterBox, Label, Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const changesFilter = e => {
    dispatch(setChangesFilter(e.currentTarget.value));
  };

  return (
    <FilterBox>
      <Label>
        Find contacts by name
        <Input
          type="text"
          name="filter"
          value={filter}
          onChange={changesFilter}
        />
      </Label>
    </FilterBox>
  );
};

Filter.propTypes = {
  // value: PropTypes.string.isRequired,
  // onChange: PropTypes.func.isRequired,
};
