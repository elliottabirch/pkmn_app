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
    };

    this.addNameFilter = this.addNameFilter.bind(this);
    this.addMoveFilter = this.addMoveFilter.bind(this);
    this.addTypeFilter = this.addTypeFilter.bind(this);
  }
  componentDidMount() {
    axios.get('http://localhost:3001/api/types')
      .then((response) => {
        console.log(response);
        this.setState({
          types: response.data.map(type => type.name),
          moves: response.data.reduce((accum, type) => accum.concat(type.moves), []),
          typeTableData: response.data.reduce((accum, { name, double_damage_to, double_damage_from, no_damage_to }) => {
            accum[name] = { double_damage_from, double_damage_to, no_damage_to };
            return accum;
          }, {}),
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

  filterPokemon(nameFilterArray, typeFilterArray, moveFilterArray) {
    const temp = [...this.state.pokemon];
  }

  removeFilter(filter, array) {
    const temp = [...array];
  }

  addFilter(filter, array) {
    const temp = [...array];
    temp.push(filter);
    return temp;
  }
  addNameFilter(filter) {
    this.setState({
      nameFilter: this.addFilter(filter, this.state.nameFilter),
    });
  }

  removeNameFilter(filter) {
    this.setState({
      nameFilter: this.removeFilter(filter, this.state.nameFilter),
    });
  }

  addTypeFilter(filter) {
    this.setState({
      typeFilter: this.addFilter(filter, this.state.typeFilter),
    });
  }

  removeTypeFilter(filter) {
    this.setState({
      typeFilter: this.removeFilter(filter, this.state.typeFilter),
    });
  }

  addMoveFilter(filter) {
    this.setState({
      moveFilter: this.addFilter(filter, this.state.moveFilter),
    });
  }

  removeMoveFilter(filter) {
    this.setState({
      moveFilter: this.removeFilter(filter, this.state.moveFilter),
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
          typeTableData={this.state.typeTableData}
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
