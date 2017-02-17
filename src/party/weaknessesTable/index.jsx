import React, { Component } from 'react';
import Table from '../Table';

class WeaknessTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      party: props.pokemon,

    };
  }
  render() {
    return (
      <Table
        collHeadings={this.props.types}
        rowHeadings={['Weakness', 'Strength', 'Immune']}
        rowsData={[this.props.weaknessTo, this.props.strengthTo, this.props.immuneTo]}
      />
    );
  }
}

export default WeaknessTable;
