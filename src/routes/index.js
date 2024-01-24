var express = require('express');
var router = express.Router();
const {index, login} = require("../controllers/indexControllers");
const formValidation = require("../validations/formValidation")

/* GET home page. */
router
.get('/', index)
.post("/", formValidation, login);


module.exports = router;
