import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const List = ({ listEntries, addFilter, keyName }) => {
  const entries = listEntries.map((entry, index) => <ListGroupItem key={`${entry + index}`} onClick={(e) => { addFilter(e.target.innerHTML, `${keyName.toLowerCase()}Filter`); }}>{entry}</ListGroupItem>);
  return (
    <ListGroup style={{ overflowY: 'auto', maxHeight: '100vh' }}>
      {entries}
    </ListGroup>
  );
};

export default List;
