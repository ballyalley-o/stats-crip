import fs from 'fs'
import { ENCODING } from '@config'
import { VARS } from '@enums'
import { dateParse } from '@utils'

type MatchData = [Date, string, string, number, number, VARS, string]

class CSVFileReader {
  data: string[][] = []

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: ENCODING.matchesCSV as BufferEncoding,
      })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',')
      })
  }
}

export default CSVFileReader
