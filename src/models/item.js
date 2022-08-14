import DataTypes from 'sequelize';
import connection from '../../database/connection.js';

const Item = connection.define('Item', {
    name:{
        type: DataTypes.STRING,
        require: true,
    },
    description:{
        type: DataTypes.STRING,
        require: true,
    },
    type:{
        type:DataTypes.STRING,
        require: true,
    },
    amount:{
        type: DataTypes.STRING,
        require: true,
    },
    cost:{
        type: DataTypes.STRING,
        require: true,
    },
    price:{
        type: DataTypes.STRING,
        require: true,
    }

},{
    timestamps: true,
})

export default Item