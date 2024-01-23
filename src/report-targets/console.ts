import { IOutputTarget } from '@interfaces'
import { logger } from '@utils'

class ConsoleReport implements IOutputTarget {
  print(report: string): void {
    logger.log(report)
  }
  printInfo(report: string): void {
    logger.info(report)
  }
  printWarn(report: string): void {
    logger.info(report)
  }
  printError(report: string): void {
    logger.error(report)
  }
}

export default ConsoleReport
