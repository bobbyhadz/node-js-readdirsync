import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
console.log('file name: ', __filename);

const __dirname = path.dirname(__filename);
console.log('directory name: ', __dirname);

const dirContents = fs.readdirSync(__dirname);

console.log(dirContents);
