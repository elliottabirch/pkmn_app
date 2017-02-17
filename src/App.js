import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React, { Component } from 'react';
import axios from 'axios';
import { Image, Col, Row, Grid } from 'react-bootstrap';
import Party from './party';
import Filters from './filter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moves: [],
      types: [],
      pokemon: [],
      typeData: [],
      nameFilter: [],
      typeFilter: [],
      moveFilter: [],
      filteredPokemon: [],
    };

    this.addNameFilter = this.addNameFilter.bind(this);
    this.addMoveFilter = this.addMoveFilter.bind(this);
    this.addTypeFilter = this.addTypeFilter.bind(this);
    this.filterPokemon = this.filterPokemon.bind(this);
  }

  componentDidMount() {
    axios.all([axios.get('http://localhost:3001/api/types'), axios.get('http://localhost:3001/api/pokemon')])
    .then((response) => {
      const state = {
        typeTableData: response[0].data.reduce((accum, { name, double_damage_to, double_damage_from, no_damage_to }) => {
          accum[name] = { double_damage_from, double_damage_to, no_damage_to };
          return accum;
        }, {}),
        pokemon: response[1].data,
        filteredPokemon: response[1].data.sort((a, b) => a.order - b.order),
        types: this.createArray(response[1].data, 'types'),
        moves: this.createArray(response[1].data, 'moves'),
      };
      this.setState(state);
    });
  }

  createArray(pokemonArray, data) {
    const storage = pokemonArray.reduce((accum, pokemon) => {
      const array = (data === 'moves' ? pokemon.moves : pokemon.types);
      array.forEach((type) => {
        accum[type] = 1;
      });
      return accum;
    }, {});

    return Object.keys(storage);
  }

  filterPokemon(nameFilterArray, moveFilterArray, typeFilterArray) {
    let temp = [...this.state.pokemon];
    temp = temp.filter((pokemon) => {
      let passesFilter = true;
      nameFilterArray.forEach((namefilter) => {
        if (pokemon.name !== namefilter) {
          passesFilter = false;
        }
      });
      if (passesFilter) {
        typeFilterArray.forEach((typefilter) => {
          passesFilter = pokemon.types.includes(typefilter.toLowerCase());
        });
      }
      if (passesFilter) {
        moveFilterArray.forEach((movefilter) => {
          passesFilter = pokemon.moves.includes(movefilter);
        });
      }
      return passesFilter;
    });

    return temp;
  }

  removeFilter(filter, array) {
    let temp = [...array];
    temp = temp.filter(val => val !== filter);
    return temp;
  }

  addFilter(filter, array) {
    const temp = [...array];
    temp.push(filter);
    return temp;
  }
  addNameFilter(filter) {
    const nameFilter = this.addFilter(filter, this.state.nameFilter);
    const filteredPokemon = this.filterPokemon(nameFilter, this.state.moveFilter, this.state.typeFilter);
    const state = {
      filteredPokemon,
      nameFilter,
    };
    this.setState(state);
  }

  removeNameFilter(filter) {
    this.setState({
      nameFilter: this.removeFilter(filter, this.state.nameFilter),
    }, () =>
    this.filterPokemon(this.state.nameFilter, this.state.moveFilter, this.state.typeFilter),
    );
  }

  addTypeFilter(filter) {
    this.setState({
      typeFilter: this.addFilter(filter, this.state.typeFilter),
    }, () =>
    this.filterPokemon(this.state.nameFilter, this.state.moveFilter, this.state.typeFilter),
    );
  }

  removeTypeFilter(filter) {
    this.setState({
      typeFilter: this.removeFilter(filter, this.state.typeFilter),
    }, () =>
    this.filterPokemon(this.state.nameFilter, this.state.moveFilter, this.state.typeFilter),
    );
  }

  addMoveFilter(filter) {
    this.setState({
      moveFilter: this.addFilter(filter, this.state.moveFilter),
    }, () =>
    this.filterPokemon(this.state.nameFilter, this.state.moveFilter, this.state.typeFilter),
    );
  }

  removeMoveFilter(filter) {
    this.setState({
      moveFilter: this.removeFilter(filter, this.state.moveFilter),
    }, () =>
    this.filterPokemon(this.state.nameFilter, this.state.moveFilter, this.state.typeFilter),
    );
  }


  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} lg={12} >
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" responsive />
          </Col>
        </Row>
        <Party
          headings={['earth', 'wind']}
          pokemon={this.state.filteredPokemon}
          types={this.state.types}
          typeTableData={this.state.typeTableData}
        />
        <Filters
          addTypeFilter={this.addTypeFilter}
          addMoveFilter={this.addMoveFilter}
          addNameFilter={this.addNameFilter}
          pokemon={this.state.filteredPokemon}
          types={this.state.types}
          moves={this.state.moves}
        />
      </Grid>
    );
  }
}

export default App;
