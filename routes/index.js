const express = require('express');

const router = express.Router();

/* GET page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express'});
});

module.exports = router;
