import React from 'react';
import FilterByName from './FilterByName';

/*
  Material consultado sobre html semântico para filtro
  https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Search_role
*/
function Filters() {
  return (
    <section role="search">
      <FilterByName />
    </section>
  );
}

export default Filters;
