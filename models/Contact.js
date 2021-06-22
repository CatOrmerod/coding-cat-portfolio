const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Contact extends Model { }

Contact.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              isEmail: true,
            },
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'contact'
    }
);

module.exports = Contact;