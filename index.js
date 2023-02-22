#!/usr/bin/env node
import figlet from './node_modules/figlet/lib/node-figlet.js';
import { mouse, straightTo, Point, screen } from './node_modules/@nut-tree/nut-js/dist/index.js';
import { logoOff, delay } from './lib/initParams.js';

(async () => {

    //Show logo
    if (!logoOff) {

        console.log(figlet.textSync('MouseJigglerJS'));
        console.log(`Delay: ${delay}ms`);
        
    }

    //Screen size
    const mainScreenWidth = await screen.width();
    const mainScreenHeight = await screen.height();

    setInterval(() => {

        const randomWidth = parseInt(Math.random() * mainScreenWidth);
        const randomHeight = parseInt(Math.random() * mainScreenHeight);
        const newPoint = new Point(randomWidth, randomHeight);

        mouse.move(straightTo(newPoint));

    }, delay);

})();