const sequelize = require("./../../db/index")
const { Sequelize, DataTypes } = require('sequelize');
const Location = require("./Location")


const Advert = sequelize.define('Advert', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title : { 
        type: DataTypes.STRING,
        allowNull: false,
    },

    from : {
        type: DataTypes.DATEONLY,
        allowNull: false
    },

    to : {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    
    periode : { 
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    media : {
        type: DataTypes.STRING,
        allowNull: false,
        unique : true
    }

  },{timestamps : false});



const Location_Advert = sequelize.define('Location_Advert', {}, { timestamps: false });

Location.belongsToMany(Advert, { through: Location_Advert } );
Advert.belongsToMany(Location, { through: Location_Advert } );


module.exports = {Advert, Location_Advert};