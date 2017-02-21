
import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import Pokemon from './pokemon';

function Party(props) {
  return (
    <Row className="party">
      <Pokemon pokemon={props.party} handleRemove={props.handleRemove} />
    </Row>
  );
}

export default Party;
