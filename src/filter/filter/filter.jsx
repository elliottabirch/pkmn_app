import React, { PropTypes } from 'react';
import { FormControl } from 'react-bootstrap';

const Filter = ({ handleChange, addFilter, keyName }) => (
  <div>
    <FormControl style={{ marginBottom: '10px' }}id={`filterInput${keyName}`} type="text" placeholder={`Enter ${keyName}`} label={`Filter by ${keyName}`} onChange={e => handleChange(e, keyName)} onSubmit={e => addFilter(e, `${keyName.toLowerCase()}Filter`)} />
  </div>

  );

Filter.propTypes = {
  handleChange: PropTypes.func,
  addFilter: PropTypes.func,
  keyName: PropTypes.string,
};

export default Filter;
