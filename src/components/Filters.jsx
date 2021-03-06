import React from 'react';
import FilterByName from './FilterByName';
import FilterByNumericValues from './FilterByNumericValues';

/*
  Material consultado sobre html semântico para filtro
  https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Search_role
*/
function Filters() {
  return (
    <section role="search">
      <FilterByName />
      <FilterByNumericValues />
    </section>
  );
}

export default Filters;
