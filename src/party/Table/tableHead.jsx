import React from 'react';

const tableHead = ({ collHeadings }) => {
  let Th;
  if (collHeadings) {
    Th = collHeadings.map((text, index) => <th key={index + text}>{text}</th>);
  }
  return (
    <thead>
      <tr>
        <td></td>
        {Th || null}
      </tr>
    </thead>
  );
};

export default tableHead;
