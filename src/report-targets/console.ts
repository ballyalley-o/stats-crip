import { IOutputTarget } from '@interfaces'
import { logger } from '@utils'

class ConsoleReport implements IOutputTarget {
  print(report: string): void {
    logger.log(report)
  }
}

export default ConsoleReport
