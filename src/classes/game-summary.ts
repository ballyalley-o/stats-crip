import { IAnalyzer, IOutputTarget } from '@interfaces'
import { MatchData } from '@types'
import { WinsAnalysis } from '@classes'
import { HtmlReport } from '@report-targets'

class GameSummary {
  static winsAnalysisHTMLReport(team: string): GameSummary {
    return new GameSummary(new WinsAnalysis(team), new HtmlReport())
  }

  constructor(public analyzer: IAnalyzer, public outputTarget: IOutputTarget) {}

  buildPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches)

    this.outputTarget.print(output)
  }
}

export default GameSummary
