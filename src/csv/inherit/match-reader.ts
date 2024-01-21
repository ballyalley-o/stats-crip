import CSVFileReader from '@csv/inherit/csv-file-reader'
import { VARS } from '@enums'
import { dateParse } from '@utils'
import { MatchData } from '@types'

class MatchReader extends CSVFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
    return [
      dateParse(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as VARS,
      row[6],
    ]
  }
}

export default MatchReader
