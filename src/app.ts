import fs from 'fs'
import { PATH } from '@constants'
import { VARS } from '@enums'
// @classes
import { MatchReader, CSVFileReader } from '@csv'
import { ConsoleReport } from '@report-targets'
import { WinsAnalysis, GameSummary } from '@classes'

const csvFileReader = new CSVFileReader(PATH.STATS_CSV)

const matchReader = new MatchReader(csvFileReader)
matchReader.load()

let team = 'Man United'

// let manchesterWins = 0
// let home = VARS.home
// let away = VARS.away

// for (let game of matchReader.matches) {
//   if (game[1] === team && game[5] === home) {
//     manchesterWins++
//   } else if (game[2] === team && game[5] === away) {
//     manchesterWins++
//   }
// }

const summary = new GameSummary(new WinsAnalysis(team), new ConsoleReport())
summary.buildPrintReport(matchReader.matches)
