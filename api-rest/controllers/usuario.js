'use strict'

const Usuario = require('../models/usuario')

function getUsuario(req, es) {
    let usuarioId = req.params.usuarioId

    Usuario.findById(usuarioId, (err, usuario) => {
        if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
        if (!usuario) return res.status(404).send({message: `El usuario no existe`})

        res.status(200).send({ usuario })
    })
}

function getUsuarios (req, res) {
    Usuario.find({}, (err, usuarios) => {
        if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
        if (!usuarios) return res.status(404).send({message: `No existen usuarios`})

        res.status(200).send({ usuarios })
    })
}

function saveUsuario (req, res) {
    console.log('POST /api/usuario')
    console.log(req.body)

    let usuario = new Usuario()
    usuario.nombre = req.body.nombre
    usuario.apellido = req.body.apellido
    usuario.correo = req.body.correo
    usuario.telefono = req.body.telefono

    usuario.save((err, usuarioGuardado) => {
        if (err) res.status(500).send({ message: `Error al guardar en la base de datos: ${err}`})

        res.status(200).send({usuario: usuarioGuardado})
    })
}

function updateUsuario (req, res) {
    let usuarioId = req.params.usuarioId
    let update = req.body

    Usuario.findByIdAndUpdate(usuarioId, update, (err, usuarioActualizado) => {
        if (err) res.status(500).send({ message: `Error al actualizar el usuario: ${err}`})

        res.status(200).send({ usuario: usuarioActualizado})
    })
}

function deleteUsuario (req, res) {
    let usuarioId = req.params.usuarioId

    Usuario.findById(usuarioId, (err, usuario) => {
        if (err) res.status(500).send({ message: `Error al borrar el usuario: ${err}`})

        usuario.remove(err => {
            if (err) res.status(500).send({ message: `Error al borrar el usuario: ${err}`})
            res.status(200).send({message: 'El usuario ha sido eliminado'})
        })
    })
}

module.exports = {
    getUsuario,
    getUsuarios,
    saveUsuario,
    updateUsuario,
    deleteUsuario
}