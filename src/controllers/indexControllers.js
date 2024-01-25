const { validationResult } = require("express-validator")

const indexControllers = {
    index: (req, res) => {
      if(req.cookies.dataUser && req.cookies.rememberMe){
        // res.send("Holi")
        res.render("login", { title: 'Express', dataUser: req.cookies.dataUser })
      } else {
        res.render('index', { title: 'Express' });
      }
       
      },
    login: (req, res) => {
        const resultValidation = validationResult(req)

        if(!resultValidation.isEmpty()) {
          res.render('index', { errors: resultValidation.mapped(), title: "Error", old:req.body});
      } 
        const dataUser = req.body
        req.session.usuario = dataUser

        res.cookie('dataUser', dataUser, {maxAge: 1000 * 60 * 15 })
        if(dataUser.rememberMe){    
          res.cookie('rememberMe', dataUser.color, {maxAge: 1000 * 60 * 15 })
      }

        res.render("login", { title: 'Express', dataUser: req.session.usuario })
      
      },
      menu: (req, res) => {
        res.render("visita", { title: 'Menú', dataUser: req.session.usuario })
      },
      olvidar: (req,res) => {
      req.session.destroy();
      if (req.cookies.rememberMe) {
        res.clearCookie('dataUser');
        res.clearCookie('rememberMe');
      }
      res.redirect('/');
    },
}

module.exports = indexControllers