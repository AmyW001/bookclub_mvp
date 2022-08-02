var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('confused??');
});

module.exports = router;

//this is a "users" file so would have to match /users