const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Project extends Model {}

Project.init(
    {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        projectTitle: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        projectDescription: {
          type: DataTypes.STRING(1234),
        },
        projectTools: {
            type: DataTypes.STRING,
        },
        projectRole: {
            type: DataTypes.STRING,
        },
        projectRepo: {
            type: DataTypes.STRING,
        },
        projectURL: {
            type: DataTypes.STRING,
        },
        projectScreenshot: {
            type: DataTypes.STRING,
        },
        projectPic: {
            type: DataTypes.STRING,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'admin',
              key: 'id',
            },
        },
      },
      {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'project',
      }
    );
    
    module.exports = Project;    