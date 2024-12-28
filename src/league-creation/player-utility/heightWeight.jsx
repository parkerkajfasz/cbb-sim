import { RandomProperty } from "/src/league-creation/random-utility/random.jsx";
/*
    Function to calculate a player's height and weight based on their position
    ** NEEDS WORK **
    - Weights need to be more accurate based on a player's height
*/
export function calculateHeightWeight(position) {
    let height = 0;
    let weight = 0;

    switch (position) {
        case 1: // Guard
            height = RandomProperty(guardHeightWeighed);
            weight = RandomProperty(guardWeightWeighed);
            break;
        case 2: // Forward
            height = RandomProperty(forwardHeightWeighed);
            weight = RandomProperty(forwardWeightWeighed);
            break;
        case 3: // Center
            height = RandomProperty(centerHeightWeighed);
            weight = RandomProperty(centerWeightWeighed);
            break;
        default: // Error
            console.log(position)
            console.error("Height attribute not properly calculated.");
            break;
    }
    return { height, weight };
}
/*
    Weighted height objects for all positions
*/
const guardHeightWeighed = {
    70: 68,
    71: 68,
    72: 199,
    73: 224,
    74: 335,
    75: 414,
    76: 441,
    77: 409,
    78: 260,
    79: 118,
}
const forwardHeightWeighed = {
    77: 65,
    78: 186,
    79: 346,
    80: 362,
    81: 320,
    82: 190,
}
const centerHeightWeighed = {
    81: 36,
    82: 62,
    83: 60,
    84: 46,
    85: 13,
    86: 7,
    87: 3,
}
/*
    Weighted weight objects for all positions 
*/
const guardWeightWeighed = {
    180: 1,
    185: 1,
    190: 1,
    195: 1,
    200: 1,
    205: 1,
    210: 1,
    215: 1,
    220: 1,
    225: 1,
}
const forwardWeightWeighed = {
    190: 1,
    200: 1,
    205: 1,
    210: 1,
    215: 1,
    220: 1,
    225: 1,
    230: 1,
    235: 1,
    240: 1,
    245: 1,
    250: 1,
}
const centerWeightWeighed = {
    200: 1,
    205: 1,
    210: 1,
    215: 1,
    220: 1,
    225: 1,
    230: 1,
    235: 1,
    240: 1,
    245: 1,
    250: 1,
    255: 1,
    260: 1,
    265: 1,
    270: 1,
    275: 1,
}
