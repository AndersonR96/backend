import express, { json, urlencoded } from 'express'
import router from './routes/index.js'

const app = express()

//Middlewares
app.use(json())
app.use(urlencoded({extended: false}))

app.use('/api', router)


const PORT = process.env.PORT || 4000

app.listen(PORT, function() {
    console.log('Backend running at port: ', PORT)
})