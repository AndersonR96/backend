import connection from '../../database/connection.js'
import Customer from './customer.js'
import Provider from './provider.js'

export default {
    Customer,
    Provider
}

connection.sync({alter: true})