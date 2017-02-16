import React from 'react';
import TableRow from './tableRow';

const pokemonRows = ({ rowsData, rowHeadings }) => {
  const rows = rowsData.map((data, index) => <TableRow rowData={data} key={`${data + index}`} rowHeading={rowHeadings[index] || null} />);
  return (
    <tbody>
      {rows}
    </tbody>
  );
};

export default pokemonRows;
