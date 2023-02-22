import yargs from './../node_modules/yargs/index.mjs';
import { hideBin } from './../node_modules/yargs/helpers/helpers.mjs';

const usage = '\nUsage: mousejiggler --speed <speed ms>';

await yargs(hideBin(process.argv))
    .version('1.0.1')
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