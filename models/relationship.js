module.exports = function (sequelize, DataTypes) {

    var Relationship = sequelize.define('Relationship', {
        id: { 
            type: DataTypes.INTEGER, 
            primaryKey: true, 
            autoIncrement: true 
        }
    });

    Relationship.associate = function (models) {

        Relationship.belongsTo(models.User, {
          as: "Vendor",
          foreignKey: {
            name:"vendorId",
            allowNull: true
          }
        });

        Relationship.belongsTo(models.User, {
          as: "Startup",
          foreignKey: {
            name: "startupId",
            allowNull: true
          }
        });

        Relationship.hasMany(models.Message, {
          as: "Messages",
          foreignKey: {
            name: "relationshipId",
            allowNull: true,
            onDelete: 'cascade'
          }
        });
      };

    
  
    return Relationship;
  };
  
  