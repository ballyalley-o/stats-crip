import fs from 'fs'
import { PATH } from '@constants'
import { VARS } from '@enums'
import { ENCODING } from '@config'
// @classes
import { MatchReader } from '@csv'

const reader = new MatchReader(PATH.STATS_CSV)
reader.read()

let manchesterWins = 0
let team = 'Man United'
let home = VARS.home
let away = VARS.away

for (let game of reader.data) {
  if (game[1] === team && game[5] === home) {
    manchesterWins++
  } else if (game[2] === team && game[5] === away) {
    manchesterWins++
  }
}
