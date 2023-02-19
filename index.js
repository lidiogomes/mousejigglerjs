":" //#;exec /usr/bin/env node --input-type=module - "$@" < "$0"
import { mouse, getActiveWindow, straightTo, Point, screen } from '@nut-tree/nut-js';
import { type, speed } from './lib/initParams.js'

(async () => {
    console.log(type, speed)
    const mainScreenWidth = await screen.width();
    const mainScreenHeight = await screen.height();

    if (type !== 'random') {

        mouse.config.mouseSpeed = speed;

        for (let i = 0; i <= mainScreenWidth;) {

            let heightWay = i % 2;

            if (!heightWay) {

                for (let j = 0; j <= mainScreenHeight; j++) {

                    const newPoint = new Point(i, j);

                    await mouse.move(straightTo(newPoint));

                }

            } else {

                for (let j = mainScreenHeight; j >= 0; j--) {

                    const newPoint = new Point(i, j);

                    await mouse.move(straightTo(newPoint));

                }
            }

            //Infinity loop
            ++i

            if (i > mainScreenWidth) {

                i = 0;

            }

        }

    } else {

        setInterval(() => {

            const randomWidth = parseInt(Math.random() * mainScreenWidth);
            const randomHeight = parseInt(Math.random() * mainScreenHeight);
            const newPoint = new Point(randomWidth, randomHeight);

            mouse.move(straightTo(newPoint));

        }, speed);
    }
})();