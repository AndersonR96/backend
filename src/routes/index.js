const { Router } = require('express')
const router = Router()
require('dotenv').config()
const conection = require('../../database/conection')
// const models = require('../models/index')
const { getUsers, getUserById, createUser } = require('../controllers/users')

router.get('/', async function(req, res) {
    let status = '';
    try{
        conection.authenticate();
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

//RUTAS MODELO USER
router.get('/users', getUsers)
router.get('/users/:id', getUserById)
router.post('/users', createUser)




module.exports = router