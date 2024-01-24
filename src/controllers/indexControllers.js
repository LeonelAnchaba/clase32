const { validationResult } = require("express-validator")

const indexControllers = {
    index: (req, res) => {
        res.render('index', { title: 'Express' });
      },
    login: (req, res) => {
        const resultValidation = validationResult(req)

        if(!resultValidation.isEmpty()) {
          res.render('index', { errors: resultValidation.mapped(), title: "Error", old:req.body});
          console.log("Entré acá................................")
        
      } else {
        console.log(req.body)
        const dataUser = req.body
        console.log(dataUser.name)
        res.render("login", { title: 'Express', dataUser })
      }
      },
}

module.exports = indexControllers