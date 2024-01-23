import { MatchData } from '@types'

interface IAnalyzer {
  run(matches: MatchData[]): string
}

export default IAnalyzer
