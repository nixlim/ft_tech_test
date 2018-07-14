const ApiConnectionInterface = require('../model/apiConnectionInterface')
const ApiResponseProcessor = require('../model/apiResponseProcessor')

class ApiQueryManager {
  constructor (searchTerm, offSet, response, render) {
    this.searchTerm = searchTerm
    this.query = null
    this.ApiConnector = ApiConnectionInterface
    this.ResponseProcessor = ApiResponseProcessor
    this.routerCallback = response
    this.renderViewFunction = render
    this.offSet = offSet || 0
  }

  buildQuery () {
    this.query = JSON.stringify({
      'queryString': `${this.searchTerm}`,
      'queryContext': {
        'curations': ['ARTICLES']
      },
      'resultContext': {
        'aspects': [ 'title', 'location' ],
        'maxResults': '20',
        'offset': `${this.offSet}`
      }
    })
    this._makeApiCall()
  }

  _makeApiCall () {
    let connectToApi = new this.ApiConnector(this.query, new this.ResponseProcessor())
    connectToApi.sendRequestToApi(this.routerCallback, this.renderViewFunction)
  }
}

module.exports = ApiQueryManager
