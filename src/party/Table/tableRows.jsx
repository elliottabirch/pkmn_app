import React from 'react';
import TableRow from './tableRow';

const pokemonRows = ({ rowsData, rowHeadings, selectPokemon, addToParty, type, statType }) => {
  const rows = rowsData.map((data, index) =>
    <TableRow
      rowData={data} key={`${data + index}`}
      rowHeading={rowHeadings ? rowHeadings[index] : null}
      selectPokemon={selectPokemon || null}
      addToParty={addToParty || null}
      type={type}
    />);
  return (
    <tbody>
      {rows}
    </tbody>
  );
};

export default pokemonRows;
