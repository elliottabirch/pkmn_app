import React from 'react';
import { Table } from 'react-bootstrap';
import TableHead from './tableHead';
import TableRows from './tableRows';

const customTable = ({ collHeadings, rowHeadings, rowsData, clickHandler }) => (
  <div>
    <Table striped bordered hover>
      {collHeadings ? <TableHead collHeadings={collHeadings} /> : null}
      <TableRows rowsData={rowsData} rowHeadings={rowHeadings || null} clickHandler={clickHandler || null} />
    </Table>
  </div>
  );

export default customTable;
