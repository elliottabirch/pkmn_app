import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const List = ({ listEntries, handleClick, keyName }) => {
  const entries = listEntries.map((entry, index) => <ListGroupItem key={`${entry + index}`} onClick={(e) => { handleClick(e.target.innerHTML, keyName); }}>{entry}</ListGroupItem>);
  return (
    <ListGroup style={{ 'overflow-y': 'auto', 'max-height': '100vh' }}>
      {entries}
    </ListGroup>
  );
};

export default List;
