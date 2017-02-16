import React from 'react';

const filter = ({ handleChange, handleSubmit }) => (
  <div >
    <input type="text" onChange={e => handleChange(e)} onSubmit={e => handleSubmit(e)} />
  </div>
  );

export default filter;
