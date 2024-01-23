import { PATH } from '@constants'
// @classes
import { MatchReader } from '@csv'
import { GameSummary } from '@classes'

let team = 'Man United'

const matchReader = MatchReader.fromCSV(PATH.STATS_CSV)
const summary = GameSummary.winsAnalysisHTMLReport(team)

matchReader.load()
summary.buildPrintReport(matchReader.matches)
