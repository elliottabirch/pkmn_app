
import React, { PropTypes } from 'react';
import { Row } from 'react-bootstrap';
import Pokemon from './pokemon';

function Party(props) {
  return (
    <Row className="party">
      <Pokemon pokemon={props.party} handleRemove={props.handleRemove} />
    </Row>
  );
}

Party.propTypes = {
  party: PropTypes.arrayOf(PropTypes.object),
  handleRemove: PropTypes.func,
};

export default Party;
