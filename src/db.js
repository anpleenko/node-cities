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

module.exports = db;
