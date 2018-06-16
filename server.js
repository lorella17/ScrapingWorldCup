var express = require("express");
var expressHandlebars = require("express-handlebars");
var bodyParser = require("body-parser");

var mongoose = require("mongoose");

// var axios = require("axios");
// var cheerio = require("cheerio");

// var db = require("./models");

var PORT = process.env.PORT || 3000;

var app = express();

// app.use(logger("dev"));
var router = express.Router();

require("./config/routes")(router);

app.use(express.static(__dirname + "/public"));

app.engine("handlebars", expressHandlebars({
    defaultLayout:"main"
}));

app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({
    extended: false

}));

app.use(router);

var db = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(db, function (error) {

    if (error){
        console.log("mongoose connection is a success");
    }
});

app.listen(PORT, function () {
    console.log("esta corriendo esto" + PORT + "que Berraco"+"!");
});
