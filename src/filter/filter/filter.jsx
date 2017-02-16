import React from 'react';
import { Row, Col, FormControl } from 'react-bootstrap';

const filter = ({ handleChange, handleSubmit, keyName }) => (
  <div>
    <FormControl id={`filterInput${keyName}`} type="text" placeholder={`Enter ${keyName}`} label={`Filter by ${keyName}`} onChange={e => handleChange(e, keyName)} onSubmit={e => handleSubmit(e)} />
  </div>

  );

export default filter;
