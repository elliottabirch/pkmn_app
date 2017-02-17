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
      defaultStrengthTo: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
      defaultWeaknessTo: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
      defaultImmuneTo: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
      strengthTo: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
      weaknessTo: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
      immuneTo: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    };

    this.removeFromParty = this.removeFromParty.bind(this);
    this.addToParty = this.addToParty.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.pokemon !== this.props.pokemon) {
      this.setState({
        pokemonNames: nextProps.pokemon.map(pokemon => pokemon.name),
      });
    }
  }

  setStatData(party) {
    const tempStrength = [...this.state.defaultStrengthTo];
    const tempWeakness = [...this.state.defaultWeaknessTo];
    const tempImmune = [...this.state.defaultImmuneTo];
    party.forEach((pokemon) => {
      pokemon.types.forEach((type) => {
        this.props.typeTableData[type].double_damage_to.forEach((strengthType) => { tempStrength[this.props.types.indexOf(strengthType)] = `${+tempStrength[this.props.types.indexOf(strengthType)] + 1}`; });
        this.props.typeTableData[type].double_damage_from.forEach((strengthType) => { tempWeakness[this.props.types.indexOf(strengthType)] = `${+tempWeakness[this.props.types.indexOf(strengthType)] + 1}`; });
        this.props.typeTableData[type].no_damage_to.forEach((strengthType) => { tempImmune[this.props.types.indexOf(strengthType)] = `${+tempImmune[this.props.types.indexOf(strengthType)] + 1}`; });
      });
    });
    this.setState({
      strengthTo: tempStrength,
      weaknessTo: tempWeakness,
      immuneTo: tempImmune,
    });
  }

  addToParty(pokemon) {
    const tempParty = [...this.state.party];
    if (tempParty.length < 6) {
      tempParty.push(pokemon[0]);
      this.setStatData(tempParty);
      this.setState({
        party: tempParty,
      });
    }
  }

  removeFromParty(pokemon) {
    let tempParty = [...this.state.party];
    tempParty = tempParty.filter(pkmn => pkmn.name !== pokemon);
    this.setStatData(tempParty);


    this.setState({
      party: tempParty,
    });
  }


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
