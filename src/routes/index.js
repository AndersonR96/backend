const { Router } = require('express')
const router = Router()
require('dotenv').config()

router.get('/', async function(req, res) {
    // res.send(`Corriendo en el entorno <h3>${process.env.ENTORNO}</h3>`)
    res.json({APP: process.env.APP, ENTORNO: process.env.ENTORNO, Puerto: process.env.PORT ? process.env.PORT : 4000})
})

module.exports = router