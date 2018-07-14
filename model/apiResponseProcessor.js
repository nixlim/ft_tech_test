class ApiResponseProcessor {
  constructor () {
    this.apiResponse = ''
  }

  processResponse (apiConnection, routerCallback, renderFunction) {
    apiConnection.on('data', (dataChunk) => {
      this._collateResponseChunks(dataChunk)
    })

    apiConnection.on('end', () => {
      this._parseResponseJSON(routerCallback, renderFunction)
    })
  }

  _collateResponseChunks (dataChunk) {
    this.apiResponse += dataChunk
  }

  _parseResponseJSON (routerCallback, renderFunction) {
    console.log(this.apiResponse)
    renderFunction(routerCallback, JSON.parse(this.apiResponse))
  }

}

module.exports = ApiResponseProcessor