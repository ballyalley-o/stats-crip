interface ILogger {
  /**
   * Custom log
   * @param message
   * @param color
   */
  custom(color: any, ...message: string[]): void

  /**
   * log message to console
   * @param message - message to log : default
   */
  log(...message: string[]): void

  /**
   * log message in type info
   * @param message - message to log : type info
   */
  info(...message: string[]): void

  /**
   * log message in type warn
   * @param message - message to log : type warn
   */
  warn(...message: string[]): void

  /**
   * log message in type array in a table
   * @param message - message to log : type array/object
   */
  tbl(...message: any[]): void

  /**
   * log message in type error
   * @param message - message to log : type error
   */
  error(...message: string[]): void

  /**
   * log message in type debug
   * @param message - message to log : type debug
   */
  debug(...message: string[]): void
}

export default ILogger
