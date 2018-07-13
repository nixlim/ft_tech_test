class ApiResponseProcessor {
  constructor () {
    this.apiResponse = ''
  }

  processResponse (apiConnection) {
    apiConnection.on('data', (dataChunk) => {
      this.apiResponse += dataChunk
    })

    apiConnection.on('end', () => {
      return JSON.parse(this.apiResponse)
    })
  }

}

module.exports = ApiResponseProcessor