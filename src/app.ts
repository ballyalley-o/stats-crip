import fs from 'fs'
import { PATH, VARS } from '@constants'
import { ENCODING } from '@config'

const games = fs
  .readFileSync(PATH.STATS_CSV, {
    encoding: ENCODING.matchesCSV as BufferEncoding,
  })
  .split('\n')
  .map((row: string): string[] => {
    return row.split(',')
  })

let manchesterWins = 0
let team = 'Man United'
let home = VARS.home
let away = VARS.away

for (let game of games) {
  if (game[1] === team && game[5] === home) {
    manchesterWins++
  } else if (game[2] === team && game[5] === away) {
    manchesterWins++
  }
}
