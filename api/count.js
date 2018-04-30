const request = require('request')
const red = '\x1b[31m%s\x1b[0m'
const Table = require('cli-table2')

/**
* Using npm api to get number of downloads for last-day
* @param {String} packageName
*/

function countLastDay (packageName) {
  const url = `https://api.npmjs.org/downloads/point/last-day/${packageName}`
  return new Promise((resolve, reject) => {
    resolve(request(url, (error, res, body, next) => {
      if (error) {
        return next
      }
      const data = JSON.parse(body)
      if (data.error) {
        console.log(red, data.error)
      } else {
        return console.log(`\x1b[35m ${packageName} \x1b[0m got \x1b[36m ${data.downloads} \x1b[0m downloads on \x1b[36m ${data.end} \x1b[0m`)
      }
    }))
  })
}

/**
* Using npm api to get number of downloads for last-week
* @param {String} packageName
*/

function countLastWeek (packageName) {
  const table = new Table({
    head: ['Day', 'Downloads'],
    colWidths: [30, 20]
  })
  const url = `https://api.npmjs.org/downloads/range/last-week/${packageName}`
  request(url, (error, res, body, next) => {
    if (error) {
      return next(error)
    }
    const data = JSON.parse(body)
    if (data.error) {
      console.log(red, data.error)
    } else {
      const downloads = data.downloads
      downloads.forEach(result => {
        var final = [`${result.day}`, `${result.downloads}`]
        table.push(final)
      })
      console.log(table.toString())
    }
  })
}

/**
* Using npm api to get number of downloads for last-month
* @param {String} packageName
*/

function countLastMonth (packageName) {
  const table = new Table({
    head: ['Day', 'Downloads'],
    colWidths: [30, 20]
  })
  const url = `https://api.npmjs.org/downloads/range/last-month/${packageName}`
  request(url, (error, res, body, next) => {
    if (error) {
      return next(error)
    }
    const data = JSON.parse(body)
    if (data.error) {
      console.log(red, data.error)
    } else {
      const downloads = data.downloads
      downloads.forEach(result => {
        var final = [`${result.day}`, `${result.downloads}`]
        table.push(final)
      })
      console.log(table.toString())
    }
  })
}

/**
* Using npm api to get number of downloads for last-day
* @param {String} packageName
*/

function countDay (date, packageName) {
  const url = `https://api.npmjs.org/downloads/point/${date}/${packageName}`
  request(url, (error, res, body, next) => {
    if (error) {
      return next(error)
    }
    const data = JSON.parse(body)
    if (data.error) {
      console.log(red, data.error)
    } else {
      console.log(`\x1b[35m ${packageName} \x1b[0m got \x1b[36m ${data.downloads} \x1b[0m downloads on \x1b[36m ${data.end} \x1b[0m`)
    }
  })
}

module.exports = {
  countLastDay: countLastDay,
  countLastWeek: countLastWeek,
  countLastMonth: countLastMonth,
  countDay: countDay
}
