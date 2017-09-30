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

    const pdd = await db.any(`
      SELECT
        pdd.header as header,
        pdd.title as title,
        pdd.text as text,
        pdd.image as image

      FROM pdd
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
