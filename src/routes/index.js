import { Router } from 'express'
import connection from '../../database/connection.js'
import { getCustomer, getCustomerById, createCustomer } from '../controllers/customer.js'
import { getProvider, getProviderById, createProvider } from '../controllers/provider.js'
import { getUser, getUserById, createUser, updateUser, deleteUser } from '../controllers/user.js'
import dotenv from 'dotenv'

dotenv.config()
const router = Router()

router.get('/', async function(req, res) {
    let status = '';
    try{
        connection.authenticate();
        status = "Database Connected"
    } catch(err){
        status = "Database Disconnected"
        console.log(err)
    }
    
    res.json({
        APP: process.env.APP,
        ENTORNO: process.env.ENTORNO,
        PUERTO: process.env.PORT ? process.env.PORT : 4000,
        DATABASE: status,
        RUTAS: 'as'
    })
})

//RUTAS MODELO CUSTOMER
router.get('/customer', getCustomer)
router.get('/customer/:id', getCustomerById)
router.post('/customer', createCustomer)

//RUTAS MODELO PROVIDER (PROVEEDOR)
router.get('/provider', getProvider)
router.get('/provider/:id', getProviderById)
router.post('/provider', createProvider)

//RUTAS MODELO USER
router.get('/user', getUser)
router.get('/user/:id', getUserById)
router.post('/user', createUser)
router.put('/user/:id', updateUser)
router.delete('/user/:id', deleteUser)



export default router