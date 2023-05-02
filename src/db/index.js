const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('lynxdb', 'postgres', process.env.PGPASSWORD, {
  host: 'localhost',
  dialect: 'postgres'
});



module.exports = sequelize;
