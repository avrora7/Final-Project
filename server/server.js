require('dotenv').config();
const express = require('express')
const cors = require('cors');
const Sequelize = require('sequelize');


const app = express()

const { EXPRESS_PORT, MYSQL_DATABASE, MYSQL_USERNAME, MYSQL_PASSWORD, MYSQL_HOST } = process.env;

const port = EXPRESS_PORT;

app.use(cors());

const sequelize = new Sequelize(MYSQL_DATABASE, MYSQL_USERNAME, MYSQL_PASSWORD, {
  host: MYSQL_HOST,
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log('DB connection OK');
  })
  .catch(err => {
    console.error('DB connection Failed:', err);
  });


app.get('/', (req, res) => {

    let movies = [
        { id: 101, name: "Fight Club", year: 1999, rating: 8.1 },
        { id: 102, name: "Inception", year: 2010, rating: 8.7 },
        { id: 103, name: "The Dark Knight", year: 2008, rating: 9 },
        { id: 104, name: "12 Angry Men", year: 1957, rating: 8.9 }
    ];

    res.json(movies);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))