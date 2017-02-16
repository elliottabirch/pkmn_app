
import React, { Component } from 'react';
import Pokemon from './pokemon';

function Party(props) {
  return (
    <div className="party">
      <Pokemon pokemon={props.party} />
    </div>
  );
}

export default Party;
