import React from 'react';
import { Table } from 'react-bootstrap';
import TableHead from './tableHead';
import TableRows from './tableRows';

const customTable = ({ collHeadings, rowHeadings, rowsData, selectPokemon, addToParty, type, statType }) => (
  <div>
    <Table striped bordered hover>
      {collHeadings ? <TableHead collHeadings={collHeadings} /> : null}
      <TableRows
        rowsData={rowsData}
        rowHeadings={rowHeadings || null}
        selectPokemon={selectPokemon || null}
        addToParty={addToParty || null}
        type={type}
      />
    </Table>
  </div>
  );

export default customTable;
