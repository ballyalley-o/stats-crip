import { IAnalyzer } from '@interfaces'
import { MatchData } from '@types'
import { MatchReader } from '@csv'
import { VARS } from '@enums'

const TEAM = 'Man United'

class WinsAnalysis implements IAnalyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let wins = 0

    for (let match of matches) {
      if (match[1] === TEAM && match[5] === VARS.home) {
        wins++
      } else if (match[2] === TEAM && match[5] === VARS.away) {
        wins++
      }
    }
    return `Team ${this.team} won ${wins}`
  }
}

export default WinsAnalysis
