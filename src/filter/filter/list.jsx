import React from 'react';

const List = ({ listEntries }) => {
  const entries = listEntries.map((entry, index) => <li key={`${entry + index}`}>{entry}</li>);
  return (
    <ul>
      {entries}
    </ul>
  );
};

export default List;
