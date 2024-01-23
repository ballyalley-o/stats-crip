import fs from 'fs'
import { IOutputTarget } from '@interfaces'
import { PATH } from '@constants'
import { ConsoleReport } from '@report-targets'

const consoleReport = new ConsoleReport()

class HTMLReport implements IOutputTarget {
  print(report: string): void {
    const html = `
        <div style="text-align: center;">
            <h1 style="color: blue; font-family: Arial, sans-serif;">Analysis Output</h1>
            <div style="background-color: lightgray; padding: 10px;">${report}</div>
        </div>
        `

    fs.writeFileSync(PATH.REPORT, html)
    consoleReport.printInfo(` HTML report generated at ${PATH.REPORT} `)
  }
}

export default HTMLReport
