// Requiring bcrypt for password hashing. 
var bcrypt = require("bcrypt-nodejs");
// Creating our User model
module.exports = function (sequelize, DataTypes) {

  var User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    company: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isVendor: DataTypes.BOOLEAN,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    zip: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    phone: DataTypes.STRING,
    manager: DataTypes.STRING,
    intro: DataTypes.TEXT,
    website: DataTypes.TEXT,
    managerPhoto: {
      type: DataTypes.TEXT,
      defailtValue: "/img/vendor_icon.png"
    },
    logo: {
      type: DataTypes.TEXT,
      defailtValue: "/img/company_placeholder.jpg"
    }
    
  });

  User.associate = function (models) {
    User.belongsTo(models.Specialization, {
      as: "Specialization",
      foreignKey: {
        name:"specializationId",
        allowNull: true
      }
    });

    User.belongsTo(models.Industry, {
      as: "Industry",
      foreignKey: {
        name:"industryId",
        allowNull: true
      }
    });

    User.hasMany(models.Relationship, {
      as: "StartupRelationships",
      foreignKey: {
        name:"startupId",
        allowNull: true
      }
    });

    User.hasMany(models.Relationship, {
      as: "VendorRelationships",
      foreignKey: {
        name:"vendorId",
        allowNull: true
      }
    });
  };


  //Creating a custom method for User model. It checks if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Password automatically hashed before a User is created.
  User.hook("beforeCreate", function (user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  return User;
};
