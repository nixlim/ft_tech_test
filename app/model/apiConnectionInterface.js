const http = require('http')
const ApiResponseProcessor = require('../model/apiResponseProcessor')

class ApiConnectionInterface {
  constructor (searchQuery) {
    this.searchQuery = searchQuery
    this.apiResponseProcessor = new ApiResponseProcessor()
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
    let APICall = http.request(this.connectionConfig, (openAPIConnection) => {
      this.apiResponseProcessor.processResponse(openAPIConnection)
    })
    this._writeToApi(APICall)
  }

  _writeToApi (APICall) {
    APICall.on('error', (error) => {
      console.log('REQUEST ERROR: ' + error.message)
    })
    APICall.write(this.searchQuery)
    APICall.end()
  }
}

module.exports = ApiConnectionInterface