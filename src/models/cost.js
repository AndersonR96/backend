import  DataTypes  from 'sequelize';
import connection from '../../database/connection.js';

const Cost = connection.define('Cost', {
    name:{
        type: DataTypes.STRING,
        require: true,
    },
    description:{
        type: DataTypes.STRING,
        require: true,
    },
    prize:{
        type: DataTypes.STRING,
        require: true,
    },
    IVA:{
        type: DataTypes.STRING,
        require: true,
    },
    taxes_1:{
        type: DataTypes.STRING,
        require: true,
    },
    taxes_2:{
        type: DataTypes.STRING,
        defaultValue: '',
    }
},{
    timestamps: true,
})

export default Cost;