var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', {nama: 'Anggi'})
})

router.get('/regist/', function(req, res, next) {
    res.render('regist', {nama: 'Anggi'})
})

module.exports = router;