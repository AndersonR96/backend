import connection from '../../database/connection.js'
import Customer from './customer.js'
import Provider from './provider.js'
import User from './user.js'

const Models = {
    Customer,
    Provider,
    User
}

export default Models

// export default {
//     Customer,
//     Provider,
//     User
// }

connection.sync({alter: true})