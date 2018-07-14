const createError = require('http-errors')
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

app.use((req, res, next) => {
  next(createError(404))
})

app.use((error, req, res, next) => {
  res.status(error.status || 500)
  res.render('error', {
    title: 'FT Headlines Search',
    error: error
  })
})

module.exports = app