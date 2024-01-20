import fs from 'fs'
import { PATH } from '@constants'
import { ENCODING } from '@config'

const content = fs
  .readFileSync(PATH.STATS_CSV, {
    encoding: ENCODING.matchesCSV as BufferEncoding,
  })
  .split('\n')
  .map((row: string): string[] => {
    return row.split(',')
  })

console.log(content)
