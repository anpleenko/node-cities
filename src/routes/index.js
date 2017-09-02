const express = require('express');
const city = require('../queries/cityQueries');
const students = require('../queries/studentsQueries');
const pdd = require('../queries/pddQueries');
const puppy = require('../queries/puppyQueries');
const bookmarks = require('../queries/bookmarksQueries');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

router.get('/api/countries', city.getAllCountries);
router.get('/api/countries/:id', city.getSingleCountry);

router.get('/api/cities', city.getAllCities);
router.get('/api/cities/:id', city.getSingleCity);

router.get('/api/students', students.getOllStudents);
router.get('/api/pdd', pdd.getOllPdd);

router.get('/api/bookmarks', bookmarks.getAllBookmarks);
router.get('/api/bookmarks/menu', bookmarks.getAllBookmarksMenu);

router.get('/api/demo', (req, res, next) => {
  res.json({
    ID: null,
    name: 'Doe',
    'first-name': 'John',
    age: 25,
    hobbies: ['reading', 'cinema', { sports: ['volley-ball', 'badminton'] }],
    address: {},
  });
});

router.post('/api/puppes', puppy.createPuppy);
router.put('/api/puppes/:id', puppy.updatePuppy);
router.delete('/api/puppes/:id', puppy.removePuppy);

module.exports = router;
