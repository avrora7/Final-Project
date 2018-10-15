require('dotenv').config();
const express = require('express');
var bodyParser = require("body-parser");
var session = require("express-session");
const cors = require('cors');
var passport = require("./config/passport");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

const port = process.env.PORT || 3002;

app.use(cors());

require("./api-routes.js")(app);

var db = require("./models");

app.get('/', (req, res) => {
    //test api
    res.json(new Date().toTimeString());
});
 
db.sequelize.sync({ force: false }).then(function () {
    app.listen(port, function () {
        console.log("App listening on PORT " + port);
    });
});


