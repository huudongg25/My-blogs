require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const { engine } = require("express-handlebars");
const app = express();
const port = process.env.PORT;
const Routes = require("./routes");
const methodOverride = require("method-override");
const db = require("./config/db");

//config static files
app.use(express.static("./src/public"));

// database
db.connect();

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use(methodOverride("_method"));

//HTTP logger
// app.use(morgan("combined"));

//Template engine
app.engine(
  "hbs",
  engine({
    extname: "hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

//Routes init
Routes(app);

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});
