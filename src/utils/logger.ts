import 'colors'
import { ILogger } from '@interfaces'

declare module 'colors' {
  interface String {
    yellow: string
    bgCyan: string
    bgRed: string
    red: string
    bgYellow: string
    // errored: any[]
  }
}

const logger: ILogger = {
  // @type - custom
  custom: (color: any, ...message: string[]) =>
    console.log(message.join('')[color]),

  // @type - log :Default
  log: (...message: string[]) => console.log(message.join(' ').yellow),

  // @type - info
  info: (...message: string[]) => console.log(message.join(' ').bgCyan),

  // @type - warn
  warn: (...message: string[]) => console.warn(message.join(' ').bgYellow),

  // @type - table -for array and obj
  tbl: (...message: any[]) => console.table(message),

  // @type - error
  error: (...message: string[]) =>
    console.log(new Error(message.join(' ').bgRed)),

  // @type - debug
  debug: (...message: string[]) => console.debug(message.join(' ').bgRed),
}

export default logger
