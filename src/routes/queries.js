const promise = require('bluebird');

const options = {
  // Initialization Options
  promiseLib: promise,

  connect(client, dc, isFresh) {
    const cp = client.connectionParameters;
    console.log('Connected to database:', cp.database);
  },

  error(err, e) {
    console.log(err);
    console.log(e);
  },
};

const pgp = require('pg-promise')(options);

const db = pgp(process.env.DATABASE_URL);

// add query functions
function getAllCountries(req, res, next) {
  db.any('SELECT * FROM country;')
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      return next(err);
    });
}

function getSingleCountry(req, res, next) {
  var countryId = parseInt(req.params.id);
  db.any('SELECT * FROM country WHERE id = $1;', countryId)
    .then(function (data) {
      res.status(200).json(data);
    })
    .catch(function (err) {
      return next(err);
    });
}

// SELECT city.name as city_name, region.name as region_name, country.name as country_name FROM city, region, country WHERE city.region_id = region.id AND region.country_id = country.id LIMIT 200;
function getAllCities(req, res, next) {
  db.any('SELECT * FROM city;')
    .then(function (data) {
      res.status(200).json(data);
    })
    .catch(function (err) {
      return next(err);
    });
}

function getSingleCity(req, res, next) {
  var cityId = parseInt(req.params.id);
  db.any('SELECT * FROM city WHERE id = $1;', cityId)
    .then(function (data) {
      res.status(200).json(data);
    })
    .catch(function (err) {
      return next(err);
    });
}

function getSinglePuppy(req, res, next) {
  var pupID = parseInt(req.params.id);
  db.one('select * from pups where id = $1', pupID)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE puppy'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function createPuppy(req, res, next) {
  req.body.age = parseInt(req.body.age);
  db.none('insert into pups(name, breed, age, sex)' +
      'values(${name}, ${breed}, ${age}, ${sex})',
    req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one puppy'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function updatePuppy(req, res, next) {
  db.none('update pups set name=$1, breed=$2, age=$3, sex=$4 where id=$5',
    [req.body.name, req.body.breed, parseInt(req.body.age),
      req.body.sex, parseInt(req.params.id)])
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Updated puppy'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function removePuppy(req, res, next) {
  var pupID = parseInt(req.params.id);
  db.result('delete from pups where id = $1', pupID)
    .then(function (result) {
      /* jshint ignore:start */
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} puppy`
        });
      /* jshint ignore:end */
    })
    .catch(function (err) {
      return next(err);
    });
}

module.exports = {
  getAllCountries,
  getSingleCountry,

  getAllCities,
  getSingleCity,

  getSinglePuppy,
  createPuppy,
  updatePuppy,
  removePuppy,
};
