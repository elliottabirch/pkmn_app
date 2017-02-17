import React from 'react';
import TableRow from './tableRow';

const pokemonRows = ({ rowsData, rowHeadings, clickHandler }) => {
  const rows = rowsData.map((data, index) =>
    <TableRow
      rowData={data} key={`${data + index}`}
      rowHeading={rowHeadings ? rowHeadings[index] : null}
      clickHandler={clickHandler || null}
    />);
  return (
    <tbody>
      {rows}
    </tbody>
  );
};

export default pokemonRows;
