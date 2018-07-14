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
  let queryBuilder = new ApiQueryManager(session.searchTerm, response, renderSearchResults)
  queryBuilder.buildQuery()
})

router.post('/search', (request, response) => {
  session.searchTerm =  request.body.searchTerm
  response.redirect('/searchresults')
})

let renderSearchResults = (response, data) => {
  response.render('searchresults', {
    title: 'FT Headlines Search',
    data: data
  })
}

module.exports = router