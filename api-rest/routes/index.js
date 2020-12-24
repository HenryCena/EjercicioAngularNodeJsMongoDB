'use strict'

const express = require('express')
const UsuarioCtrl = require('../controllers/usuario')
const api = express.Router()

api.get('/usuario', UsuarioCtrl.getUsuarios) //obtener todos los usuarios
api.get('/usuario/:usuarioId', UsuarioCtrl.getUsuario) //obtener un usuario en especifico
api.post('/usuario', UsuarioCtrl.saveUsuario) //guardar un usuario
api.put('/usuario/:usuarioId', UsuarioCtrl.updateUsuario) //actualizar un usuario
api.delete('/usuario/:usuarioId', UsuarioCtrl.deleteUsuario) //eliminar un usuario

module.exports = api