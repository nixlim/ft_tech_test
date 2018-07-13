const ApiResponseProcessor = require('../model/apiResponseProcessor')

describe('ApiResponseProcessor', () => {
  let mockConnection = {
    on: jest.fn()
  }
  let connectionOnSpy = jest.spyOn(mockConnection, 'on')
  let apiResponseProcessor = new ApiResponseProcessor()

  describe('#processResponse', () => {
    let processResponseSpy = jest.spyOn(apiResponseProcessor, 'processResponse')
    beforeEach(() => {
      apiResponseProcessor.processResponse(mockConnection)
    })

    it('should respond to #processResponse', () => {
      expect(processResponseSpy).toHaveBeenCalledTimes(1)
    })

    it('should be called with apiConnection as an argument', () => {
      expect(processResponseSpy).toHaveBeenCalledWith(mockConnection)
    })

    it('should call .on on ("data")', () => {
      expect(connectionOnSpy).toHaveBeenCalledWith('data', expect.any(Function))
    })

    it('should call .on on ("end")', () => {
      expect(connectionOnSpy).toHaveBeenCalledWith('end', expect.any(Function))
    })
  })
})
