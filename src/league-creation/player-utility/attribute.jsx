import { RandomProperty } from "/src/league-creation/random-utility/random.jsx";
/*
    Function to calculate a player's attributes based on their position, height and weight
    ** NEEDS WORK **
    - All attributes should be as accurate as possible and will require constant re-tooling
    - MidRange, ThreePt, and FreeThrow should be heavily correlated
    - FreeThrowTendency should be heavily correlated to ball handling and finishing tendency
*/

export function calculateAttributes(position, height, weight) {
    let finishing = 0;
    let midRange = 0;
    let threePt = 0;
    let freeThrow = 0;
    let passing = 0;
    let ballHandling = 0;
    let perimeterDefense = 0;
    let interiorDefense = 0;
    let teamDefense = 0;
    let offensiveRebounding = 0;
    let defensiveRebounding = 0;
    let block = 0;
    let steal = 0;

    switch (position) {
        case 1: // Guard
            finishing = RandomProperty(guardFinishing);
            midRange = RandomProperty(guardMidRange);
            threePt = RandomProperty(guardThreePt);
            freeThrow = RandomProperty(guardFreeThrow);
            passing = RandomProperty(guardPassing);
            ballHandling = RandomProperty(guardBallHandling);
            perimeterDefense = RandomProperty(guardPerimeterDefense);
            interiorDefense = RandomProperty(guardInsideDefense);
            teamDefense = RandomProperty(guardTeamDefense);
            offensiveRebounding = RandomProperty(guardOffensiveRebounding);
            defensiveRebounding = RandomProperty(guardDefensiveRebounding);
            block = RandomProperty(guardBlock);
            steal = RandomProperty(guardSteal);
            break;
        case 2: // Forward
            finishing = RandomProperty(forwardFinishing);
            midRange = RandomProperty(forwardMidRange);
            threePt = RandomProperty(forwardThreePt);
            freeThrow = RandomProperty(forwardFreeThrow);
            passing = RandomProperty(forwardPassing);
            ballHandling = RandomProperty(forwardBallHandling);
            perimeterDefense = RandomProperty(forwardPerimeterDefense);
            interiorDefense = RandomProperty(forwardInsideDefense);
            teamDefense = RandomProperty(forwardTeamDefense);
            offensiveRebounding = RandomProperty(forwardOffensiveRebounding);
            defensiveRebounding = RandomProperty(forwardDefensiveRebounding);
            block = RandomProperty(forwardBlock);
            steal = RandomProperty(forwardSteal);
            break;
        case 3: // Center
            finishing = RandomProperty(centerFinishing);
            midRange = RandomProperty(centerMidRange);
            threePt = RandomProperty(centerThreePt);
            freeThrow = RandomProperty(centerFreeThrow);
            passing = RandomProperty(centerPassing);
            ballHandling = RandomProperty(centerBallHandling);
            perimeterDefense = RandomProperty(centerPerimeterDefense);
            interiorDefense = RandomProperty(centerInsideDefense);
            teamDefense = RandomProperty(centerTeamDefense);
            offensiveRebounding = RandomProperty(centerOffensiveRebounding);
            defensiveRebounding = RandomProperty(centerDefensiveRebounding);
            block = RandomProperty(centerBlock);
            steal = RandomProperty(centerSteal);
            break;
        default: // Error
            console.error("Player attributes not properly calculated.");
            break;
    }
    return { finishing, midRange, threePt, freeThrow, passing, ballHandling, perimeterDefense, interiorDefense, teamDefense, offensiveRebounding, defensiveRebounding, block, steal };
}
/*
    Object defining the weights for guards and their three point attribute generation. 50 rating roughly equates to 25% threePt percentage, 75 for 25%, and 99 for 45%
*/
const guardFinishing = {
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
/*
    Object defining the weights for guards and their three point attribute generation. 50 rating roughly equates to 25% threePt percentage, 75 for 25%, and 99 for 45%
*/
const forwardFinishing = {
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
/*
    Object defining the weights for guards and their three point attribute generation. 50 rating roughly equates to 25% threePt percentage, 75 for 25%, and 99 for 45%
*/
const centerFinishing = {
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
/*
    Object defining the weights for guards and their three point attribute generation. 50 rating roughly equates to 25% threePt percentage, 75 for 25%, and 99 for 45%
*/
const guardMidRange = {
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
/*
    Object defining the weights for guards and their three point attribute generation. 50 rating roughly equates to 25% threePt percentage, 75 for 25%, and 99 for 45%
*/
const forwardMidRange = {
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
/*
    Object defining the weights for guards and their three point attribute generation. 50 rating roughly equates to 25% threePt percentage, 75 for 25%, and 99 for 45%
*/
const centerMidRange = {
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

/*
    Object defining the weights for guards and their three point attribute generation. 50 rating roughly equates to 25% threePt percentage, 75 for 25%, and 99 for 45%
*/
const guardThreePt = {
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
/*
    Object defining the weights for guards and their three point attribute generation. 50 rating roughly equates to 25% threePt percentage, 75 for 25%, and 99 for 45%
*/
const forwardThreePt = {
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
/*
    Object defining the weights for guards and their three point attribute generation. 50 rating roughly equates to 25% threePt percentage, 75 for 25%, and 99 for 45%
*/
const centerThreePt = {
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
/*
    Object defining the weights for guards and their three point attribute generation. 50 rating roughly equates to 25% threePt percentage, 75 for 25%, and 99 for 45%
*/
const guardFreeThrow = {
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
/*
    Object defining the weights for guards and their three point attribute generation. 50 rating roughly equates to 25% threePt percentage, 75 for 25%, and 99 for 45%
*/
const forwardFreeThrow = {
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
/*
    Object defining the weights for guards and their three point attribute generation. 50 rating roughly equates to 25% threePt percentage, 75 for 25%, and 99 for 45%
*/
const centerFreeThrow = {
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
/*
    Object defining the weights for guards and their three point attribute generation. 50 rating roughly equates to 25% threePt percentage, 75 for 25%, and 99 for 45%
*/
const guardPassing = {
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
/*
    Object defining the weights for guards and their three point attribute generation. 50 rating roughly equates to 25% threePt percentage, 75 for 25%, and 99 for 45%
*/
const forwardPassing = {
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
/*
    Object defining the weights for guards and their three point attribute generation. 50 rating roughly equates to 25% threePt percentage, 75 for 25%, and 99 for 45%
*/
const centerPassing = {
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
/*
    Object defining the weights for guards and their three point attribute generation. 50 rating roughly equates to 25% threePt percentage, 75 for 25%, and 99 for 45%
*/
const guardBallHandling = {
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
/*
    Object defining the weights for guards and their three point attribute generation. 50 rating roughly equates to 25% threePt percentage, 75 for 25%, and 99 for 45%
*/
const forwardBallHandling = {
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
/*
    Object defining the weights for guards and their three point attribute generation. 50 rating roughly equates to 25% threePt percentage, 75 for 25%, and 99 for 45%
*/
const centerBallHandling = {
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
/*
    Object defining the weights for guards and their three point attribute generation. 50 rating roughly equates to 25% threePt percentage, 75 for 25%, and 99 for 45%
*/
const guardPerimeterDefense = {
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
/*
    Object defining the weights for guards and their three point attribute generation. 50 rating roughly equates to 25% threePt percentage, 75 for 25%, and 99 for 45%
*/
const forwardPerimeterDefense = {
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
/*
    Object defining the weights for guards and their three point attribute generation. 50 rating roughly equates to 25% threePt percentage, 75 for 25%, and 99 for 45%
*/
const centerPerimeterDefense = {
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
/*
    Object defining the weights for guards and their three point attribute generation. 50 rating roughly equates to 25% threePt percentage, 75 for 25%, and 99 for 45%
*/
const guardOffensiveRebounding = {
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
/*
    Object defining the weights for guards and their three point attribute generation. 50 rating roughly equates to 25% threePt percentage, 75 for 25%, and 99 for 45%
*/
const forwardOffensiveRebounding = {
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
/*
    Object defining the weights for guards and their three point attribute generation. 50 rating roughly equates to 25% threePt percentage, 75 for 25%, and 99 for 45%
*/
const centerOffensiveRebounding = {
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
/*
    Object defining the weights for guards and their three point attribute generation. 50 rating roughly equates to 25% threePt percentage, 75 for 25%, and 99 for 45%
*/
const guardDefensiveRebounding = {
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
/*
    Object defining the weights for guards and their three point attribute generation. 50 rating roughly equates to 25% threePt percentage, 75 for 25%, and 99 for 45%
*/
const forwardDefensiveRebounding = {
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
/*
    Object defining the weights for guards and their three point attribute generation. 50 rating roughly equates to 25% threePt percentage, 75 for 25%, and 99 for 45%
*/
const centerDefensiveRebounding = {
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
/*
    Object defining the weights for guards and their three point attribute generation. 50 rating roughly equates to 25% threePt percentage, 75 for 25%, and 99 for 45%
*/
const guardInsideDefense = {
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
/*
    Object defining the weights for guards and their three point attribute generation. 50 rating roughly equates to 25% threePt percentage, 75 for 25%, and 99 for 45%
*/
const forwardInsideDefense = {
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
/*
    Object defining the weights for guards and their three point attribute generation. 50 rating roughly equates to 25% threePt percentage, 75 for 25%, and 99 for 45%
*/
const centerInsideDefense = {
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
/*
    Object defining the weights for guards and their three point attribute generation. 50 rating roughly equates to 25% threePt percentage, 75 for 25%, and 99 for 45%
*/
const guardTeamDefense = {
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
/*
    Object defining the weights for guards and their three point attribute generation. 50 rating roughly equates to 25% threePt percentage, 75 for 25%, and 99 for 45%
*/
const forwardTeamDefense = {
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
/*
    Object defining the weights for guards and their three point attribute generation. 50 rating roughly equates to 25% threePt percentage, 75 for 25%, and 99 for 45%
*/
const centerTeamDefense = {
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
/*
    Object defining the weights for guards and their three point attribute generation. 50 rating roughly equates to 25% threePt percentage, 75 for 25%, and 99 for 45%
*/
const guardSteal = {
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
/*
    Object defining the weights for guards and their three point attribute generation. 50 rating roughly equates to 25% threePt percentage, 75 for 25%, and 99 for 45%
*/
const forwardSteal = {
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
/*
    Object defining the weights for guards and their three point attribute generation. 50 rating roughly equates to 25% threePt percentage, 75 for 25%, and 99 for 45%
*/
const centerSteal = {
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
/*
    Object defining the weights for guards and their three point attribute generation. 50 rating roughly equates to 25% threePt percentage, 75 for 25%, and 99 for 45%
*/
const guardBlock = {
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
/*
    Object defining the weights for guards and their three point attribute generation. 50 rating roughly equates to 25% threePt percentage, 75 for 25%, and 99 for 45%
*/
const forwardBlock = {
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
/*
    Object defining the weights for guards and their three point attribute generation. 50 rating roughly equates to 25% threePt percentage, 75 for 25%, and 99 for 45%
*/
const centerBlock = {
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