import express, { json, urlencoded } from 'express'
import router from './routes/index.js'

const app = express()

//Middlewares
app.use(json())
app.use(urlencoded({extended: false}))

app.use(router)

const PORT = process.env.PORT || 4000

app.listen(PORT, function() {
    console.log('Backendo corriendo en el puerto: ', PORT)
})