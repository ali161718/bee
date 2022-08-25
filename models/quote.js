const { sequelize, Model, DataTypes } = require('../configs/db');

class Quote extends Model { }

Quote.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    quote: {
        type: DataTypes.STRING,
    },
    favorites: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    sequelize,
    modelName: 'Quote',
    freezeTableName: true
});

module.exports = Quote
