const express = require('express')
const app = express()

//Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(require('./routes/index'))

const PORT = process.env.PORT || 4000

app.listen(PORT, function() {
    console.log('Backendo corriendo en el puerto: ', PORT)
})