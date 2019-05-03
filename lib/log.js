const winston = require('winston')
const { format } = require('winston')

const ecmsLevels = {
  levels: {
    error: 0,
    warn: 1,
    debug: 2,
    info: 3,
    verbose: 4,
    silly: 5
  },
  colors: {
    error: 'red',
    warn: 'yellow',
    debug: 'green',
    info: 'green',
    verbose: 'green',
    silly: 'green'
  }
}

const logger = winston.add(new winston.transports.Console({
  levels: ecmsLevels.levels,
  level: 'debug',
  exitOnError: false,
  handleExceptions: true,
  format: format.combine(
    format.json()
  )
}))

console.error = function() {
  logger.error(this, arguments)
}
console.warn = function() {
  logger.warn(this, arguments)
}
console.debug = function() {
  logger.debug(this, arguments)
}
console.info = function() {
  logger.info(this, arguments)
}
console.log = function() {
  logger.verbose(this, arguments)
}

module.exports = logger;
