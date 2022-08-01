import DataTypes from 'sequelize';
import connection from '../../database/connection.js';

const ProductService = connection.define('ProductService', {
    name:{
        type: DataTypes.STRING,
        require: true,
    },
    description:{
        type: DataTypes.STRING,
        require: true,
    },
    amount:{
        type: DataTypes.STRING,
        require: true,
    },
    cost:{
        type: DataTypes.STRING,
        require: true,
    }

},{
    timestamps: true,
})

export default ProductService