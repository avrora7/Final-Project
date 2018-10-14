module.exports = function (sequelize, DataTypes) {
    var Message = sequelize.define('Message', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        text: DataTypes.TEXT
    });

    Message.associate = function (models) {

        console.log("models=" + models)

        // Message.belongsTo(models.User, {
        //     as: "From",
        //     foreignKey: {
        //         name: "fromId",
        //         allowNull: false
        //     }
        // }); 
        // Message.belongsTo(models.Relationship, {
        //     as: "Relationship",
        //     foreignKey: {
        //         name: "relationshipId",
        //         allowNull: false
        //     }
        // });
    };

    return Message;
};