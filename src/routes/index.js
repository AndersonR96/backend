const { Router } = require('express')
const router = Router()
require('dotenv').config()

router.get('/', async function(req, res) {
    res.json({
        APP: process.env.APP, 
        ENTORNO: process.env.ENTORNO, 
        PUERTO: process.env.PORT ? process.env.PORT : 4000
    })
})

module.exports = router