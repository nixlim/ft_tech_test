const ApiQueryManager = require('../model/apiQueryManager')

describe('ApiQueryManager', () => {
  let apiQueryManager = new ApiQueryManager()

  describe('#buildQuery', () => {
    let buildQuerySpy = jest.spyOn(apiQueryManager, 'buildQuery')
    apiQueryManager.buildQuery()

    it('should respond to #buildQuery', () => {
      expect(buildQuerySpy).toHaveBeenCalledTimes(1)
    })
  })
})
