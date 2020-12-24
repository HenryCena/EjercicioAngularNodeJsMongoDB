'use strict'
//importaciones
const express = require('express') //importacion de express a una constante
const bodyParser = require('body-parser')
//creacion de servidor
const app = express()
const api = require('./routes')

//utilizacion bodyparser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/api', api)

module.exports = app