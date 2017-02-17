import React from 'react';
import Weakness from './weaknessTd';
import Pokemon from './pokemonTd';

const TableRow = ({ rowData, rowHeading, selectPokemon, addToParty, type, statType }) => {
  const row = rowData.map((entry, index) => (type === 'pokemon' ?
    <Pokemon
      selectPokemon={selectPokemon}
      addToParty={addToParty}
      key={`${entry + index}`}
      cellData={entry}
    /> :
      <Weakness
        statValue={entry}
        key={`${entry + index}`}
        statType={rowHeading}
      />
  ));
  return (
    <tr>
      {rowHeading ? <td>{rowHeading}</td> : null}
      {row}
    </tr>
  );
};

export default TableRow;
