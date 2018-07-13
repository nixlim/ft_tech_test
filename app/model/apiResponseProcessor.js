class ApiResponseProcessor {
  constructor () {
    this.apiResponse = ''
  }

  processResponse (apiConnection) {
    apiConnection.on('data', (dataChunk) => {
      this.apiResponse += dataChunk
    })

  }

}

module.exports = ApiResponseProcessor