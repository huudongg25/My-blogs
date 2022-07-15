const Blogs = require("../models/Blogs");

class ProfileController {
  //[GET] /:slug
  show(req, res, next) {
    Blogs.findOne({ slug: req.params.slug })
      .lean()
      .then((item) => {
        res.render("profile/show", { item });
      })
      .catch(next);
  }

  //[GET] /create
  create(req, res, next) {
    res.render("profile/create");
  }

  //[POST] /profile/store
  store(req, res, next) {
    const blog = new Blogs(req.body);
    blog
      .save()
      .then(() => res.redirect("/"))
      .catch(next);
  }
}

module.exports = new ProfileController();
