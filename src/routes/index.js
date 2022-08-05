import { Router } from 'express'
import connection from '../../database/connection.js'
import dotenv from 'dotenv'

import User from './user.js'
import Customer from './customer.js'
import Provider from './provider.js'
import Cost from './cost.js'
import productService from './productService.js'

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
        APP_BY: "DIEGO, ANDERSON Y MIGUEL"
    })
})

//RUTAS
router.use('/customer', Customer)
router.use('/provider', Provider)
router.use('/user', User)
router.use('/cost', Cost)
router.use('/productService', productService)

export default router