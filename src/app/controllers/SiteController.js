const Blog = require("../models/Blogs");

class SiteController {
  // [GET] /home
  index(req, res, next) {
    Blog.find({})
      .lean() //cách 1
      .then((Blog) => {
        // Blog = Blog.map((item) => item.toObject());
        res.render("home", { Blog });
      })
      .catch(next);
  }
}

module.exports = new SiteController();
