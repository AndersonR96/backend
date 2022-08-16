import Models from "../models/index.js"
const Item = {}

Item.get = async(req, res) => {
     await Models.Item.findAll()
    .then(response => {
        if (response.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'No hay items'
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

Item.getById = async (req, res) => {
    await Models.Item.findByPk(req.params.id, {
        attributes:[
            'name',
            'type',
        ]
    })
    .then(response => {
        if(response){
            return res.status(200).json(response)
        } else {
            return res.status(404).json({
                success: false,
                message: 'No se encontro el item'
            })
        }
    }).catch( err => {
        res.status(400).json({
            success: false,
            error: err,
        })
    })
}

Item.create = async (req, res) => {
    const response = await Models.Item.create(req.body)
    .catch(err => {
        res.status(400).json({
            success: false,
            error: err,
        })
    })
    res.status(200).json(response)
}

Item.update = async (req, res) => {
    const response = await Models.Item.update(req.body, {
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

    if (response !=0) {
        return res.status(200).json({
            success: true,
            message: 'Item actualizado'
        })
    } else {
        return res.status(404).json({
            success: true,
            message: 'Item no actualizado'
        })
    }
}

Item.delete = async (req, res) => {
    const response = await Models.Item.destroy({
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
            message: 'Item eliminado'
        })
    } else {
        return res.status(404).json({
            success: false,
            message: 'Item no eliminado'
        })
    }
}



export default Item
