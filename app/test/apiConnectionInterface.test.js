const ApiConnectionInterface = require('../model/apiConnectionInterface')

describe('ApiConnectionInterface', () => {
  let apiConnectionInterface = new ApiConnectionInterface()

  describe('#sendRequesttoApi', () => {
    let sendrequestSpy = jest.spyOn(apiConnectionInterface, 'sendRequestToApi')

    it('should respond to sendRequestToApi', () => {
      apiConnectionInterface.sendRequestToApi()
      expect(sendrequestSpy).toHaveBeenCalledTimes(1)
    })
  })

})