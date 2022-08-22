import  DataTypes  from 'sequelize';
import connection from '../../../database/connection.js';

const Location = {}

Location.country = connection.define('country',{
    name:{
        type: DataTypes.STRING,
        require: true,
    }
})

Location.state = connection.define('state',{
    name:{
        type: DataTypes.STRING,
        require: true,
    }
})

Location.city = connection.define('city',{
    name:{
        type: DataTypes.STRING,
        require: true,
    }
})

export default Location