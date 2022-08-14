import Models from "../models/index.js"

const Purchase = {}

Purchase.get = async(req, res) => {
    await Models.Purchase.findAll()
   .then(response => {
       if (response.length === 0) {
           return res.status(404).json({
               success: false,
               message: 'No hay ventas'
           })
       } else {
           return res.status(200).json(response)
       }
   }).catch( err => {
       return res.status(400).json({
           success: false,
           error: err,
       })
   })
}

Purchase.create = async (req, res) => {
    const response = await Models.Purchase.create(req.body)
    .catch(err => {
        res.status(400).json({
            success: false,
            error: err,
        })
    })
    res.status(200).json(response)
}

export default Purchase
