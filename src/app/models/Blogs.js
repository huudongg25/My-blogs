const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const mongooseDelete = require("mongoose-delete");

const Schema = mongoose.Schema;
const Blog = new Schema(
  {
    name: { type: String },
    desc: { type: String },
    img: { type: String },
    slug: { type: String, slug: "name", unique: true },
  },
  { timestamps: true }
);

mongoose.plugin(slug);
Blog.plugin(mongooseDelete, { deletedAt: true, overrideMethods: "all" });

module.exports = mongoose.model("Blog", Blog);
