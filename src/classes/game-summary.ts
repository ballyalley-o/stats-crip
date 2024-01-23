import { IAnalyzer, IOutputTarget } from '@interfaces'
import { MatchData } from '@types'

class GameSummary {
  constructor(public analyzer: IAnalyzer, public outputTarget: IOutputTarget) {}

  buildPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches)

    this.outputTarget.print(output)
  }
}

export default GameSummary
