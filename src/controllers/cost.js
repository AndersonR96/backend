// import User from "../models/index.js"
import Models from "../models/index.js"
const Cost = {}


costControllers.get = async(req, res) => {
    await Models.Cost.findAll()
    .then(response => {
        if (response.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'No existe gasto'
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

costControllers.getById = async (req, res) => {
    await Models.Cost.findByPk(req.params.id, {
        attributes:[
            'name',
        ]
    })
    .then(response => {
        if(response){
            return res.status(200).json(response)
        } else {
            return res.status(404).json({
                success: false,
                message: 'No se encontro ningun gasto'
            })
        }
    }).catch( err => {
        res.status(400).json({
            success: false,
            error: err,
        })
    })
}

costControllers.create = async (req, res) => {
    const response = await Models.Cost.create(req.body)
    .catch(err => {
        res.status(400).json({
            success: false,
            error: err,
        })
    })
    res.status(200).json(response)
}

costControllers.update = async (req, res) => {
    const response = await Models.Cost.update(req.body, {
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
            message: ' Costo/gasto actualizado'
        })
    } else {
        return res.status(404).json({
            success: true,
            message: 'Esto costo/gasto no se pudo actualizar'
        })
    }
}

costControllers.delete = async (req, res) => {
    const response = await Models.Cost.destroy({
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
            message: 'Costo/gasto eliminado'
        })
    } else {
        return res.status(404).json({
            success: false,
            message: 'Costo/gasto no se pudo eliminar'
        })
    }
}

export default Cost