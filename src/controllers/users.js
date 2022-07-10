const { User } = require('../models/index')

const getUsers = async(req, res) => {
     await User.findAll()
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
    await User.findByPk(req.params.id, {
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
                message: 'No se encontro el usuario'
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
    const response = await User.create(req.body)
    .catch(err => {
        res.status(400).json({
            success: false,
            error: err,
        })
    })
    res.status(200).json(response)
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
}