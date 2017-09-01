let dbm;
let type;
const fs = require('fs');
const path = require('path');

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = (options) => {
  dbm = options.dbmigrate;
  type = dbm.datatype;
};

exports.up = (db, callback) => {
  const filePath = path.join(
    __dirname + '/sqls/20111219120000-add-newpdd-up.sql',
  );

  fs.readFile(filePath, { encoding: 'utf-8' }, (err, data) => {
    if (err) return console.log(err);

    db.runSql(data, (err) => {
      if (err) return console.log(err);
      callback();
    });
  });
};

exports.down = (db, callback) => {
  const filePath = path.join(
    __dirname + '/sqls/20111219120000-add-newpdd-down.sql',
  );

  fs.readFile(filePath, { encoding: 'utf-8' }, (err, data) => {
    if (err) return console.log(err);

    db.runSql(data, (err) => {
      if (err) return console.log(err);
      callback();
    });
  });
};
