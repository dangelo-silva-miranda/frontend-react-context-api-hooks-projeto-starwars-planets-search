import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import PlanetsContext from '../context/PlanetsContext';
import Row from './Row';

/*
  Material consultado sobre renderização condicional:
  https://flexiple.com/blog/conditional-rendering-in-react/
 */
function Table(/* props */) {
  const { data } = useContext(PlanetsContext);

  return (
    <main>
      {data.length && (
        <table>
          <caption>
            Table with filters of planets from the Star Wars universe
          </caption>
          <thead>
            <Row
              CellTag="th"
              dataList={ Object.keys(data[0]) }
            />
          </thead>
          <tbody>
            {data.map(
              (planet, index) => (
                <Row
                  key={ index }
                  CellTag="td"
                  dataList={ Object.values(planet) }
                />
              ),
            )}
          </tbody>
        </table>
      )}
    </main>
  );
}
export default Table;

/* Table.propTypes = {

} */

/*
  (groupContentTag, cellTag, data)
  groupContentTag: thead, tbody, tfoot
  cellTag: header-th ou data-td
  rowTag: tr
*/

// console.log(Object.keys(data[0] || {}));
