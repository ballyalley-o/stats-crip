import { IDataReader } from '@interfaces'
import { CSVFileReader } from '@csv'
import { dateParse } from '@utils'
import { MatchData } from '@types'
import { VARS } from '@enums'

class MatchReader {
  static fromCSV(filename: string) {
    return new MatchReader(new CSVFileReader(filename))
  }
  matches: MatchData[] = []
  constructor(public read: IDataReader) {
    this.read = read
  }

  load(): void {
    this.read.read()
    this.matches = this.read.data.map((row: string[]): MatchData => {
      return [
        dateParse(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as VARS,
        row[6],
      ]
    })
  }
}

export default MatchReader
