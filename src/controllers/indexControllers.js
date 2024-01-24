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
      menu: (req, res) => {
        const dataUser = req.body
        res.render("visita", { title: 'Menú', dataUser })
      },
      olvidar: (req,res) => {
        res.send("Llega hasta acá")
      }
}

module.exports = indexControllers