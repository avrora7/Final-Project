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

const ProvidedService = sequelize.define('ProvidedService', {
    id: { type: Sequelize.INTEGER, primaryKey: true },
    name: Sequelize.STRING,
    definition: Sequelize.TEXT
});

const ProvidedSpecialization = sequelize.define('ProvidedSpecialization', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name:Sequelize.STRING,
    providedServiceId:
    {
        type: Sequelize.INTEGER,
        references: {
          model: ProvidedService,
          key: 'id',
        }
    }
});

const User = sequelize.define('user', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    company: Sequelize.STRING,
    email:Sequelize.STRING,
    password:Sequelize.STRING,
    isVendor:Sequelize.BOOLEAN,
    address:Sequelize.STRING,
    zip:Sequelize.STRING,
    state:Sequelize.STRING,
    country:Sequelize.STRING,
    phone:Sequelize.STRING,
    manager:Sequelize.STRING,
    intro:Sequelize.TEXT,
    ProvidedSpecialization:
    {
        type: Sequelize.INTEGER,
        references: {
          model: ProvidedSpecialization,
          key: 'id',
        }
    }
});

const Relationship = sequelize.define('relationship', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    vendorId:  {
        type: Sequelize.INTEGER,
        references: {
          model: User,
          key: 'id',
        }
    },
    startupId: {
        type: Sequelize.INTEGER,
        references: {
          model: User,
          key: 'id',
        }
    },
    status:Sequelize.STRING
});

const Message = sequelize.define('message', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    fromId: {
        type: Sequelize.INTEGER,
        references: {
          model: User,
          key: 'id',
        }
    },
    toId: {
        type: Sequelize.INTEGER,
        references: {
          model: User,
          key: 'id',
        }
    },
    relationshipId:  {
        type: Sequelize.INTEGER,
        references: {
          model: Relationship,
          key: 'id',
        }
    },
    text:Sequelize.STRING
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

sequelize.sync({force: true}).then(function() {
    
    let services = [
        { id:1, name: 'Venture Capitalist', definition: 'VCs are the people who give money' },
        { id:2, name: 'Mentor', definition: 'Mentors are the people who tech' },
        { id:3, name: 'Lawyer', definition: 'Lawyers are the people who take your money' },
        { id:4, name: 'Incubators & Accelerators', definition: 'Incubators help you gain experience' }
    ];

    let specializations = [
        {name: 'Angel', providedServiceId: 1},
        {name: 'Seed', providedServiceId: 1},
        {name: 'Mid', providedServiceId: 1},
        {name: 'Late', providedServiceId: 1},

        {name: 'Marketing', providedServiceId: 2},
        {name: 'Sales', providedServiceId: 2},
        {name: 'Human Resources', providedServiceId: 2},

        {name: 'Corporate', providedServiceId: 3},
        {name: 'Immigration', providedServiceId: 3},
        {name: 'Intellectual Property', providedServiceId: 3},

        {name: 'Incubators', providedServiceId: 4},
        {name: 'Accelerators', providedServiceId: 4}
    ];

    ProvidedService.bulkCreate(
        services
    ).then(() => {
        return ProvidedSpecialization.bulkCreate(specializations)
    }).then(() => {
        app.listen(port, () => console.log(`Example app listening on port ${port}!`))
    });
})

