const express = require("express")
const ciudadController = require('../controllers/ciudades')
const router = express.Router()

router.post('/agregarCiudad', ciudadController.postAgregarCiudad)
router.get('/obtenerCiudad', ciudadController.getObtenerCiudad)
router.post('/borrarCiudad', ciudadController.postBorrarCiudad)
router.post('/actualizarCiudad', ciudadController.postActualizarCiudad)
router.get('/obtenerCiudadporPais', ciudadController.getObtenerCiudadporPais)


module.exports = router