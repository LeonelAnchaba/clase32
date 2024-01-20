var express = require('express');
var router = express.Router();
const {index, login} = require("../controllers/indexControllers")

/* GET home page. */
router
.get('/', index)
.post("/", login);


module.exports = router;
