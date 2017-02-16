import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Filter from './filter';

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Row>
        <Col xs={4} lg={4} md={4}>
          <Filter keyName={'Name'} handleSubmit={this.props.addNameFilter} listEntries={this.props.pokemon.map(pokemon => pokemon.name)} />
        </Col>
        <Col xs={4} lg={4} md={4}>
          <Filter keyName={'Type'} handleSubmit={this.props.addTypeFilter} listEntries={this.props.types} />
        </Col>
        <Col xs={4} lg={4} md={4}>
          <Filter keyName={'Move'} handleSubmit={this.props.addMoveFilter} listEntries={this.props.moves} />
        </Col>
      </Row>

    );
  }
}

export default Filters;
