import DataTypes  from 'sequelize';

import connection from '../../database/connection.js'
import Customer from './customer.js'
import Provider from './provider.js'
import User from './user.js'
import Item from './item.js';
import Purchase from './purchase.js'
import Cost from './cost.js'

import auxiliaryTables from './auxiliaryTables/index.js';


import Associations from './associations/associations.js';

const Models = {
    Customer,
    Provider,
    User,
    Item,
    Purchase,
    Cost,
    Associations,
    auxiliaryTables,
}



export default Models

connection.sync({alter: true})