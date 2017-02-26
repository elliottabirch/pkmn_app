import React, { PropTypes } from 'react';
import { Row, Col } from 'react-bootstrap';
import Filter from './filter';
import FilterMarkers from './filterMarker';

function Filters(props) {
  const filters = {
    type: props.typeFilter,
    move: props.moveFilter,
    name: props.nameFilter };

  return (
    <Row style={{ padding: '5px', backgroundColor: 'white', margin: '15px 3px', borderRadius: '5px', boxShadow: '0px 0px 19px 1px rgba(0,0,0,0.75)' }}>
      <Col xs={12} lg={12} md={12}>
        <FilterMarkers removeFilter={props.removeFilter} filters={filters} />
      </Col>
      <Col xs={4} lg={4} md={4}>
        <center><h3>Filter by Name</h3></center>
        <Filter keyName={'Name'} addFilter={props.addFilter} listEntries={props.pokemon.map(pokemon => pokemon.name)} />
      </Col>
      <Col xs={4} lg={4} md={4}>
        <center><h3>Filter by Type</h3></center>
        <Filter keyName={'Type'} addFilter={props.addFilter} listEntries={props.types} />
      </Col>
      <Col xs={4} lg={4} md={4}>
        <center><h3>Filter by Move</h3></center>
        <Filter keyName={'Move'} addFilter={props.addFilter} listEntries={props.moves} />
      </Col>
    </Row>

  );
}

Filters.propTypes = {
  typeFilter: PropTypes.arrayOf(PropTypes.string),
  pokemon: PropTypes.arrayOf(PropTypes.object),
  moveFilter: PropTypes.arrayOf(PropTypes.string),
  nameFilter: PropTypes.arrayOf(PropTypes.string),
  types: PropTypes.arrayOf(PropTypes.string),
  moves: PropTypes.arrayOf(PropTypes.string),
  removeFilter: PropTypes.func,
  addFilter: PropTypes.func,
};
export default Filters;
