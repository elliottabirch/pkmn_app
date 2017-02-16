import React from 'react';

const tableHead = ({ collHeadings }) => {
  let Th;
  if (collHeadings) {
    collHeadings.unshift('Stat');
    Th = collHeadings.map((text, index) => <th key={index + text}>{text}</th>);
  }
  return (
    <thead>
      <tr>
        {Th || null}
      </tr>
    </thead>
  );
};

export default tableHead;
