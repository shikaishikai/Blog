var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register');
    //res.send('hello');
});

module.exports = router;