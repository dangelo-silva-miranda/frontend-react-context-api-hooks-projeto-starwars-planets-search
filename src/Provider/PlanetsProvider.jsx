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

  useEffect(() => {
    const filterByNameFunc = (name) => dataBkp.filter(
      (planet) => planet.name.includes(`${name}`),
    );

    const { filterByName } = filters;

    if (filterByName) {
      setData(filterByNameFunc(filterByName.name));
    }
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
};

export default PlanetsProvider;
