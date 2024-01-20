const indexControllers = {
    index: (req, res) => {
        res.render('index', { title: 'Express' });
      },
    login: (req, res) => {
        // res.render('error', { title: 'ERROR' });
        res.render("login", { title: 'Express' })
      },
}

module.exports = indexControllers