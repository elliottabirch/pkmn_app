import React, { Component } from 'react';
import Filter from './filter';

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Filter keyName={'Name'} handleSubmit={this.props.addNameFilter} listEntries={this.props.pokemon.map(pokemon => pokemon.name)} />
        <Filter keyName={'Type'} handleSubmit={this.props.addTypeFilter} listEntries={this.props.types} />
        <Filter keyName={'Move'} handleSubmit={this.props.addMoveFilter} listEntries={this.props.moves} />
      </div>
    );
  }
}

export default Filters;
