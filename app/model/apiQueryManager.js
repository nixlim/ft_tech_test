const ApiConnectionInterface = require('../model/apiConnectionInterface')
const ApiResponseProcessor = require('../model/apiResponseProcessor')

class ApiQueryManager {
  constructor (searchTerm) {
    this.searchTerm = searchTerm
    this.query = null
    this.apiConnector = ApiConnectionInterface
    this.responseProcessor = ApiResponseProcessor
  }

  buildQuery () {

  }
}

module.exports = ApiQueryManager
