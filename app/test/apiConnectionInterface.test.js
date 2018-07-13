const ApiConnectionInterface = require('../model/apiConnectionInterface')
jest.mock('http')

describe('ApiConnectionInterface', () => {
  let searchQuery = 'some json data'
  let apiConnectionInterface = new ApiConnectionInterface(searchQuery)
  let http = require('http')

  describe('#sendRequesttoApi', () => {
    let mockConnection = {
      on: jest.fn(),
      write: jest.fn(),
      end: jest.fn()
    }

    http.request.mockImplementation(() => {
      return mockConnection
    })

    let sendrequestSpy = jest.spyOn(apiConnectionInterface, 'sendRequestToApi')
    let httpRequestSpy = jest.spyOn(http, 'request')
    let connectionOnSpy = jest.spyOn(mockConnection, 'on')
    let connectionWriteSpy = jest.spyOn(mockConnection, 'write')
    let connectionEndSpy = jest.spyOn(mockConnection, 'end')

    apiConnectionInterface.sendRequestToApi()

    it('should respond to #sendRequestToApi', () => {
      expect(sendrequestSpy).toHaveBeenCalledTimes(1)
    })

    it('should call http.request', () => {
      expect(httpRequestSpy).toHaveBeenCalledTimes(1)
      expect(httpRequestSpy).toHaveBeenCalledWith(apiConnectionInterface.connectionConfig, expect.any(Function))
    })

    it('should call write on http.request connection', () => {
      expect(connectionWriteSpy).toHaveBeenCalledTimes(1)
    })

    it('should call on', () => {
      expect(connectionOnSpy).toHaveBeenCalledTimes(1)
      expect(connectionOnSpy).toHaveBeenCalledWith('error', expect.any(Function))
    })

    it('should call write with searchquery', () => {
      expect(connectionWriteSpy).toHaveBeenCalledWith(searchQuery)
    })

    it('should call end', () => {
      expect(connectionEndSpy).toHaveBeenCalledTimes(1)
    })
  })
})
