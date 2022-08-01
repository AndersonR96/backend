import Models from "../models/index.js"
const productServiceControllers = {}

productServiceControllers.get= async(req, res) => {
    await Models.ProductService.findAll()
    .then(response => {
        if (response.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'No existen servicios'
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

productServiceControllers.getById = async (req, res) => {
    await Models.ProductService.findByPk(req.params.id, {
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
                message: 'No se encontro ningun servicio'
            })
        }
    }).catch( err => {
        res.status(400).json({
            success: false,
            error: err,
        })
    })
}

productServiceControllers.create = async (req, res) => {
    const response = await Models.ProductService.create(req.body)
    .catch(err => {
        res.status(400).json({
            success: false,
            error: err,
        })
    })
    res.status(200).json(response)
}

productServiceControllers.update = async (req, res) => {
    const response = await Models.ProductService.update(req.body, {
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
            message: ' Servicio actualizado'
        })
    } else {
        return res.status(404).json({
            success: true,
            message: 'Este Servicio no se pudo actualizar'
        })
    }
}

productServiceControllers.delete = async (req, res) => {
    const response = await Models.ProductService.destroy({
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
            message: 'Servicio eliminado'
        })
    } else {
        return res.status(404).json({
            success: false,
            message: 'Servicio no se pudo eliminar'
        })
    }
}

export default productServiceControllers