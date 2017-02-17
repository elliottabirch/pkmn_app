import React, { Component } from 'react';
import Table from '../Table';

class PokemonTable extends Component {
  constructor(props) {
    const temp = [];

    props.pokemonNames.forEach((name, index) => {
      if (index % 3 === 0) {
        temp[Math.floor(index / 3)] = [name];
      } else temp[Math.floor(index / 3)].push(name);
    });
    super(props);
    this.state = {
      pokemonNames: temp,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.pokemonNames !== nextProps.pokemonNames) {
      const temp = [];

      nextProps.pokemonNames.forEach((name, index) => {
        if (index % 3 === 0) {
          temp[Math.floor(index / 3)] = [name];
        } else temp[Math.floor(index / 3)].push(name);
      });

      this.setState({
        pokemonNames: temp,
      });
    }
  }


  render() {
    return (
      <div className="pokemonTable">
        <Table rowsData={this.state.pokemonNames} selectPokemon={this.props.selectPokemon} addToParty={this.props.addToParty} type={'pokemon'} />
      </div>
    );
  }
}

export default PokemonTable;
