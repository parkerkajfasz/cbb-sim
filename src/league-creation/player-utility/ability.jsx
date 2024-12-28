/*
    Function used to calculate Players offensive and defensive ability based on their attributes
    ** NEEDS WORK **  
    - Some centers and forwards will have shoot 3's attribute to false, so should not be considered in formula
    - Formulas will need changing to properly capture player's best abilities
    - Consider taking average of player's top 3 attributes, and have it cover 50% of their ability for example
    - Important to consider that attributes are heavily correlated to tendency already, so tendencies should probably capture more of player's ability
    Examples:
    - Center with high perimeter defense would actually be quite valuable to team because they would leverage their ability,
    whereas a center with low perimeter defense wouldn't matter as much, as team wouldn't rely on them to guard perimeter 
    - Player with elite shooting with high volume is possibly the most valuable thing in basketball, but wouldn't be properly captured as it is now
*/

export function calculateAbilities(finishing, finishingTendency, midRange, midRangeTendency, threePt, threePtTendency, freeThrow, freeThrowTendency, passing, ballHandling, offensiveRebounding, perimeterDefense, interiorDefense, teamDefense, defensiveRebounding, block, steal, position) {
    let offensiveAbility = 0;
    let defensiveAbility = 0;

    switch (position) {
        case 1: // Guard
            offensiveAbility = guardOffensiveAbility(finishing, finishingTendency, midRange, midRangeTendency, threePt, threePtTendency, freeThrow, freeThrowTendency, passing, ballHandling, offensiveRebounding);
            defensiveAbility = guardDefensiveAbility(perimeterDefense, interiorDefense, teamDefense, defensiveRebounding, steal, block);
            break;
        case 2: // Forward
            offensiveAbility = forwardOffensiveAbility(finishing, finishingTendency, midRange, midRangeTendency, threePt, threePtTendency, freeThrow, freeThrowTendency, passing, ballHandling, offensiveRebounding);
            defensiveAbility = forwardDefensiveAbility(perimeterDefense, interiorDefense, teamDefense, defensiveRebounding, steal, block);
            break;
        case 3: // Center
            offensiveAbility = centerOffensiveAbility(finishing, finishingTendency, midRange, midRangeTendency, threePt, threePtTendency, freeThrow, freeThrowTendency, passing, ballHandling);
            defensiveAbility = centerDefensiveAbility(perimeterDefense, interiorDefense, teamDefense, defensiveRebounding, steal, block);
            break;
        default:
            console.error("Player abilities not properly calculated.");
            break;
    }
    return { offensiveAbility, defensiveAbility };
}
/*
    Function used to calculate a Guard's offensive ability. 
    ** Formula **
    finishing: 10%
    finishingTendency: 10%
    midRange: 10%
    midRangeTendency: 10%
    threePt: 15%
    threePtTendency: 10%
    freeThrow: 4%
    freeThrowTendency: 10%
    passing: 10%
    ballHandling: 10%
    offensiveRebounding: 1%
*/
function guardOffensiveAbility(finishing, finishingTendency, midRange, midRangeTendency, threePt, threePtTendency, freeThrow, freeThrowTendency, passing, ballHandling, offensiveRebounding) {
    return (finishing * 0.10) + (finishingTendency * 0.10) + (midRange * 0.10) + (midRangeTendency * 0.10) + (threePt * 0.15) + (threePtTendency * 0.10) + (freeThrow * 0.04) + (freeThrowTendency * 0.10) + (passing * 0.10) + (ballHandling * 0.10);
}
/*
    Function used to calculate a Guard's defensive ability. 
    ** Formula **
    perimeterDefense: 60%
    interiorDefense: 1%
    teamDefense: 25%
    defensiveRebounding: 5%
    steal: 8%
    block: 1%
*/
function guardDefensiveAbility(perimeterDefense, interiorDefense, teamDefense, defensiveRebounding, steal, block) {
    return (perimeterDefense * 0.60) + (interiorDefense * 0.01) + (teamDefense * 0.25) + (defensiveRebounding * 0.05) + (steal * 0.08) + (block * 0.01);
}
/*
    Function used to calculate a Forward's offensive ability. 
    ** Formula **
    finishing: 12%
    finishingTendency: 10%
    midRange: 10%
    midRangeTendency: 10%
    threePt: 15%
    threePtTendency: 10%
    freeThrow: 5%
    freeThrowTendency: 10%
    passing: 5%
    ballHandling: 10%
    offensiveRebounding: 3%
*/
function forwardOffensiveAbility(finishing, finishingTendency, midRange, midRangeTendency, threePt, threePtTendency, freeThrow, freeThrowTendency, passing, ballHandling, offensiveRebounding) {
    return (finishing * 0.12) + (finishingTendency * 0.10) + (midRange * 0.10) + (midRangeTendency * 0.10) + (threePt * 0.15) + (threePtTendency * 0.10) + (freeThrow * 0.05) + (freeThrowTendency * 0.10) + (passing * 0.05) + (ballHandling * 0.10) + (offensiveRebounding * 0.03);
}
/*
    Function used to calculate a Forward's defensive ability. 
    ** Formula **
    perimeterDefense: 28%
    interiorDefense: 28%
    teamDefense: 26%
    defensiveRebounding: 8%
    steal: 5%
    block: 5%
*/
function forwardDefensiveAbility(perimeterDefense, interiorDefense, teamDefense, defensiveRebounding, steal, block) {
    return (perimeterDefense * 0.28) + (interiorDefense * 0.28) + (teamDefense * 0.26) + (defensiveRebounding * 0.08) + (steal * 0.05) + (block * 0.05);
}
/*
    Function used to calculate a Center's offensive ability. 
    ** Formula **
    finishing: 14%
    finishingTendency: 14%
    midRange: 5%
    midRangeTendency: 9%
    threePt: 10%
    threePtTendency: 10%
    freeThrow: 8%
    freeThrowTendency: 12%
    passing: 7%
    ballHandling: 1%
    offensiveRebounding: 10%
*/
function centerOffensiveAbility(finishing, finishingTendency, midRange, midRangeTendency, threePt, threePtTendency, freeThrow, freeThrowTendency, passing, ballHandling) {
    return (finishing * 0.14) + (finishingTendency * 0.14) + (midRange * 0.05) + (midRangeTendency * 0.09) + (threePt * 0.10) + (threePtTendency * 0.10) + (freeThrow * 0.08) + (freeThrowTendency * 0.12) + (passing * 0.07) + (ballHandling * 0.01);
}
/*
    Function used to calculate a Center's defensive ability. 
    ** Formula **
    perimeterDefense: 2.5%
    interiorDefense: 55%
    teamDefense: 10%
    defensiveRebounding: 12.5%
    steal: 2.5%
    block: 12.5%
*/
function centerDefensiveAbility(perimeterDefense, interiorDefense, teamDefense, defensiveRebounding, steal, block) {
    return (perimeterDefense * 0.025) + (interiorDefense * 0.55) + (teamDefense * 0.10) + (defensiveRebounding * 0.125) + (steal * 0.025) + (block * 0.125);
}