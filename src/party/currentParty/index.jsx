
import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import Pokemon from './pokemon';

function Party(props) {
  return (
    <Row className="party">
      <Pokemon style={{ 'min-height': '30vh' }}pokemon={props.party} handleRemove={props.handleRemove} />
    </Row>
  );
}

export default Party;
