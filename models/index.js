const Admin = require('./Admin');
const Project = require('./Project');
const Contact = require('./Contact')

Admin.hasMany(Project, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Project.belongsTo(Admin, {
    foreignKey: 'user_id'
});

module.exports = { Admin, Project, Contact };