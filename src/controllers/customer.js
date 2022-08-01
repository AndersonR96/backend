import Models from "../models/index.js"
const customerControllers = {}

customerControllers.get = async(req, res) => {
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

customerControllers.getById = async (req, res) => {
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

customerControllers.create = async (req, res) => {
    const response = await Models.Customer.create(req.body)
    .catch(err => {
        res.status(400).json({
            success: false,
            error: err,
        })
    })
    res.status(200).json(response)
}

customerControllers.update = async (req, res) => {
    const response = await Models.Customer.update(req.body, {
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
            message: 'Updated customer'
        })
    } else {
        return res.status(404).json({
            success: true,
            message: 'Customer no updated'
        })
    }
}

customerControllers.delete = async (req, res) => {
    const response = await Models.Customer.destroy({
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
            message: 'Deleted customer'
        })
    } else {
        return res.status(404).json({
            success: false,
            message: 'Customer no deleted'
        })
    }
}

export default customerControllers