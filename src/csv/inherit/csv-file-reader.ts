import fs from "fs";
import { ENCODING } from "@config";
import { VARS } from "@enums";

type MatchData = [Date, string, string, number, number, VARS, string];

abstract class CSVFileReader<T> {
	data: T[] = [];

	constructor(public filename: string) {}

	abstract mapRow(row: string[]): T;

	read(): void {
		this.data = fs
			.readFileSync(this.filename, {
				encoding: ENCODING.UTF8 as BufferEncoding,
			})
			.split("\n")
			.map((row: string): string[] => {
				return row.split(",");
			})
			.map(this.mapRow);
	}
}

export default CSVFileReader;
