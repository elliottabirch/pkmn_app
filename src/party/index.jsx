import React, { Component } from 'react';
import WeaknessTable from './weaknessesTable';
import PokemonTable from './pokemonTable';
import Party from './currentParty';


class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      party: [],
      pokemonNames: props.pokemon.map(pokemon => pokemon.name),
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.pokemon !== this.props.pokemon) {
      console.log(this.props.pokemon, nextProps.pokemon);
      this.setState({
        pokemonNames: nextProps.pokemon.map(pokemon => pokemon.name),
      });
    }
  }

  addToParty(pokemon) {
    const temp = [...this.state.party];
    temp.push(pokemon);
    this.setState({
      party: temp,
    });
  }
  render() {
    return (
      <div>
        <WeaknessTable party={this.state.party} types={this.props.types} />
        <Party party={this.state.party} />
        <PokemonTable pokemonNames={this.state.pokemonNames} />
      </div>
    );
  }
}

export default componentName;
