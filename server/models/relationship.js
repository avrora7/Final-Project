module.exports = function (sequelize, DataTypes) {

    var Relationship = sequelize.define('Relationship', {
        id: { 
            type: DataTypes.INTEGER, 
            primaryKey: true, 
            autoIncrement: true 
        },
        status:DataTypes.STRING
    });

    Relationship.REQUESTED = "requested";
    Relationship.CONNECTED = "connected";

    Relationship.associate = function (models) {

        console.log('user==>' + models.User)

        Relationship.belongsTo(models.User, {
          as: "Vendor",
          foreignKey: {
            name:"vendorId",
            allowNull: false
          }
        });

       
        Relationship.belongsTo(models.User, {
          as: "Startup",
          foreignKey: {
            name: "startupId",
            allowNull: false
          }
        });
      };

    
  
    return Relationship;
  };
  
  