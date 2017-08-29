const db = require('../helpers/db');

function getOllStudents(req, res, next) {
  db.any(`
    SELECT
      users.id as id,
      users.name as users_name,
      users.birthday,
      array(
          SELECT subject.label
          FROM subject
          WHERE users.id = subject.user_id
      ) as subjects,
      department.label as department,
      department.instructor as instructor

    FROM users, department
    WHERE users.department = department.id;
  `)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch(err => next(err));
}


module.exports = {
  getOllStudents,
};
