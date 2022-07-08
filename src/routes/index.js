const { Router } = require('express')
const router = Router()
require('dotenv').config()

router.get('/', async function(req, res) {
    res.send(`Corriendo en el entorno <h3>${process.env.ENTORNO}</h3>`)
})

module.exports = router