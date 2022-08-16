import DataTypes  from 'sequelize';
import connection from '../../database/connection.js';

const Purchase = connection.define('Purchase', {
   
    total_cost:{
        type: DataTypes.STRING,
        require: true,
    },
    
},{
    timestamps: true,
})

export default Purchase