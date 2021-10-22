const path = require('path')
const Ciudad = require('../utils/database').models.ciudades

exports.postAgregarCiudad = (req, res) => {
    console.log(req.body)
    Ciudad.create(req.body)
        .then(con => {
            console.log("Registro Existoso")
            res.json({ estado: "aceptado" })
        })
        .catch(err => {
            console.log("ERROR, EL ELEMENTO YA EXISTE - INCREMENTANDO EL CONTADOR")
            Ciudad.findAll({
                    where: {
                        ciudad: req.body.ciudad
                    }
                })
                .then(conn => {
                    Ciudad.update({
                            contador: conn[0].dataValues.contador + 1,
                        }, {
                            where: {
                                ciudad: req.body.ciudad
                            }
                        })
                        .then(() => {
                            console.log("Consola actualizado")
                            res.json({ estado: "aceptado" })
                        })
                        .catch(err => {
                            console.log(err)
                            res.json({ estado: "error" })
                        })
                })
                .catch(err => {
                    console.log(err)
                    res.json({ estado: "error" })
                })

        })
}

/*{
    "id":1,
    "ciudad":"México",
    "pais":"México",
    "descripcion":"Ángel de la independencia",
    "contador":1
}*/

exports.getObtenerCiudad = (req, res) => {
    Ciudad.findAll()
        .then(Ciudad => {
            console.log(Ciudad)
            res.json(Ciudad)
        })
        .catch(err => console.log(err))
}

exports.postBorrarCiudad = (req, res) => {
    console.log(req.body)
    Ciudad.destroy({
            where: {
                ciudad: req.body.ciudad
            }
        })
        .then(() => {
            console.log("Consola eliminado")
            res.json({ estado: "aceptado" })
        })
        .catch(err => {
            console.log(err)
            res.json({ estado: "error" })
        })
}

exports.postActualizarCiudad = (req, res) => {
    console.log(req.body)
    Ciudad.update({
            pais: req.body.pais,
            descripcion: req.body.descripcion
        }, {
            where: {
                ciudad: req.body.ciudad
            }
        })
        .then(() => {
            console.log("Consola actualizado")
            res.json({ estado: "aceptado" })
        })
        .catch(err => {
            console.log(err)
            res.json({ estado: "error" })
        })
}

exports.getObtenerCiudadporPais = (req, res) => {
    Ciudad.findAll({
            where: {
                pais: req.body.pais
            }
        })
        .then(Ciudad => {
            console.log(Ciudad)
            res.json(Ciudad)
        })
        .catch(err => console.log(err))
}