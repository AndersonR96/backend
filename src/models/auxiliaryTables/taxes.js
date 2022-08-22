import  DataTypes  from 'sequelize';
import connection from '../../../database/connection.js';

const Taxes = connection.define ('Taxes',{
    Description:{
        type: DataTypes.STRING,
        requiere: true,
    },
    FEE:{
        type: DataTypes.FLOAT,
        requiere: true,
    },
    withholding:{
        type: DataTypes.FLOAT,
        requiere: false,
    }
})



// iva = {
//     GENERAL: 0.19,
//     TARIFA_5: 0.05,
//     EXENTOS:0,
//     EXENTOS:0
// };




export default Taxes