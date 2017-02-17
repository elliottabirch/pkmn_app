import React from 'react';
import { Row, Col, Button, Thumbnail } from 'react-bootstrap'

const SelectedPokemon = ({ selectedPokemon, addToParty }) => {
  var card = ( selectedPokemon ? <Thumbnail src={selectedPokemon[0].sprite} alt="242x200">
        <h3>{selectedPokemon[0].name}</h3> 
        <p>Description</p>
        <p>
          <Button onClick={()=>addToParty(selectedPokemon)}bsStyle="primary">Add</Button>&nbsp;
        </p>
      </Thumbnail> : <center><h3>Choose a Pokemon to see its stats</h3></center>)

  return (<Row>
    <Col xs={12} md={12} lg={12}>
      {card}
    </Col>
  </Row>);
};

export default SelectedPokemon;
