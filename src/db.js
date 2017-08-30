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


/**
 * Node.js API Starter Kit (https://reactstarter.com/nodejs)
 *
 * Copyright © 2016-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* @flow */

// import knex from 'knex';
// const knex = require('knex');
// const util = require('./utils');
//
// const db = knex({
//   client: 'pg',
//   connection: process.env.DATABASE_URL,
//   migrations: {
//     tableName: 'migrations',
//   },
//   // debug: process.env.DATABASE_DEBUG === 'true',
//   debug: true,
// });
//
// // db.destroy();
//
// db
//   // .table('new_pdd_with_changed')
//   // .leftJoin('new_pdd_with_changed_category', 'new_pdd_with_changed_text')
//   // .select('logo', 'title')
//   // .from('new_pdd_with_changed')
//   .select('*')
//   .from('title')
//   .crossJoin('new_pdd_with_changed_category', 'new_pdd_with_changed_text')
//   .then((data) => console.log(data))
//
// //   // .table('new_pdd_with_changed')
// //   // .leftJoin('new_pdd_with_changed_category', 'new_pdd_with_changed_text')
// //   // .select()
// //   // .whereIn('stories.id', keys)
// //   // .groupBy('stories.id')
// //   // .select('stories.id', db.raw('count(comments.story_id)'))
// //   // .then(util.mapToValues(keys, x => x.id, x => x.count))
//
// module.exports = db;
