import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from '../context/PlanetsContext';
import { getPlanetsStarWars } from '../services/starWarsAPI';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [dataBkp, setDataBkp] = useState([]);

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

  const context = { data, setData, dataBkp, setDataBkp };

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
