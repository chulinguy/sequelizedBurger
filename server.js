//require necessary packages
const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const exphbs = require("express-handlebars");
//express server
var app = express();
var port = process.env.PORT || 3000;
//server middle-wares
app.use(express.static("public"));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./controllers/burgers_controller.js")(app)

//server logic
var db = require('./models');
db.sequelize.sync({ force: true }).then(function() {
  app.listen(port, function() {
    console.log("App listening on PORT " + port);
  });
});



