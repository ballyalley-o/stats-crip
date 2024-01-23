import colors from 'colors'

class Logger {
  constructor() {
    this.error = this.error.bind(this)
    this.warn = this.warn.bind(this)
    this.info = this.info.bind(this)
    this.log = this.log.bind(this)
  }

  log(...args: string[]) {
    this.log(colors.green(...(args as [string])))
  }

  info(...args: string[]) {
    this.info(colors.blue(...(args as [string])))
  }

  warn(...args: string[]) {
    this.warn(colors.yellow(...(args as [string])))
  }

  error(...args: string[]) {
    this.error(colors.red(...(args as [string])))
  }
}

export default Logger
