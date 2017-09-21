const db = require('../db');

const getOllPdd = async (req, res, next) => {
  try {
    const newPdd = await db.one(`
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
    `);

    // res.send(newPdd);

    const pdd = await db.one(`
      SELECT
        pdd.logo as logo,
        pdd.title as title,
        ARRAY (
          SELECT json_build_object('category', category, 'text', text) as friends
          FROM (
            SELECT
              pdd_category.title as category,
              pdd_text.text as text

            FROM pdd_category

            INNER JOIN pdd_text
              ON pdd_text.category_id = pdd_category.id
          ) as data
        ) as items

      FROM
        pdd
    `);

    res.send({
      new_pdd: newPdd,
      pdd,
    })
  } catch (err) {
    res.send(err);
  }
}


module.exports = {
  getOllPdd,
};
