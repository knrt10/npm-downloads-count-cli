const api = require('../api/count')

describe('get count', () => {
  it('check for last day', () => {
    const packageName = 'cloudinary-cli-tool'
    const countLastDay = api.countLastDay(packageName)
    Promise.all([countLastDay]).then(val => {
      val[0].callback(packageName)
    })
  })
})
