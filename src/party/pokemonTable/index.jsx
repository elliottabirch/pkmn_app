import React, { Component } from 'react';
import Table from '../Table';

class PokemonTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: this.generatePokemonRowArray(this.props.pokemon),
    };
  }


  componentWillReceiveProps(nextProps) {
    if (this.props.pokemon !== nextProps.pokemon) {
      this.setState({
        pokemon: this.generatePokemonRowArray(nextProps.pokemon),
      });
    }
  }
  generatePokemonRowArray(array) {
    const temp = [];

    array.forEach((pokemon, index) => {
      if (index % 3 === 0) {
        temp[Math.floor(index / 3)] = [pokemon];
      } else temp[Math.floor(index / 3)].push(pokemon);
    });

    return temp;
  }

  render() {
    return (
      <div className="pokemonTable">
        <Table rowsData={this.state.pokemon} selectPokemon={this.props.selectPokemon} addToParty={this.props.addToParty} type={'pokemon'} />
      </div>
    );
  }
}

export default PokemonTable;
