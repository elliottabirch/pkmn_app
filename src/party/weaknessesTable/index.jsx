import React, { Component } from 'react';
import Table from '../Table';

class WeaknessTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      party: props.pokemon,
      strengthTo: [1, 1, '0', 1],
      weaknessTo: [1, 2, 3, 4],
      immuneTo: [1, '0', 1, 1],
    };
  }
  render() {
    return (
      <Table
        collHeadings={this.props.types}
        rowHeadings={['Weakness To', 'Strength To', 'Immune To']}
        rowsData={[this.state.weaknessTo, this.state.strengthTo, this.state.immuneTo]}
      />
    );
  }
}

export default WeaknessTable;
