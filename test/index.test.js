const api = require('../api/count')

describe('get count', () => {
  it('check for last day', () => {
    const packageName = 'cloudinary-cli-tool'
    return api.countLastDay(packageName).then(data => {
      expect(data.callback).toBeDefined()
    })
  })

  it('check for last week', () => {
    const packageName = 'cloudinary-cli-tool'
    return api.countLastWeek(packageName).then(data => {
      expect(data.callback).toBeDefined()
    })
  })

  it('check for last month', () => {
    const packageName = 'cloudinary-cli-tool'
    return api.countLastMonth(packageName).then(data => {
      expect(data.callback).toBeDefined()
    })
  })

  it('check for specific date', () => {
    const packageName = 'cloudinary-cli-tool'
    const date = '2018-12-12'
    return api.countDay(date, packageName).then(data => {
      expect(data.callback).toBeDefined()
    })
  })
})
