const { Provider } = require('../models/index')

const getProvider = async(req, res) => {
     await Provider.findAll()
    .then(response => {
        if (response.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'No hay proveedor'
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

const getProviderById = async (req, res) => {
    await Provider.findByPk(req.params.id, {
        attributes:[
            'businnes_name',
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
                message: 'No se encontro el proveedor'
            })
        }
    }).catch( err => {
        res.status(400).json({
            success: false,
            error: err,
        })
    })
}

const createProvider = async (req, res) => {
    const response = await Provider.create(req.body)
    .catch(err => {
        res.status(400).json({
            success: false,
            error: err,
        })
    })
    res.status(200).json(response)
}

module.exports = {
    getProvider,
    getProviderById,
    createProvider,
}