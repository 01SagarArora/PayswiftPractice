'use strict'
const path = require('path')
const os = require('os')
var winston = require('winston')
const fs = require('fs')
const packageJson = require('../../package.json')
const logFile = packageJson.name
var f1 = 'data';
var f2= 'yatra';
var f3 = 'logs';

// Create the log directory if it does not exist
if (!fs.existsSync(path.join(os.homedir(), f3, logFile))) {
  //fs.mkdirSync(path.join(os.homedir(), f3, logFile))
  var shell = require('shelljs')
  shell.mkdir('-p', path.join(os.homedir(), f3, logFile))
}

var logDir = path.join(os.homedir(), f3, logFile)
const now = new Date()
var logger = winston.createLogger({
    prettyPrint: true,
    format: winston.format.combine(
        winston.format.label({
            label: `Label`
        }),
        winston.format.timestamp({
        format: 'MMM-DD-YYYY HH:mm:ss'
    }),
        winston.format.printf(info => `${info.level}: ${info.label}: ${[info.timestamp]}: ${info.message}`),
    ),
    transports: [
    new (require('winston-daily-rotate-file'))({
        filename: `${logDir}/${logFile}.log`,
        timestamp: now,
        datePattern: 'YYYY-MM-DD',
        prepend: true,
        json: false,
        level: 'debug'
    }),

    new winston.transports.Console({
        level: 'debug',
        handleExceptions: true,
        json: false,
        colorize: true,
        timestamp: true
    })
    ],
    exitOnError: false
})

module.exports = logger
module.exports.stream = {
  write: function(message, encoding) {
    logger.info(message)
  }
}
