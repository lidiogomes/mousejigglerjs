import yargs from './../node_modules/yargs/index.mjs';
import { hideBin } from './../node_modules/yargs/helpers/helpers.mjs';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const usage = '\nUsage: mousejiggler --speed <speed ms>';

//Get package.json on root path
const rootPath = path.dirname(fileURLToPath(import.meta.url));
const packageJsonPath = path.join(rootPath, '..', 'package.json');
const { version } = await JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

await yargs(hideBin(process.argv))
    .version(version)
    .usage(usage)
    .option('d', { alias: 'delay', describe: 'Delay of mouse move', type: 'string', demandOption: false })
    .option('logo-off', { describe: 'Turn off logo', type: 'boolean', default: false, demandOption: false })
    .default({
        d: '10000ms'
    })
    .help(true)
    .argv;

const argv = await yargs(hideBin(process.argv)).argv;

//Speed definition
let delay = argv.d ?? argv.delay ?? undefined;
const logoOff = argv['logo-off'];

if (delay === undefined || isNaN(delay) || delay.trim() === '') {
    delay = 10000;
}

export { logoOff, delay }