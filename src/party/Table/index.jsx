import React from 'react';
import { Table } from 'react-bootstrap';
import TableHead from './tableHead';
import TableRows from './tableRows';

const customTable = ({ collHeadings, rowHeadings, rowsData }) => (
  <div>
    <Table striped bordered hover>
      {collHeadings ? <TableHead collHeadings={collHeadings} /> : null}
      <TableRows rowsData={rowsData} rowHeadings={rowHeadings || null} />
    </Table>
  </div>
  );

export default customTable;
