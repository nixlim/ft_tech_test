const http = require('http')
require('dotenv').config()

class ApiConnectionInterface {
  constructor (searchQuery, responseProcessor) {
    this.searchQuery = searchQuery
    this.apiResponseProcessor = responseProcessor
    this.connectionConfig = {
      hostname: 'api.ft.com',
      path: `/content/search/v1?apiKey=${process.env.API_KEY}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  }

  sendRequestToApi (routerCallback, renderFunction) {
    let APICall = http.request(this.connectionConfig, (openAPIConnection) => {
      this.apiResponseProcessor.processResponse(openAPIConnection, routerCallback, renderFunction)
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