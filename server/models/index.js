'use strict';

var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/../config/config.json')[env];
var db = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(function (file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function (file) {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  console.log("----->" + modelName);
})

Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.seed = function (callback) {
  let services = [
    { id: 1, name: 'Venture Capitalist', definition: 'VCs are the people who give money' },
    { id: 2, name: 'Mentor', definition: 'Mentors are the people who tech' },
    { id: 3, name: 'Lawyer', definition: 'Lawyers are the people who take your money' },
    { id: 4, name: 'Incubators & Accelerators', definition: 'Incubators help you gain experience' }
  ];

  let specializations = [
    { name: 'Angel', serviceId: 1 },
    { name: 'Seed', serviceId: 1 },
    { name: 'Mid', serviceId: 1 },
    { name: 'Late', serviceId: 1 },

    { name: 'Marketing', serviceId: 2 },
    { name: 'Sales', serviceId: 2 },
    { name: 'Human Resources', serviceId: 2 },

    { name: 'Corporate', serviceId: 3 },
    { name: 'Immigration', serviceId: 3 },
    { name: 'Intellectual Property', serviceId: 3 },

    { name: 'Incubators', serviceId: 4 },
    { name: 'Accelerators', serviceId: 4 }
  ];

  this.Service.bulkCreate(
    services
  ).then(() => {
    return this.Specialization.bulkCreate(specializations)
  }).then(() => {
    callback();
  });
}

module.exports = db;
