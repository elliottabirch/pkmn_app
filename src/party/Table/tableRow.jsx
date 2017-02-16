import React from 'react';

const TableRow = ({ rowData, rowHeading }) => {
  const row = rowData.map((entry, index) => <td key={`${entry + index}`}>{entry}</td>);
  return (
    <tr>
      {rowHeading ? <td>{rowHeading}</td> : null}
      {row}
    </tr>
  );
};

export default TableRow;
