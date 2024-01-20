import fs from 'fs';
import { PATH } from './constants/index.js';
import { ENCODING } from './config/index.js';
const content = fs
    .readFileSync(PATH.STATS_CSV, {
    encoding: ENCODING.matchesCSV,
})
    .split('\n')
    .map((row) => {
    return row.split(',');
});
console.log(content);
