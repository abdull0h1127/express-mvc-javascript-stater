const createExample = (req, res) => {
    req.session.returnTo = "/example/create"

    res.render("example/create")
}

module.exports = {
    createExample,
}