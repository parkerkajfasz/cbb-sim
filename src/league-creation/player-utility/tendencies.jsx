import { RandomProperty } from "/src/league-creation/random-utility/random.jsx";
/*
    Function to calculate a player's tendencies based on their position, height, weight, and attributes
    ** NEEDS WORK **
    - Tendencies should be heavily correlated to players attributes
*/

export function calculateTendencies(position, height, weight) {
    let finishingTendency = 0;
    let midRangeTendency = 0;
    let threePtTendency = 0;
    let freeThrowTendency = 0;

    switch (position) {
        case 1: // Guard
            finishingTendency = RandomProperty(guardFinishingTendency);
            midRangeTendency = RandomProperty(guardMidRangeTendency);
            threePtTendency = RandomProperty(guardThreePtTendency);
            freeThrowTendency = RandomProperty(guardFreeThrowTendency);
            break;
        case 2: // Forward
            finishingTendency = RandomProperty(forwardFinishingTendency);
            midRangeTendency = RandomProperty(forwardMidRangeTendency);
            threePtTendency = RandomProperty(forwardThreePtTendency);
            freeThrowTendency = RandomProperty(forwardFreeThrowTendency);
            break;
        case 3: // Center
            finishingTendency = RandomProperty(centerFinishingTendency);
            midRangeTendency = RandomProperty(centerMidRangeTendency);
            threePtTendency = RandomProperty(centerThreePtTendency);
            freeThrowTendency = RandomProperty(centerFreeThrowTendency);
            break;
        default:
            console.error("Player tendencies not properly calculated.");
            break;

    }

    return { finishingTendency, midRangeTendency, threePtTendency, freeThrowTendency };
}

const guardFinishingTendency = {
    50: 1,
    55: 3,
    60: 7,
    65: 13,
    70: 16,
    75: 20,
    80: 16,
    85: 13,
    90: 7,
    95: 3,
    99: 1,
}

const forwardFinishingTendency = {
    50: 1,
    55: 3,
    60: 7,
    65: 13,
    70: 16,
    75: 20,
    80: 16,
    85: 13,
    90: 7,
    95: 3,
    99: 1,
}

const centerFinishingTendency = {
    50: 1,
    55: 3,
    60: 7,
    65: 13,
    70: 16,
    75: 20,
    80: 16,
    85: 13,
    90: 7,
    95: 3,
    99: 1,
}

const guardMidRangeTendency = {
    50: 1,
    55: 3,
    60: 7,
    65: 13,
    70: 16,
    75: 20,
    80: 16,
    85: 13,
    90: 7,
    95: 3,
    99: 1,
}

const forwardMidRangeTendency = {
    50: 1,
    55: 3,
    60: 7,
    65: 13,
    70: 16,
    75: 20,
    80: 16,
    85: 13,
    90: 7,
    95: 3,
    99: 1,
}

const centerMidRangeTendency = {
    50: 1,
    55: 3,
    60: 7,
    65: 13,
    70: 16,
    75: 20,
    80: 16,
    85: 13,
    90: 7,
    95: 3,
    99: 1,
}

const guardThreePtTendency = {
    50: 1,
    55: 3,
    60: 7,
    65: 13,
    70: 16,
    75: 20,
    80: 16,
    85: 13,
    90: 7,
    95: 3,
    99: 1,
}

const forwardThreePtTendency = {
    50: 1,
    55: 3,
    60: 7,
    65: 13,
    70: 16,
    75: 20,
    80: 16,
    85: 13,
    90: 7,
    95: 3,
    99: 1,
}

const centerThreePtTendency = {
    50: 1,
    55: 3,
    60: 7,
    65: 13,
    70: 16,
    75: 20,
    80: 16,
    85: 13,
    90: 7,
    95: 3,
    99: 1,
}

const guardFreeThrowTendency = {
    50: 1,
    55: 3,
    60: 7,
    65: 13,
    70: 16,
    75: 20,
    80: 16,
    85: 13,
    90: 7,
    95: 3,
    99: 1,
}

const forwardFreeThrowTendency = {
    50: 1,
    55: 3,
    60: 7,
    65: 13,
    70: 16,
    75: 20,
    80: 16,
    85: 13,
    90: 7,
    95: 3,
    99: 1,
}

const centerFreeThrowTendency = {
    50: 1,
    55: 3,
    60: 7,
    65: 13,
    70: 16,
    75: 20,
    80: 16,
    85: 13,
    90: 7,
    95: 3,
    99: 1,
}

