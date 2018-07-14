const ApiQueryManager = require('../model/apiQueryManager')
jest.mock('../model/apiConnectionInterface')

describe('ApiQueryManager', () => {
  let MockApiConnector = require('../model/apiConnectionInterface')
  MockApiConnector.mockImplementation(() => {
    return mockConnection
  })
  let mockConnection = {
    sendRequestToApi: jest.fn()
  }

  let searchTerm = 'brexit'
  let queryJSONString = '{\"queryString\":\"brexit\",\"queryContext\":{\"curations\":[\"ARTICLES\"]},\"resultContext\":{\"aspects\":[\"title\",\"location\"],\"maxResults\":\"20\"}}'

  let apiQueryManager = new ApiQueryManager(searchTerm)
  apiQueryManager.ApiConnector = MockApiConnector

  describe('#buildQuery', () => {
    let buildQuerySpy = jest.spyOn(apiQueryManager, 'buildQuery')
    let sendRequestSpy = jest.spyOn(mockConnection, 'sendRequestToApi')
    apiQueryManager.buildQuery()

    it('should respond to #buildQuery', () => {
      expect(buildQuerySpy).toHaveBeenCalledTimes(1)
    })

    it('should prepare JSON string', () => {
      expect(apiQueryManager.query).toEqual(queryJSONString)
    })

    it('should call .sendRequestToApi', () => {
      expect(sendRequestSpy).toHaveBeenCalledTimes(1)
    })
  })
})
