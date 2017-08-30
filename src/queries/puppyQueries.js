const db = require('../db');

function getSinglePuppy(req, res, next) {
  const pupID = parseInt(req.params.id, 10);
  db
    .one('select * from pups where id = $1', pupID)
    .then((data) => {
      res.status(200).json({
        status: 'success',
        data,
        message: 'Retrieved ONE puppy',
      });
    })
    .catch(err => next(err));
}

function createPuppy(req, res, next) {
  req.body.age = parseInt(req.body.age, 10);
  db
    .none(
      'insert into pups(name, breed, age, sex)' +
        'values(${name}, ${breed}, ${age}, ${sex})',
      req.body,
    )
    .then(() => {
      res.status(200).json({
        status: 'success',
        message: 'Inserted one puppy',
      });
    })
    .catch(err => next(err));
}

function updatePuppy(req, res, next) {
  db
    .none('update pups set name=$1, breed=$2, age=$3, sex=$4 where id=$5', [
      req.body.name,
      req.body.breed,
      parseInt(req.body.age, 10),
      req.body.sex,
      parseInt(req.params.id, 10),
    ])
    .then(() => {
      res.status(200).json({
        status: 'success',
        message: 'Updated puppy',
      });
    })
    .catch(err => next(err));
}

function removePuppy(req, res, next) {
  const pupID = parseInt(req.params.id, 10);
  db
    .result('delete from pups where id = $1', pupID)
    .then((result) => {
      res.status(200).json({
        status: 'success',
        message: `Removed ${result.rowCount} puppy`,
      });
    })
    .catch(err => next(err));
}

module.exports = {
  getSinglePuppy,
  createPuppy,
  updatePuppy,
  removePuppy,
};
