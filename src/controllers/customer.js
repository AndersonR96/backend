import Models from "../models/index.js"

const getCustomer = async(req, res) => {
     await Models.Customer.findAll()
    .then(response => {
        if (response.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'No hay clietes'
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

const getCustomerById = async (req, res) => {
    await Models.Customer.findByPk(req.params.id, {
        attributes:[
            'name',
            'last_name',
        ]
    })
    .then(response => {
        if(response){
            return res.status(200).json(response)
        } else {
            return res.status(404).json({
                success: false,
                message: 'No se encontro el cliente'
            })
        }
    }).catch( err => {
        res.status(400).json({
            success: false,
            error: err,
        })
    })
}

const createCustomer = async (req, res) => {
    const response = await Models.Customer.create(req.body)
    .catch(err => {
        res.status(400).json({
            success: false,
            error: err,
        })
    })
    res.status(200).json(response)
}

export {
    getCustomer,
    getCustomerById,
    createCustomer,
}