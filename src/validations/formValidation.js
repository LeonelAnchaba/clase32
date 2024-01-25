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
    .optional({ nullable: true })
    .isInt().withMessage('La edad debe ser un número.')
    // El campo de la edad es opcional, pero a la vez nos pide que 
    // validemos si lo ingresado en el mismo es un número
    // y caso contrario, mostrar el error.
    // Si dejo la validación de optional,
    // no puedo validar el tipo de dato que recibo; 
    // pero si valido el tipo de dato(en este caso con isÏnt()), 
    // la validación de optional deja de tener sentido y me transforma 
    // el campo en obligatorio. :c (Carita triste)
]