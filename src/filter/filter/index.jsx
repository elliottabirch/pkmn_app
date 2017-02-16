import React, { Component } from 'react';
import Filter from './filter';
import List from './list';

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterValue: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, key) {
    this.setState({
      [key]: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <label >{`Filter for ${this.props.keyName}`}</label>
        <Filter handleChange={this.handleChange} key={this.props.keyName} handleSubmit={this.props.handleSubmit} />
        <List listEntries={this.props.listEntries} />
      </div>
    );
  }
}

export default SearchContainer;
