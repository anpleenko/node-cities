const db = require('../helpers/db');

// add query functions
function getAllCountries(req, res, next) {
  db.any('SELECT * FROM country;')
    .then((data) => {
      res.status(200).json(data);
    })
    .catch(err => next(err));
}

function getSingleCountry(req, res, next) {
  const countryId = parseInt(req.params.id, 10);
  db.any('SELECT * FROM country WHERE id = $1;', countryId)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch(err => next(err));
}

function getAllCities(req, res, next) {
  db.any('SELECT * FROM city LIMIT 200;')
    .then((data) => {
      res.status(200).json(data);
    })
    .catch(err => next(err));
}

function getSingleCity(req, res, next) {
  const cityId = parseInt(req.params.id, 10);
  db.any('SELECT * FROM city WHERE id = $1;', cityId)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch(err => next(err));
}

module.exports = {
  getAllCountries,
  getSingleCountry,

  getAllCities,
  getSingleCity,
};
