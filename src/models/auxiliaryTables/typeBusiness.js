import  DataTypes  from 'sequelize';
import connection from '../../../database/connection.js';

const TypeBusiness = connection.define('TypeBusiness',{
    Description:{
        type: DataTypes.STRING,
        requiere: true,
    },
})


//En espera aprobacion