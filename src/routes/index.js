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
router.get('/customer', Controllers.customerControllers.get)
router.get('/customer/:id', Controllers.customerControllers.getById)
router.post('/customer', Controllers.customerControllers.create)
router.put('/customer', Controllers.customerControllers.update)
router.delete('/customer', Controllers.customerControllers.delete)

//RUTAS MODELO PROVIDER (PROVEEDOR)
router.get('/provider', Controllers.providerControllers.get)
router.get('/provider/:id', Controllers.providerControllers.getById)
router.post('/provider', Controllers.providerControllers.create)
router.put('/provider/:id', Controllers.providerControllers.update)
router.delete('/provider/:id', Controllers.providerControllers.delete)

//RUTAS MODELO USER
router.get('/user', Controllers.userControllers.get)
router.get('/user/:id', Controllers.userControllers.getById)
router.post('/user', Controllers.userControllers.create)
router.put('/user/:id', Controllers.userControllers.update)
router.delete('/user/:id', Controllers.userControllers.delete)

//RUTAS MODELO COSTO/GASTO
router.get('/cost', Controllers.costControllers.get)
router.get('/cost/:id', Controllers.costControllers.getById)
router.post('/cost', Controllers.costControllers.create)
router.put('/cost', Controllers.costControllers.update)
router.delete('/cost', Controllers.costControllers.delete)

//RUTAS MODELO SERVICIO
router.get('/productService', Controllers.productServiceControllers.get)
router.get('/productService/:id', Controllers.productServiceControllers.getById)
router.post('/productService', Controllers.productServiceControllers.create)
router.put('/productService', Controllers.productServiceControllers.update)
router.delete('/productService', Controllers.productServiceControllers.delete)



export default router