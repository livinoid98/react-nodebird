const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const HashTag = sequelize.define('HashTag', {
        name : {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
    },{
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
    });
    HashTag.associate = (db) => {
        db.HashTag.belongsToMany(db.Post, {through : 'PostHashTag'});
    };

    return HashTag;
};