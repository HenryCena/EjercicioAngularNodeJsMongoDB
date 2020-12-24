'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UsuarioSchema = Schema({
    nombre: String,
    apellido: String,
    correo: String,
    telefono: { type: Number, default: 0 }
})

module.exports = mongoose.model('Usuario', UsuarioSchema)
