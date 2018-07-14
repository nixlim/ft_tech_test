const express = require('express')
const session = require('express-session')
const ApiQueryManager = require('../model/apiQueryManager')
const router = express.Router()

router.get('/', (request, response) => {
  response.render('index', {
    title: 'FT Headlines Search'
  })
})

router.get('/searchresults', (request, response) => {
  let queryBuilder = new ApiQueryManager(session.result, response, render)
  queryBuilder.buildQuery()
})

router.post('/search', (request, response) => {
  session.result =  request.body.searchTerm
  response.redirect('/searchresults')
})

let render = (response, data) => {
  response.render('searchresults', {
    title: 'FT Headlines Search',
    data: data
  })
}

module.exports = router