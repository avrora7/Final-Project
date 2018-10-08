require('dotenv').config();
const express = require('express');
var bodyParser = require("body-parser");
const cors = require('cors');
const Sequelize = require('sequelize');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port = process.env.PORT || 3002;

app.use(cors());

require("./api-routes.js")(app);

var db = require("./models");

app.get('/', (req, res) => {

    let movies = [
        { id: 101, name: "Fight Club", year: 1999, rating: 8.1 },
        { id: 102, name: "Inception", year: 2010, rating: 8.7 },
        { id: 103, name: "The Dark Knight", year: 2008, rating: 9 },
        { id: 104, name: "12 Angry Men", year: 1957, rating: 8.9 }
    ];

    res.json(movies);
});
 
db.sequelize.sync({ force: true }).then(function () {
    db.seed(function () {
        app.listen(port, function () {
            console.log("App listening on PORT " + port);
        });
    })
});


