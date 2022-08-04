// import Provider from "../models/index.js"
import Models from "../models/index.js"
const Provider = {}

providerControllers.get = async(req, res) => {
     await Models.Provider.findAll()
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

providerControllers.getById = async (req, res) => {
    await Models.Provider.findByPk(req.params.id, {
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

providerControllers.create = async (req, res) => {
    const response = await Models.Provider.create(req.body)
    .catch(err => {
        res.status(400).json({
            success: false,
            error: err,
        })
    })
    res.status(200).json(response)
}


providerControllers.update = async (req, res) => {
    const response = await Models.Provider.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .catch(err => {
        res.status(400).json({
            success: false,
            error: err,
        })
    })

    if (response != 0) {
        return res.status(200).json({
            success: true,
            message: 'Updated proveedor'
        })
    } else {
        return res.status(404).json({
            success: true,
            message: 'proveedor no updated'
        })
    }
}

providerControllers.delete = async (req, res) => {
    const response = await Models.Provider.destroy({
        where: {
            id: req.params.id
        }
    })
    .catch(err => {
        res.status(400).json({
            success: false,
            error: err
        })
    })

    if (response) {
        return res.status(200).json({
            success: true,
            message: 'Deleted provider'
        })
    } else {
        return res.status(404).json({
            success: false,
            message: 'provider no deleted'
        })
    }
}

export default providerControllers
