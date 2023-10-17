var express = require('express');
var router = express.Router();

var user = require('../controller/usercontroller');

/* GET home page. */
router.post('/',user.insert);

module.exports = router;
