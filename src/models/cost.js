import  DataTypes  from 'sequelize';
import connection from '../../database/connection.js';

const Cost = connection.define('Cost', {
    name:{
        type: DataTypes.STRING,
        require: true,
    },
    description:{
        type: DataTypes.STRING,
        defaultValue: '',
        require: false,
    },
    price:{
        type: DataTypes.FLOAT,
        require: true,
    },
    IVA_FEE:{
        type: DataTypes.FLOAT,
        defaultValue: 0,
        require: true,
    },
    IVA_Amount:{
        type: DataTypes.FLOAT,
        defaultValue: 0,
        require: true,
    },
    tax1_FEE:{
        type: DataTypes.FLOAT,
        defaultValue: 0,
        require: true,
    },
    tax1_Amount:{
        type: DataTypes.FLOAT,
        defaultValue: 0,
        require: false,
    },
    tax2_FEE:{
        type: DataTypes.FLOAT,
        defaultValue: 0,
        require: false,
    },
    tax2_Amount:{
        type: DataTypes.FLOAT,
        defaultValue: 0,
        require: false,
    }
},{
    timestamps: true,
})

export default Cost;