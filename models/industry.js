module.exports = function (sequelize, DataTypes) {
    var Industry = sequelize.define('Industry', {
        id: { type: DataTypes.INTEGER, primaryKey: true },
        name: DataTypes.STRING
    });

    Industry.associate = function (models) {
        // Industry.hasMany(models.User, {
        //     as: "Users",
        //     foreignKey: {
        //       name:"industryId",
        //       allowNull: false
        //     }
        //   });
    };

    return Industry;
};