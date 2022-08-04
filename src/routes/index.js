import { Router } from 'express'
import connection from '../../database/connection.js'
import { Controllers } from '../controllers/index.js'
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
router.get('/customer', Controllers.Customer.get)
router.get('/customer/:id', Controllers.Customer.getById)
router.post('/customer', Controllers.Customer.create)
router.put('/customer', Controllers.Customer.update)
router.delete('/customer', Controllers.Customer.delete)

// //RUTAS MODELO PROVIDER (PROVEEDOR)
router.get('/provider', Controllers.Provider.get)
router.get('/provider/:id', Controllers.Provider.getById)
router.post('/provider', Controllers.Provider.create)
router.put('/provider/:id', Controllers.Provider.update)
router.delete('/provider/:id', Controllers.Provider.delete)

// //RUTAS MODELO USER
router.get('/user', Controllers.User.get)
router.get('/user/:id', Controllers.User.getById)
router.post('/user', Controllers.User.create)
router.put('/user/:id', Controllers.User.update)
router.delete('/user/:id', Controllers.User.delete)

// //RUTAS MODELO COSTO/GASTO
router.get('/cost', Controllers.Cost.get)
router.get('/cost/:id', Controllers.Cost.getById)
router.post('/cost', Controllers.Cost.create)
router.put('/cost', Controllers.Cost.update)
router.delete('/cost', Controllers.Cost.delete)

// //RUTAS MODELO SERVICIO
router.get('/productService', Controllers.productService.get)
router.get('/productService/:id', Controllers.productService.getById)
router.post('/productService', Controllers.productService.create)
router.put('/productService', Controllers.productService.update)
router.delete('/productService', Controllers.productService.delete)

export default router