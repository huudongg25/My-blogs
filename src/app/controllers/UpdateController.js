const Blog = require("../models/Blogs");

class UpdateController {
  update(req, res, next) {
    Blog.find({})
      .lean()
      .then((Blog) => res.render("update/blogs", { Blog }))
      .catch(next);
  }

  edit(req, res, next) {
    Blog.findById(req.params.id)
      .lean()
      .then((Blog) => res.render("update/edit", { Blog }))
      .catch(next);
  }

  save(req, res, next) {
    Blog.updateOne({ _id: req.params.id }, req.body)
      .lean()
      .then(() => res.redirect("/update"))
      .catch(next);
  }

  delete(req, res, next) {
    Blog.delete({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }

  deleteForce(req, res, next) {
    Blog.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }

  trash(req, res, next) {
    Blog.findDeleted({})
      .lean()
      .then((Blog) => res.render("update/trash", { Blog }))
      .catch(next);
  }

  patch(req, res, next) {
    Blog.restore({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
}

module.exports = new UpdateController();
