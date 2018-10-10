module.exports = function (sequelize, DataTypes) {
    var Service = sequelize.define('Service', {
        id: { type: DataTypes.INTEGER, primaryKey: true },
        name: DataTypes.STRING,
        definition: DataTypes.TEXT
    });

    return Service;
};

