const ApiConnectionInterface = require('../model/apiConnectionInterface')
const ApiResponseProcessor = require('../model/apiResponseProcessor')

class ApiQueryManager {
  constructor (searchTerm) {
    this.searchTerm = searchTerm
    this.query = null
    this.ApiConnector = ApiConnectionInterface
    this.ResponseProcessor = ApiResponseProcessor
  }

  buildQuery () {
    this.query = JSON.stringify({
      'queryString': `${this.searchTerm}`,
      'queryContext': {
        'curations': ['ARTICLES']
      },
      'resultContext': {
        'aspects': [ 'title' ],
        'maxResults': '10'
      }
    })
    let connectToApi = new this.ApiConnector(this.query, new this.ResponseProcessor())
    connectToApi.sendRequestToApi()
  }
}

module.exports = ApiQueryManager
