const { DataTypes } = require('sequelize');
const conection = require('../../database/conection')

const Client = conection.define('User', {
    dni:{
        type: DataTypes.STRING,
        require: true,
    },
    name:{
        type: DataTypes.STRING,
        require: true,
    },
    last_name:{
        type: DataTypes.STRING,
        require: true,
    },
    phone:{
        type: DataTypes.STRING,
        defaultValue: '',
    },
    address:{
        type: DataTypes.STRING,
        defaultValue: '',
    },
    email:{
        type: DataTypes.STRING,
        defaultValue: '',
    }
},{
    timestamps: true,
})

module.exports = Client;