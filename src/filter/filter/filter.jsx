import React from 'react';
import { Row, Col, FormControl } from 'react-bootstrap';

const filter = ({ handleChange, addFilter, keyName }) => (
  <div>
    <FormControl style={{ 'margin-bottom': '10px' }}id={`filterInput${keyName}`} type="text" placeholder={`Enter ${keyName}`} label={`Filter by ${keyName}`} onChange={e => handleChange(e, keyName)} onSubmit={e => addFilter(e, `${keyName.toLowerCase()}Filter`)} />
  </div>

  );

export default filter;
