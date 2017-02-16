import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const List = ({ listEntries, handleClick, keyName, toggleActive }) => {
  const entries = listEntries.map((entry, index) => <ListGroupItem key={`${entry + index}`} onClick={(e) => { handleClick(e.target.innerHTML, keyName); toggleActive(e); }}>{entry}</ListGroupItem>);
  return (
    <ListGroup>
      {entries}
    </ListGroup>
  );
};

export default List;
