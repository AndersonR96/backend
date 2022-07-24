// import User from "../models/index.js"
import Models from "../models/index.js"

const getUser = async(req, res) => {
    await Models.User.findAll()
    .then(response => {
        if (response.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'No hay usuarios'
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

const getUserById = async (req, res) => {
    await Models.User.findByPk(req.params.id, {
        attributes:[
            'username',
            'name'
        ]
    })
    .then(response => {
        if(response){
            return res.status(200).json(response)
        } else {
            return res.status(404).json({
                success: false,
                message: 'No se encontro ningun usuario'
            })
        }
    }).catch( err => {
        res.status(400).json({
            success: false,
            error: err,
        })
    })
}

const createUser = async (req, res) => {
    const response = await Models.User.create(req.body)
    .catch(err => {
        res.status(400).json({
            success: false,
            error: err,
        })
    })
    res.status(200).json(response)
}

const updateUser = async (req, res) => {
    const response = await Models.User.update(req.body, {
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
            message: 'Updated user'
        })
    } else {
        return res.status(404).json({
            success: true,
            message: 'User no updated'
        })
    }
}

const deleteUser = async (req, res) => {
    const response = await Models.User.destroy({
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
            message: 'Deleted user'
        })
    } else {
        return res.status(404).json({
            success: false,
            message: 'User no deleted'
        })
    }
}

export {
    getUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}