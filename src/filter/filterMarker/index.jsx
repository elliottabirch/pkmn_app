import React from 'react';
import { Row, Col } from 'react-bootstrap';
import FilterMarker from './filterMarker';

const FilterMarkers = ({ filters, removeFilter }) => {
  const moveFilterMarkers = filters.move.map((filter, index) => <FilterMarker key={filter + index} filter={filter} removeFilter={removeFilter} type={'Move'} />);
  const typeFilterMarkers = filters.type.map((filter, index) => <FilterMarker key={filter + index} filter={filter} removeFilter={removeFilter} type={'Type'} />);
  const nameFilterMarkers = filters.name.map((filter, index) => <FilterMarker key={filter + index} filter={filter} removeFilter={removeFilter} type={'Name'} />);

  return (
    <Row>
      {moveFilterMarkers}
      {typeFilterMarkers}
      {nameFilterMarkers}
    </Row>
  );
};

export default FilterMarkers;
