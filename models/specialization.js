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

        Specialization.hasMany(models.User, {
          as: "User",
          foreignKey: {
            name: "specializationId",
            allowNull:true
          }
        });
      };

    return Specialization;
};


