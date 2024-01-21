import fs from 'fs'
import { PATH } from '@constants'
import { VARS } from '@enums'
import { ENCODING } from '@config'
// @classes
import { MatchReader, CSVFileReader } from '@csv'
import { MatchData } from '@types'

const csvFileReader = new CSVFileReader(PATH.STATS_CSV)

const matchReader = new MatchReader(csvFileReader)
matchReader.load()

let manchesterWins = 0
let team = 'Man United'
let home = VARS.home
let away = VARS.away

for (let game of matchReader.matches) {
  if (game[1] === team && game[5] === home) {
    manchesterWins++
  } else if (game[2] === team && game[5] === away) {
    manchesterWins++
  }
}
