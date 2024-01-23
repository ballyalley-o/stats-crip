import { IOutputTarget } from '@interfaces'
import { Logger } from '@utils'

const logger = new Logger()

class ConsoleReport implements IOutputTarget {
  print(report: string): void {
    logger.log(report)
  }
}

export default ConsoleReport
