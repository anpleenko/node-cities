const db = require('../db');

function getOllPdd(req, res, next) {
  db.one(`
    SELECT
      new_pdd.logo as logo,
      new_pdd.title as title,
      ARRAY (
        SELECT json_build_object('category', category, 'text', text) as friends
        FROM (
          SELECT
            new_pdd_category.title as category,
            new_pdd_text.text as text

          FROM new_pdd_category

          INNER JOIN new_pdd_text
            ON new_pdd_text.category_id = new_pdd_category.id
        ) as data
      ) as items

    FROM
      new_pdd
  `)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch(err => next(err));
}


module.exports = {
  getOllPdd,
};
