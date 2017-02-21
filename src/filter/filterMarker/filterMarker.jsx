import React from 'react';
import { Col, Glyphicon, Row } from 'react-bootstrap';

const FilterMarker = ({ filter, type, removeFilter }) => (
  <Col xs={3} lg={2} md={1} className={`${type.toLowerCase()}Filter`}>
    <Row>
      <Col xs={8} lg={8} md={8}>
        <span>{`${type}: ${filter}`}</span>
      </Col>
      <span onClick={() => { removeFilter(filter, `${type.toLowerCase()}Filter`); }}><Glyphicon glyph="minus" style={{ float: 'right', marginRight: '10px' }} /></span>
    </Row>
  </Col>
  );

export default FilterMarker;
