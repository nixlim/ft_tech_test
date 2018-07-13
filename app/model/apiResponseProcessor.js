class ApiResponseProcessor {
  constructor () {
    this.apiResponse = ''
  }

  processResponse (apiConnection) {
    apiConnection.on('data', (dataChunk) => {
      this._collateResponseChunks(dataChunk)
    })

    apiConnection.on('end', () => {
      this._parseResponseJSON()
    })
  }

  _collateResponseChunks (dataChunk) {
    this.apiResponse += dataChunk
  }

  _parseResponseJSON () {
    return JSON.parse(this.apiResponse)
  }

}

module.exports = ApiResponseProcessor