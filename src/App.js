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
      moves: ['razor leaf', 'acid', 'spore'],
      types: ['grass', 'rock', 'ground'],
      selectedPokemon: '',
      pokemon: [],
      typeData: [],
    };

    this.addNameFilter = this.addNameFilter.bind(this);
    this.addMoveFilter = this.addMoveFilter.bind(this);
    this.addTypeFilter = this.addTypeFilter.bind(this);
    this.selectPokemon = this.selectPokemon.bind(this);
  }
  componentDidMount() {
    axios.get('http://localhost:3001/api/types')
      .then((response) => {
        console.log(response);
        this.setState({
          types: response.data.map(type => type.name),
          moves: response.data.reduce((accum, type) => accum.concat(type.moves), []),
          typeData: response.data,
        });
      })
      .catch(e => console.log(e));
    axios.get('http://localhost:3001/api/pokemon')
      .then((response) => {
        this.setState({
          pokemon: response.data.sort((a, b) => a.order - b.order),
        });
      });
  }

  componenentWillMount() {

  }

  addNameFilter(filter) {
    console.log(filter);
  }

  addTypeFilter(filter) {
    console.log(filter);
  }

  addMoveFilter(filter) {
    console.log(filter);
  }

  selectPokemon(e) {
    this.setState({
      selectedPokemon: this.state.pokemon.filter(pokemon => pokemon.name === e),
    });
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
          pokemon={this.state.pokemon}
          types={this.state.types}
          selectedPokemon={this.state.selectedPokemon}
          clickHandler={this.selectPokemon}
        />
        <Filters
          addTypeFilter={this.addTypeFilter}
          addMoveFilter={this.addMoveFilter}
          addNameFilter={this.addNameFilter}
          pokemon={this.state.pokemon}
          types={this.state.types}
          moves={this.state.moves}
        />
      </Grid>
    );
  }
}

export default App;
