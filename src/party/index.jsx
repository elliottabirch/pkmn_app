import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import WeaknessTable from './weaknessesTable';
import PokemonTable from './pokemonTable';
import Party from './currentParty';
import SelectedPokemon from './selectedPokemon';


class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      party: [],
      pokemonNames: props.pokemon.map(pokemon => pokemon.name),
    };

    this.removeFromParty = this.removeFromParty.bind(this);
    this.addToParty = this.addToParty.bind(this);
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
    let temp = [...this.state.party];
    temp.push(pokemon);
    this.setState({
      party: temp,
    });
  }
  removeFromParty(pokemon) {
    let temp = [...this.state.party];
    temp = temp.filter((pkmn)=> pkmn.name !== pokemon);
    this.setState({
      party: temp,
    });
  }

  removeFromParty

  render() {
    return (
      <Row>
        <center><h1 className="text-centered">Party Stats</h1></center>
        <Row>
          <Col xs={12} md={12} lg={12}>
            <WeaknessTable party={this.state.party} types={this.props.types} />
          </Col>
        </Row>
        <center><h1>Current Party</h1></center>
        <Row>
          <Col xs={12} md={12} lg={12}>
            <Party party={this.state.party} handleRemove={this.removeFromParty}/>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <center><h3>{`${this.props.selectedPokemon ? this.props.selectedPokemon[0].name : 'No-one'}'s Stats`}</h3></center>
            <SelectedPokemon selectedPokemon={this.props.selectedPokemon} addToParty={this.addToParty}/>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <center><h3>Choose a Pokemon</h3></center>
            <PokemonTable pokemonNames={this.state.pokemonNames} clickHandler={this.props.clickHandler} />
          </Col>
        </Row>
      </Row>
    );
  }
}

export default componentName;
