":" //#;exec /usr/bin/env node --input-type=module - "$@" < "$0"
import figlet from 'figlet';
import { mouse, straightTo, Point, screen } from '@nut-tree/nut-js';
import { logoOff, speed } from './lib/initParams.js'

(async () => {

    //Show logo
    if (!logoOff) {

        console.log(figlet.textSync('MouseJigglerJS'));
        console.log(`Speed: ${speed}`)
        
    }

    //Screen size
    const mainScreenWidth = await screen.width();
    const mainScreenHeight = await screen.height();

    setInterval(() => {

        const randomWidth = parseInt(Math.random() * mainScreenWidth);
        const randomHeight = parseInt(Math.random() * mainScreenHeight);
        const newPoint = new Point(randomWidth, randomHeight);

        mouse.move(straightTo(newPoint));

    }, speed);

})();