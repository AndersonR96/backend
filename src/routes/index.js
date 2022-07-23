import { Router } from 'express'
import connection from '../../database/connection.js'
import { getCustomer, getCustomerById, createCustomer } from '../controllers/customer.js'
import {getProvider, getProviderById, createProvider} from '../controllers/provider.js'
import { getUser, getUserById, createUser } from '../controllers/user.js'

import dotenv from 'dotenv'
dotenv.config()

const router = Router()
router.get('/', async function(req, res) {
    let status = '';
    try{
        connection.authenticate();
        status = "Database Conected"
    } catch(err){
        status = "Database Desconected"
        console.log(err)
    }
    
    res.json({
        APP: process.env.APP,
        ENTORNO: process.env.ENTORNO,
        PUERTO: process.env.PORT ? process.env.PORT : 4000,
        DATABASE: status
    })
})

//RUTAS MODELO CUSTOMER
router.get('/users', getCustomer)
router.get('/users/:id', getCustomerById)
router.post('/users', createCustomer)

//RUTAS MODELO PROVIDER (PROVEEDOR)
router.get('/provider', getProvider)
router.get('/provider/:id', getProviderById)
router.post('/provider', createProvider)

//RUTAS MODELO USER

router.get('/user', getUser)
router.get('/user/:id', getUserById)
router.post('/user', createUser)



export default router