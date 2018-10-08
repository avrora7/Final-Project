module.exports = function (sequelize, DataTypes) {
    var Specialization = sequelize.define('Specialization', {
        id: { 
          type: DataTypes.INTEGER, 
          primaryKey: true,
          autoIncrement: true 
        },
        name:DataTypes.STRING
    });

    Specialization.associate = function (models) {
        Specialization.belongsTo(models.Service, {
          as: "Service",
          foreignKey: {
            name:"serviceId",
            allowNull: false
          }
        });
      };

    return Specialization;
};


