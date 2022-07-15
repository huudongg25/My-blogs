const siteRouter = require("./site");
const profileRouter = require("./profile");
const updateRouter = require("./update");

function Routes(app) {
  app.use("/update", updateRouter);
  app.use("/profile", profileRouter);
  app.use("/", siteRouter);
}

module.exports = Routes;
