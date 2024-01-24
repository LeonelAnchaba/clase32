const {check} = require('express-validator');


module.exports = [
    check("name")
    .notEmpty().withMessage("El campo no puede estar vacio").bail()
    .matches(/^[a-zA-Z\s]+$/).withMessage("No puedes ingresar números ni caracteres especiales")
    .isLength({min:3, max:20}).withMessage("Debe contener entre 3 y 15 caracteres"),
    check("color")
    .notEmpty().withMessage("El campo no puede estar vacio").bail(),
    check("email")
    .notEmpty().withMessage("El campo no puede estar vacio").bail()
    .isEmail().withMessage("El valor ingresado debe tener el formato de un correo electronico").bail(),
    check("age")
    .isInt().withMessage("El campo admite SOLO numero enteros").bail()
]