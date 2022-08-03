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
router.get('/customer', Controllers.Customer.getCustomer)
router.get('/customer/:id', Controllers.Customer.getCustomerById)
router.post('/customer', Controllers.Customer.createCustomer)

//RUTAS MODELO PROVIDER (PROVEEDOR)
router.get('/provider', Controllers.Provider.getProvider)
router.get('/provider/:id', Controllers.Provider.getProviderById)
router.post('/provider', Controllers.Provider.createProvider)

//RUTAS MODELO USER
router.get('/user', Controllers.User.getUser)
router.get('/user/:id', Controllers.User.getUserById)
router.post('/user', Controllers.User.createUser)
router.put('/user/:id', Controllers.User.updateUser)
router.delete('/user/:id', Controllers.User.deleteUser)

//RUTAS MODELO COSTO/GASTO
router.get('/cost', Controllers.Cost.getCost)
router.get('/cost/:id', Controllers.Cost.getCostById)
router.post('/cost', Controllers.Cost.createCost)
router.put('/cost', Controllers.Cost.updateCost)
router.delete('/cost', Controllers.Cost.deleteCost)

//RUTAS MODELO SERVICIO
router.get('/productService', Controllers.productServiceControllers.getProductService)
router.get('/productService/:id', Controllers.productServiceControllers.getProductServiceById)
router.get('/productService', Controllers.productServiceControllers.createProductService)
router.get('/productService', Controllers.productServiceControllers.updateProductService)
router.get('/productService', Controllers.productServiceControllers.deleteProductService)



export default router