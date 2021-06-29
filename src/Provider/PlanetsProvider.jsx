import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from '../context/PlanetsContext';
import { getPlanetsStarWars } from '../services/starWarsAPI';

// filters: {
//   filterByName: {
//     name: ''
//   },
//   filterByNumericValues: [
//     {
//       column: 'population',
//       comparison: 'maior que',
//       value: '100000',
//     },
//     {
//       column: 'diameter',
//       comparison: 'menor que',
//       value: '8000',
//     }
//   ]
// }

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [dataBkp, setDataBkp] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  useEffect(() => {
    const getPlanets = async () => {
      const planets = await getPlanetsStarWars();
      const dataListWithoutResidents = planets.map(
        (planet) => {
          const dataWithoutResidents = { ...planet };
          delete dataWithoutResidents.residents;
          return dataWithoutResidents;
        },
      );

      setData(dataListWithoutResidents);
      setDataBkp(dataListWithoutResidents);
    };

    getPlanets();
    // console.log(`Planets Provider: ${data[0].name}`);
  }, []);

  /*
    Material consultado sobre Number.parseInt
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt
  */
  useEffect(() => {
    const filterByNameFunc = (name) => dataBkp.filter(
      (planet) => planet.name.includes(`${name}`),
    );

    const filterByNumericValueFunc = ({ column, comparison, value }, planet) => {
      const planetValue = Number.parseInt(planet[column], 10);
      const filterValue = Number.parseInt(value, 10);

      switch (comparison) {
      case 'maior que':
        return planetValue > filterValue;

      case 'menor que':
        return planetValue < filterValue;

      default:
        return planetValue === filterValue;
      }
    };

    const { filterByName: { name }, filterByNumericValues } = filters;
    let dataTemp = dataBkp;

    if (name) {
      dataTemp = filterByNameFunc(name);
    }

    if (filterByNumericValues && filterByNumericValues.length) {
      dataTemp = dataTemp.filter((planet) => (
        filterByNumericValues.every((filter) => filterByNumericValueFunc(filter, planet))
      ));
    }

    setData(dataTemp);
  }, [dataBkp, filters]);

  const context = { data, setData, dataBkp, setDataBkp, filters, setFilters };

  return (
    <PlanetsContext.Provider value={ context }>
      {/* {console.log(data)} */}
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
}.isRequired;

export default PlanetsProvider;
