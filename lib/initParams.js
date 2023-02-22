import yargs from './../node_modules/yargs/index.mjs';
import { hideBin } from './../node_modules/yargs/helpers/helpers.mjs';

const usage = '\nUsage: mousejiggler --speed <speed ms>';

await yargs(hideBin(process.argv))
    .usage(usage)
    .option('s', { alias: 'speed', describe: 'Speed of mouse jiggler move', type: 'string', demandOption: false })
    .option('logo-off', { describe: 'Show off logo', type: 'boolean', default: false, demandOption: false })
    .default({
        s: '10000ms'
    })
    .help(true)
    .argv;

const argv = await yargs(hideBin(process.argv)).argv;

//Speed definition
let speed = argv.s ?? argv.speed ?? undefined;
const logoOff = argv['logo-off'];

if (speed === undefined || isNaN(speed)) {
    speed = 10000;
}

export { logoOff, speed }