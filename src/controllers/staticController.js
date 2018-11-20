module.exports = {
  index(req, res, next) {
    res.render("static/index", {title: "Welcome to Topiccit"});
  },
  about(req, res, next) {
    res.render("static/about", {title: "Topiccit | About Us"});
  }
}