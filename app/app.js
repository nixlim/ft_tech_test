const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const indexRoute = require('./routes/index')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', indexRoute)

module.exports = app