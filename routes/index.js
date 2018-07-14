const express = require('express')
const session = require('express-session')
const ApiQueryManager = require('../model/apiQueryManager')
const router = express.Router()

router.get('/', (request, response) => {
  session.offSet = undefined
  response.render('index', {
    title: 'FT Headlines Search'
  })
})

router.get('/searchresults', (request, response) => {
  let queryBuilder = new ApiQueryManager(session.searchTerm, session.offSet, response, renderSearchResults)
  queryBuilder.buildQuery()
})

router.post('/search', (request, response) => {
  session.searchTerm =  request.body.searchTerm
  session.offSet = undefined
  response.redirect('/searchresults')
})

router.post('/searchResultsPagination', (request, response) => {
  session.searchTerm =  request.body.searchTerm
  if (session.offSet === undefined) {
    session.offSet = request.body.nextTwentyResults
  } else {
    let offSetInSession = parseInt(session.offSet)
    let offSetFromForm = parseInt(request.body.nextTwentyResults)
    let newOffSetValue = offSetInSession + offSetFromForm
    session.offSet = newOffSetValue.toString()
  }

  response.redirect('/searchresults')
})

let renderSearchResults = (response, data) => {
  response.render('searchresults', {
    title: 'FT Headlines Search',
    data: data,
    resultCount: parseInt(session.offSet) || 0
  })
}

module.exports = router