const db = require('../db');

function getAllBookmarksMenu(req, res, next) {
  db.one(`
    SELECT
      ARRAY (
        SELECT json_build_object(
          'category', category,
          'title', title,
          'url', url
        ) as friends

        FROM (
          SELECT
            bookmarks_menu_categories.title as category,
            bookmarks_menu_items.title as title,
            bookmarks_menu_items.url as url

          FROM bookmarks_menu_items

          INNER JOIN bookmarks_menu_categories
            ON bookmarks_menu_items.category_id = bookmarks_menu_categories.id
        ) as data
      ) as menu
  `)
    .then((data) => {
      res.status(200).json(data.menu);
    })
    .catch(err => next(err));
}

function getAllBookmarks(req, res, next) {
  db.one(`
    SELECT
      ARRAY (
        SELECT json_build_object(
          'category', category,
          'title', title,
          'url', url,
          'description', description,
          'icon', icon
        ) as friends

        FROM (
          SELECT
            bookmarks_categories.title as category,
            bookmarks_items.title as title,
            bookmarks_items.url as url,
            bookmarks_items.description as description,
            bookmarks_items.icon as icon

          FROM bookmarks_items

          INNER JOIN bookmarks_categories
            ON bookmarks_items.category_id = bookmarks_categories.id
        ) as data
      ) as items
  `)
    .then((data) => {
      res.status(200).json(data.items);
    })
    .catch(err => next(err));
}

module.exports = {
  getAllBookmarksMenu,
  getAllBookmarks,
};
