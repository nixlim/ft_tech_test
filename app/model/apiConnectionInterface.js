const http = require('http')

class ApiConnectionInterface {
  constructor (searchQuery) {
    this.searchQuery = searchQuery
    this.connectionConfig = {
      hostname: 'api.ft.com',
      path: '/content/search/v1?apiKey=59cbaf20e3e06d3565778e7bb6d633b231e14a829d3c757511c91e5f',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  }

  sendRequestToApi () {

  }
}

module.exports = ApiConnectionInterface