const sequelize = require("./../../db/index")
const { Sequelize, DataTypes } = require('sequelize');


const Location = sequelize.define('Location', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    WilayaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }

  },{timestamps : false});


module.exports = Location;