import React from 'react';
import { Row, Col, Button, Thumbnail } from 'react-bootstrap';

const SelectedPokemon = ({ selectedPokemon, addToParty }) => {
  const entryStyle = {
    marginLeft: '8px',
  };
  const card = (selectedPokemon ? <Thumbnail style={{ 'box-shadow': '2px 2px 9px 0px rgba(0,0,0,0.75)' }} src={selectedPokemon[0].sprite} alt="242x200">
    <Row >
      <center><h2>{selectedPokemon[0].name}</h2></center>
      <Col sm={6} md={6} lg={6}>
        <h4>Stats</h4>
        {selectedPokemon[0].stats.map((stat, index) => <p style={entryStyle} key={`${stat + index}`}>{`${stat[0]}: ${stat[1]}`}</p>)}
      </Col>
      <Col sm={6} md={6} lg={6}>
        <h4>Abilities</h4>
        {selectedPokemon[0].abilities.map((ability, index) => <p style={entryStyle} key={`${ability + index}`}>{ability}</p>)}
      </Col>
      <Col sm={6} md={6} lg={6}>
        <h4>Types</h4>
        {selectedPokemon[0].types.map((type, index) => <p style={entryStyle} key={`${type + index}`}>{type}</p>)}
      </Col>
      <p>
        <Button style={{ float: 'right', marginRight: '10px' }} onClick={() => addToParty(selectedPokemon[0])}bsStyle="primary">Add</Button>&nbsp;
      </p>
    </Row>
  </Thumbnail> : <center style={{ color: '#5f5f5f' }}><h4 >Choose a Pokemon to see its stats</h4></center>);

  return (
    <Row>
      <Col xs={12} md={12} lg={12}>
        {card}
      </Col>
    </Row>);
};

export default SelectedPokemon;
