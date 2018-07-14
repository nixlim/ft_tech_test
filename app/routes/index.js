const express = require('express')
const router = express.Router()

router.get('/', (request, response) => {
  response.render('index', {
    title: 'FT Headlines Search'
  })
})

module.exports = router