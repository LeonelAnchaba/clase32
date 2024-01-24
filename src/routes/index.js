var express = require('express');
var router = express.Router();
const {index, login, menu, olvidar} = require("../controllers/indexControllers");
const formValidation = require("../validations/formValidation")

/* GET home page. */
router
.get('/', index)
.post("/", formValidation, login)

.get("/menu", menu)
.get("/olvidar", olvidar)



module.exports = router;
