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
      filteredTypes: [],
    };

    this.addFilter = this.addFilter.bind(this);
    this.removeFilter = this.removeFilter.bind(this);
    this.filterPokemon = this.filterPokemon.bind(this);
  }

  componentDidMount() {
    axios.all([axios.get('http://localhost:3001/api/types'), axios.get('http://localhost:3001/api/pokemon')])
    .then((response) => {
      const state = {
        typeTableData: response[0].data.reduce((accum, {

          name,
          double_damage_to,
          double_damage_from,
          no_damage_to }) => {
          const acc = Object.assign(accum);
          acc[name] = {
            double_damage_from,
            double_damage_to,
            no_damage_to,
          };
          return acc;
        }, {}),
        pokemon: response[1].data,
        filteredPokemon: response[1].data.sort((a, b) => a.order - b.order),
        types: this.createArray(response[1].data, 'types'),
        filteredTypes: this.createArray(response[1].data, 'types'),
        moves: this.createArray(response[1].data, 'moves'),
      };
      this.setState(state);
    });
  }

  createArray(pokemonArray, data) {
    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const storage = pokemonArray.reduce((accum, pokemon) => {
      const acc = Object.assign(accum);
      const array = pokemon[data];
      array.forEach((type) => {
        acc[capitalizeFirstLetter(type)] = 1;
      });
      return acc;
    }, {});

    return Object.keys(storage);
  }

  filterPokemon({ nameFilter, moveFilter, typeFilter }) {
    let temp = [...this.state.pokemon];
    temp = temp.filter((pokemon) => {
      let passesFilter = true;
      nameFilter.forEach((namefilter) => {
        if (pokemon.name !== namefilter) {
          passesFilter = false;
        }
      });
      if (passesFilter) {
        typeFilter.forEach((typefilter) => {
          passesFilter = passesFilter && pokemon.types.includes(typefilter.toLowerCase());
        });
      }
      if (passesFilter) {
        moveFilter.forEach((movefilter) => {
          passesFilter = passesFilter && pokemon.moves.includes(movefilter.toLowerCase());
        });
      }
      return passesFilter;
    });

    return temp;
  }

  removeFilter(filter, type) {
    const filters = {
      nameFilter: [...this.state.nameFilter],
      typeFilter: [...this.state.typeFilter],
      moveFilter: [...this.state.moveFilter],
    };

    filters[type] = filters[type].filter(val => val !== filter);
    filters.filteredPokemon = this.filterPokemon(filters);
    filters.filteredTypes = this.createArray(filters.filteredPokemon, 'types');
    filters.moves = this.createArray(filters.filteredPokemon, 'moves');
    this.setState(filters);
  }

  addFilter(filter, type) {
    const filters = {
      nameFilter: [...this.state.nameFilter],
      typeFilter: [...this.state.typeFilter],
      moveFilter: [...this.state.moveFilter],
    };

    filters[type].push(filter);
    filters.filteredPokemon = this.filterPokemon(filters);
    filters.filteredTypes = this.createArray(filters.filteredPokemon, 'types');
    filters.moves = this.createArray(filters.filteredPokemon, 'moves');
    this.setState(filters);
  }

  render() {
    return (
      <div style={{ backgroundColor: '#4e5ad2' }}>
        <Grid style={{ backgroundColor: '#f0f0c8' }}>
          <Row>
            <Col xs={12} lg={12} >
              <Image style={{ marginBottom: '100px', marginTop: '20px' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" responsive />
            </Col>
          </Row>
          <Party
            pokemon={this.state.filteredPokemon}
            types={this.state.types}
            typeTableData={this.state.typeTableData}
          />

          <Filters
            addFilter={this.addFilter}
            pokemon={this.state.filteredPokemon}
            types={this.state.filteredTypes}
            moves={this.state.moves}
            nameFilter={this.state.nameFilter}
            typeFilter={this.state.typeFilter}
            moveFilter={this.state.moveFilter}
            removeFilter={this.removeFilter}
          />
        </Grid>

      </div>
    );
  }
}

export default App;
