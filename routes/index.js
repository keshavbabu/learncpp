var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/lesson', function(req, res, next) {
    res.redirect('/');
});

router.get('/lesson/:tagId', function(req, res, next) {
	var lesson = req.params.tagId;
	res.render('L'+lesson, { title: lesson });
});

module.exports = router;
