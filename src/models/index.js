import DataTypes  from 'sequelize';

import connection from '../../database/connection.js'
import Customer from './customer.js'
import Provider from './provider.js'
import User from './user.js'
import Product from './product.js'
import Purchase from './purchase.js'
import Cost from './cost.js'
import ProductService from './service.js';

import Associations from './associations/associations.js';

const Models = {
    Customer,
    Provider,
    User,
    Product,
    Purchase,
    Cost,
    ProductService,
    Associations,
}



export default Models

connection.sync({alter: true})