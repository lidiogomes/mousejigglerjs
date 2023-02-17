const params = process.argv;
let type, speed;

const regexType = new RegExp('^t=random$', 'g');
const regexSpeed = new RegExp('^s=[0-9]*$', 'g');

const typeParam = setParams(regexType, params);
const speedParam = setParams(regexSpeed, params);

type = Boolean(typeParam[0]) ? typeParam[0].split('=')[1] : 'default';

//speed definition
if (type === 'default' && Boolean(speedParam[0])) {
    speed = Number(speedParam[0].split('=')[1]);
} else if (type === 'default' && !Boolean(speedParam[0])) {
    speed = 100;
} else if (type !== 'default' && Boolean(speedParam[0])) {
    speed = Number(speedParam[0].split('=')[1]);
} else {
    speed = 10000;
}


/**
 * 
 * @param {*} regex 
 * @param {*} params 
 * @returns 
 */
function setParams(regex, params) {
    return params.filter((elem) => {
        return regex.test(elem);
    });
}

export { type };
export { speed };