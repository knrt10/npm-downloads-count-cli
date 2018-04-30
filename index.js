#!/usr/bin/env node

/**
 * Module dependencies
*/

const program = require('commander')
const count = require('./api/count')

/**
* Setting command to list files
* @param {String} options
*/

program
  .command('package <file>')
  .alias('p')
  .description('List number of downloads of your package')
  .option('-d, --lastDay', 'get last day counts')
  .option('-w, --lastWeek', 'get last week counts')
  .option('-m, --lastMonth', 'get last month counts')
  .option('-D, --date <date>', 'get counts for specific date, <date> format = YYYY-MM-DD')
  .action((file, options) => {
    if (options.lastDay === true) {
      count.countLastDay(file)
    } else if (options.lastWeek === true) {
      count.countLastWeek(file)
    } else if (options.lastMonth === true) {
      count.countLastMonth(file)
    } else if (options.date) {
      count.countDay(options.date, file)
    }
  })

program.parse(process.argv)
