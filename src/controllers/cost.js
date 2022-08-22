// import User from "../models/index.js"
import Models from "../models/index.js"
const Cost = {}


Cost.get = async(req, res) => {
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

Cost.getById = async (req, res) => {
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

Cost.create = async (req, res) => {

    let data = req.body

    /////Calculo (IVA)
    const impuesto = await Models.auxiliaryTables.Taxes.findOne({where:{ id: data.IVA_FEE}})
    data.IVA_Amount = impuesto.FEE * data.price

   /////Calculo otro impuesto 1
    const impuesto1 = await Models.auxiliaryTables.Taxes.findOne({where:{ id: data.tax1_FEE}})
    data.tax1_Amount = impuesto1.FEE * data.price

    /////Calculo otro impuesto 2
    const impuesto2 = await Models.auxiliaryTables.Taxes.findOne({where:{ id: data.tax2_FEE}})
    data.tax2_Amount= impuesto2.FEE * data.price

    const response = await Models.Cost.create(data)
    .catch(err => {
        res.status(400).json({
            success: false,
            error: err,
        })
    })

    // const iva_fee = await Models.auxiliaryTables.Taxes.findAll()
    // const cost_to_fee = await Models.Cost.findByPk(req.body.id)
    // const iva_assignation = await cost_to_fee.addIva(iva_fee)

    res.status(200).json(response)
}

Cost.update = async (req, res) => {
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

Cost.delete = async (req, res) => {
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