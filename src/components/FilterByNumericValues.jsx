import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import Input from './Input';
import Select from './Select';

function FilterByNumericValues() {
  const { filters, setFilters } = useContext(PlanetsContext);
  const [columns, setColumns] = useState(
    ['population', 'orbital_period', 'diameter',
      'rotation_period', 'surface_water'],
  );
  const availableColumn = ({ column }, selectColumn) => column !== selectColumn;

  useEffect(() => {
    const removeUsedColumns = (columnList) => (
      columnList.filter(
        (column) => filters.filterByNumericValues.every(
          (filter) => availableColumn(filter, column),
        ),
      )
    );

    if (filters.filterByNumericValues.length) {
      setColumns((prevState) => removeUsedColumns(prevState));
    }
    // return () => {
    //   cleanup
    // }
  }, [filters.filterByNumericValues]);

  /* const availableColumn = ({ column }, selectColumn) => column !== selectColumn;

  const removeUsedColumns = (columns) => {
    // const { filterByNumericValues } = filters;
    if (filters.filterByNumericValues.length) {
      return columns.filter(
        (column) => filters.filterByNumericValues.every(
          (filter) => availableColumn(filter, column),
        ),
      );
    }
    return columns;
  };

  const availableColumnList = removeUsedColumns(columnList); */

  const [filterByNumericValues, setFilterByNumericValues] = useState({
    column: `${columns[0]}`,
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
        optionList={ columns }
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
