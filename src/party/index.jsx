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
      strengthTo: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
      weaknessTo: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
      immuneTo: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
      // weaknessTableOrder: {
      //   normal: 0,
      //   poison: 1,
      //   steel: 2,
      //   ice: 3,
      //   grass: 4,
      //   bug: 5,
      //   fire: 6,
      //   ground: 7,
      //   psychic: 8,
      //   rock: 9,
      //   unknown: 10,
      //   dark: 11,
      //   shadow: 12,
      //   water: 13,
      //   dragon: 14,
      //   ghost: 15,
      //   electric: 16,
      //   fairy: 17,
      //   flying: 18,
      //   fighting: 19,
      // },
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
    const tempParty = [...this.state.party];
    const tempStrength = [...this.state.strengthTo];
    const tempWeakness = [...this.state.weaknessTo];
    const tempImmune = [...this.state.immuneTo];
    if (tempParty.length < 6) {
      tempParty.push(pokemon[0]);
      tempParty.forEach((pokemon) => {
        pokemon.types.forEach((type) => {
          this.props.typeTableData[type].double_damage_to.forEach((strengthType) => { tempStrength[this.props.types.indexOf(strengthType)] = `${+tempStrength[this.props.types.indexOf(strengthType)] + 1}`; });
          this.props.typeTableData[type].double_damage_from.forEach((strengthType) => { tempWeakness[this.props.types.indexOf(strengthType)] = `${+tempStrength[this.props.types.indexOf(strengthType)] + 1}`; });
          this.props.typeTableData[type].no_damage_to.forEach((strengthType) => { tempImmune[this.props.types.indexOf(strengthType)] = `${+tempStrength[this.props.types.indexOf(strengthType)] + 1}`; });
        });
      }, {});
      this.setState({
        party: tempParty,
        strengthTo: tempStrength,
        weaknessTo: tempWeakness,
        immuneTo: tempImmune,
      });
    }
  }
  removeFromParty(pokemon) {
    let tempParty = [...this.state.party];
    tempParty = tempParty.filter(pkmn => pkmn.name !== pokemon);
    this.setState({
      party: tempParty,
    });
  }

  removeFromParty

  render() {
    return (
      <Row>
        <center><h1 className="text-centered">Party Stats</h1></center>
        <Row>
          <Col xs={12} md={12} lg={12}>
            <WeaknessTable
              party={this.state.party}
              types={this.props.types}
              weaknessTo={this.state.weaknessTo}
              immuneTo={this.state.immuneTo}
              strengthTo={this.state.strengthTo}
            />
          </Col>
        </Row>
        <center><h1>Current Party</h1></center>
        <Row>
          <Col xs={12} md={12} lg={12}>
            <Party party={this.state.party} handleRemove={this.removeFromParty} />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <center><h3>{`${this.props.selectedPokemon ? this.props.selectedPokemon[0].name : 'No-one'}'s Stats`}</h3></center>
            <SelectedPokemon selectedPokemon={this.props.selectedPokemon} addToParty={this.addToParty} />
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
