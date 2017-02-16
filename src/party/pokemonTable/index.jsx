import React, { Component } from 'react';
import Table from '../Table';

class PokemonTable extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div>
        <Table rowsData={this.props.pokemonNames} />
      </div>
    );
  }
}

export default PokemonTable;
