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
      defaultStrengthTo: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
      defaultWeaknessTo: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
      defaultImmuneTo: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
      strengthTo: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
      weaknessTo: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
      immuneTo: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
      selectedPokemon: '',
    };

    this.removeFromParty = this.removeFromParty.bind(this);
    this.addToParty = this.addToParty.bind(this);
    this.selectPokemon = this.selectPokemon.bind(this);
  }

  setStatData(party) {
    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const tempStrength = [...this.state.defaultStrengthTo];
    const tempWeakness = [...this.state.defaultWeaknessTo];
    const tempImmune = [...this.state.defaultImmuneTo];
    party.forEach((pokemon) => {
      pokemon.types.forEach((type) => {
        this.props.typeTableData[capitalizeFirstLetter(type)].double_damage_to.forEach((strengthType) => { tempStrength[this.props.types.indexOf(capitalizeFirstLetter(strengthType))] = `${+tempStrength[this.props.types.indexOf(capitalizeFirstLetter(strengthType))] + 1}`; });
        this.props.typeTableData[capitalizeFirstLetter(type)].double_damage_from.forEach((strengthType) => { tempWeakness[this.props.types.indexOf(capitalizeFirstLetter(strengthType))] = `${+tempWeakness[this.props.types.indexOf(capitalizeFirstLetter(strengthType))] + 1}`; });
        this.props.typeTableData[capitalizeFirstLetter(type)].no_damage_to.forEach((strengthType) => { tempImmune[this.props.types.indexOf(capitalizeFirstLetter(strengthType))] = `${+tempImmune[this.props.types.indexOf(capitalizeFirstLetter(strengthType))] + 1}`; });
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
      tempParty.push(pokemon);
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
  selectPokemon(e) {
    this.setState({
      selectedPokemon: this.props.pokemon.filter(pokemon => pokemon.name === e.name),
    });
  }


  render() {
    return (
      <div>
        <Row style={{ backgroundColor: 'white', margin: '15px 3px', borderRadius: '5px', boxShadow: '0px 0px 19px 1px rgba(0,0,0,0.75)' }}>
          <Col xs={12} md={12} lg={12}>
            <center><h1 className="text-centered">Party Stats</h1></center>
            <WeaknessTable
              party={this.state.party}
              types={this.props.types}
              weaknessTo={this.state.weaknessTo}
              immuneTo={this.state.immuneTo}
              strengthTo={this.state.strengthTo}
            />
          </Col>
          <Col xs={12} md={12} lg={12}>
            <center><h1>Current Party</h1></center>
            <Party party={this.state.party} handleRemove={this.removeFromParty} />
          </Col>
        </Row>
        <Row style={{ backgroundColor: 'white', borderRadius: '5px', margin: '15px 3px', boxShadow: '0px 0px 19px 1px rgba(0,0,0,0.75)' }}>

          <Col xs={12} md={6} lg={6} style={{ minHeight: '30vh' }}>
            <div style={{ height: '55px' }} />
            <SelectedPokemon selectedPokemon={this.state.selectedPokemon} addToParty={this.addToParty} />
          </Col>
          <Col xs={12} md={6} lg={6}>
            <center><h3>Choose a Pokemon</h3></center>
            <PokemonTable pokemon={this.props.pokemon} selectPokemon={this.selectPokemon} addToParty={this.addToParty} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default componentName;
