var express = require('express');
var router = express.Router();

var db = require('./queries');

router.get('/api/countries', db.getAllCountries);
router.get('/api/countries/:id', db.getSingleCountry);

router.post('/api/puppies', db.createPuppy);
router.put('/api/puppies/:id', db.updatePuppy);
router.delete('/api/puppies/:id', db.removePuppy);


module.exports = router;
