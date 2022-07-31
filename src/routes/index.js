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
router.get('/customer', Controllers.customerControllers.getCustomer)
router.get('/customer/:id', Controllers.customerControllers.getCustomerById)
router.post('/customer', Controllers.customerControllers.createCustomer)

//RUTAS MODELO PROVIDER (PROVEEDOR)
router.get('/provider', Controllers.providerControllers.getProvider)
router.get('/provider/:id', Controllers.providerControllers.getProviderById)
router.post('/provider', Controllers.providerControllers.createProvider)

//RUTAS MODELO USER
router.get('/user', Controllers.userControllers.getUser)
router.get('/user/:id', Controllers.userControllers.getUserById)
router.post('/user', Controllers.userControllers.createUser)
router.put('/user/:id', Controllers.userControllers.updateUser)
router.delete('/user/:id', Controllers.userControllers.deleteUser)

//RUTAS MODELO COSTO/GASTO
router.get('/cost', Controllers.costControllers.getCost)
router.get('/cost/:id', Controllers.costControllers.getCostById)
router.get('/cost', Controllers.costControllers.createCost)
router.get('/cost', Controllers.costControllers.updateCost)
router.get('/cost', Controllers.costControllers.deleteCost)

//RUTAS MODELO SERVICIO
router.get('/productService', Controllers.productServiceControllers.getProductService)
router.get('/productService/:id', Controllers.productServiceControllers.getProductServiceById)
router.get('/productService', Controllers.productServiceControllers.createProductService)
router.get('/productService', Controllers.productServiceControllers.updateProductService)
router.get('/productService', Controllers.productServiceControllers.deleteProductService)



export default router