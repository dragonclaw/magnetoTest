var express = require('express');
var router = express.Router();
var statsController = require('../controllers/statsController');

/* GET users listing. */
router.get('/', statsController.stats);

module.exports = router;