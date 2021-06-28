import React from 'react';
import PropTypes from 'prop-types';

function Row({ CellTag, dataList }) {
  return (
    <tr>
      {dataList.map(
        (data, index) => (<CellTag key={ index }>{data}</CellTag>),
      )}
    </tr>
  );
}

/*
  Material consultado sobre oneOfType
  https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html#proptypes
*/
Row.propTypes = {
  CellTag: PropTypes.string.isRequired,
  dataList: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]).isRequired,
  ).isRequired,
};

export default Row;
