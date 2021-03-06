import React from 'react';

const WeaknessTd = ({ statValue, statType }) => {
  const tdStyle = {
    opacity: `${+statValue / 6}`,
  };
  return (
    <td style={tdStyle} className={statType} />
  );
};

export default WeaknessTd;
