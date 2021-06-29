import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import Input from './Input';
import Select from './Select';

function FilterByNumericValues() {
  const { filters, setFilters } = useContext(PlanetsContext);
  const [filterByNumericValues, setFilterByNumericValues] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });

  const handleChange = ({ target: { name, value } }) => (
    setFilterByNumericValues({
      ...filterByNumericValues,
      [name]: value,
    })
  );

  const handleClick = () => (
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        filterByNumericValues,
      ],
    })
  );

  return (
    <div>
      <Select
        name="column"
        label="Column"
        optionList={
          ['population', 'orbital_period', 'diameter',
            'rotation_period', 'surface_water']
        }
        onChange={ handleChange }
      />
      <Select
        name="comparison"
        label="Comparison"
        optionList={ ['maior que', 'menor que', 'igual a'] }
        onChange={ handleChange }
      />
      <Input type="number" name="value" label="Value" onChange={ handleChange } />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </div>
  );
}

export default FilterByNumericValues;
