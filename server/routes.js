const { postNewPokemon, getPokemon, postNewType, getTypes } = require('../db/dbHelpers');
const router = require('express').Router();


router.post('/api/pokemon', postNewPokemon);
router.get('/api/pokemon', getPokemon);

router.post('/api/types', postNewType);
router.get('/api/types', getTypes);

module.exports = router;
