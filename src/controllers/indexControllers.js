const indexControllers = {
    index: (req, res) => {
        res.render('index', { title: 'Express' });
      },
    login: (req, res) => {
        console.log(req.body)
        const dataUser = req.body
        console.log(dataUser.name)
        res.render("login", { title: 'Express', dataUser })
      },
}

module.exports = indexControllers