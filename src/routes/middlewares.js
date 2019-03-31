const authMiddleware = (req, res, next) => {
    if (req.session && req.session.isLoggedIn) {
        return next()
    } else {
        res.redirect('/login')
    }
}

module.exports = {
  authMiddleware
}
