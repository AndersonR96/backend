import  DataTypes  from 'sequelize';
import connection from '../../database/connection.js';

const User = connection.define('User', {
    name:{
        type: DataTypes.STRING,
        require: true,
    },
    last_name:{
        type: DataTypes.STRING,
        require: true,
    },
    email:{
        type: DataTypes.STRING,
        defaultValue: '',
    },
    username:{
        type: DataTypes.STRING,
        defaultValue: '',
    },
    password:{
        type: DataTypes.STRING,
        defaultValue: '',
    },
    userType:{
        type: DataTypes.STRING,
        defaultValue: '',
    },
},{
    timestamps: true,
})

export default User