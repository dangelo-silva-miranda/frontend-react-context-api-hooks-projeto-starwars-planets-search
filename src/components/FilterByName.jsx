import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import Input from './Input';

function FilterByName() {
  const { filters, setFilters } = useContext(PlanetsContext);

  const handleChange = ({ target: { name, value } }) => {
    setFilters({
      ...filters,
      filterByName: {
        [name]: value,
      },
    });
  };

  return (
    <div>
      <Input type="text" name="name" label="Planet Name" onChange={ handleChange } />
    </div>
  );
}

export default FilterByName;
