import  DataTypes  from 'sequelize';
import connection from '../../database/connection.js';

const Customer = connection.define('Customer', {
    Customer_type:{
        type: DataTypes.STRING,
        require: true,
    },
    dni:{
        type: DataTypes.STRING,
        require: true,
    },
    business_name:{
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
    },
    country:{
        type: DataTypes.STRING,
        require: true,
    },
    estate:{
        type: DataTypes.STRING,
        require: true,
    },
    city:{
        type: DataTypes.STRING,
        require: true,
    },
    contact_name:{
        type: DataTypes.STRING,
        require: true,
    },
},{
    timestamps: true,
})

export default Customer;