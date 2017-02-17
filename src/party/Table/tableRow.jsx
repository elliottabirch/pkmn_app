import React from 'react';

const TableRow = ({ rowData, rowHeading, clickHandler }) => {
  const row = rowData.map((entry, index) => <td onClick={clickHandler ? () => { clickHandler(entry); } : null} key={`${entry + index}`}>{entry}</td>);
  return (
    <tr>
      {rowHeading ? <td>{rowHeading}</td> : null}
      {row}
    </tr>
  );
};

export default TableRow;
