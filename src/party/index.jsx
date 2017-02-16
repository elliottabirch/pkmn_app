import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import WeaknessTable from './weaknessesTable';
import PokemonTable from './pokemonTable';
import Party from './currentParty';


class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      party: [],
      pokemonNames: props.pokemon.map(pokemon => pokemon.name),
      currentPokemon: { name: 'Bulbasaur' },
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
      <Row>
        <Col xs={12} md={12} lg={12}>
          <Row>
            <Col>
              <WeaknessTable party={this.state.party} types={this.props.types} />
            </Col>
          </Row>
          <h1>Current Party</h1>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <Party party={this.state.party} />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6} lg={6}>
              <h3>{`${this.state.currentPokemon.name}'s Stats`}</h3>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <h3>Choose a Pokemon</h3>
              <PokemonTable pokemonNames={this.state.pokemonNames} />
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default componentName;
