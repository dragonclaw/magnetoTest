var express = require('express');
var router = express.Router();
var mutantController = require('../controllers/mutantController');

/* GET users listing. */
router.post('/', mutantController.mutant);

module.exports = router;
