const sessionValidate = (req, res, next) => {
    if(req.cookies.rememberMe && req.cookies.dataUser) {
        req.session.usuario = req.cookies.dataUser
    }
    next()
}

module.exports = sessionValidate;