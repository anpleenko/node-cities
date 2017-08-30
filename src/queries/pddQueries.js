const db = require('../db');

function getOllPdd(req, res, next) {
  db.any(`
    SELECT
      new_pdd_with_changed.logo as logo,
      new_pdd_with_changed.title as title,
      ARRAY (
        SELECT json_build_object('category', category, 'text', text) as friends
        FROM (
          SELECT
            new_pdd_with_changed_category.title as category,
            new_pdd_with_changed_text.text as text

          FROM new_pdd_with_changed_category

          INNER JOIN new_pdd_with_changed_text
            ON new_pdd_with_changed_text.category_id = new_pdd_with_changed_category.id
        ) as data
      ) as items

    FROM
      new_pdd_with_changed
  `)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch(err => next(err));
}


module.exports = {
  getOllPdd,
};
