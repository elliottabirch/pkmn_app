
import React, { Component } from 'react';
import Pokemon from './pokemon';

function Party(props) {
  return (
    <div >
      <Pokemon pokemon={props.party} />
    </div>
  );
}

export default Party;
