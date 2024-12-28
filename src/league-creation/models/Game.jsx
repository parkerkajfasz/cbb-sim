import { RandomProperty } from "/src/league-creation/random-utility/random.jsx";
/*
    Model for the Game class. 
    ** NEEDS WORK **
    - Fastest teams should average 80 possessions per game, slowest teams should average 60 possessions per game, and average teams should average 70 possessions per game
    - Fastest teams should average 15 seconds per shot, slowest teams should average 20 seconds per shot, and average teams should average 17.5 seconds per shot
    - Time of possession should be variable depending on if shot was made or missed
    - Should probably add different violations at some point
    - Teams should commit fouls at different rates, based on coach aggressiveness or possibly player foul tendency
    - Should add capability for substitutions, timeouts, and fouling out
    - Need to add bonus for team fouls 
*/
/*
    Important Team Statistics:
    - offensiveRebound%: 20% to 35%
    - defensiveRebound%: 60% to 80%
    - personal fouls per possession: 15% to 30%
        - shooting foul: 
    - steals per possession: 6% to 12%
    - blocks per 2pt shot: 2% to 10%
    - turnovers per possession: 12% to 24%
    - assist per possession between 12% to 24%
*/
export class Game {
    // will need to add coach object in order to calculate pace of teams
    constructor(homeTeam, awayTeam) {
        this.homeTeam = homeTeam;
        this.awayTeam = awayTeam;
        this.homeTeamPossession = false;
        this.awayTeamPossession = false;
        this.homeTeamPossessions = 0;
        this.awayTeamPossessions = 0;
        this.homeFirstHalfPoints = 0;
        this.homeSecondHalfPoints = 0;
        this.awayFirstHalfPoints = 0;
        this.awaySecondHalfPoints = 0;
        this.homeAssists = 0;
        this.homeRebounds = 0;
        this.homeOffensiveRebounds = 0;
        this.homeDefensiveRebounds = 0;
        this.homeBlocks = 0;
        this.homeSteals = 0;
        this.homeTurnovers = 0;
        this.awayAssists = 0;
        this.awayRebounds = 0;
        this.awayOffensiveRebounds = 0;
        this.awayDefensiveRebounds = 0;
        this.awayBlocks = 0;
        this.awaySteals = 0;
        this.awayTurnovers = 0;
        this.homeTwoPtsMade = 0;
        this.homeThreePtsMade = 0;
        this.homeFreeThrowsMade = 0;
        this.homeTwoPtsAttempted = 0;
        this.homeThreePtsAttempted = 0;
        this.homeFreeThrowsAttempted = 0;
        this.awayTwoPtsMade = 0;
        this.awayThreePtsMade = 0;
        this.awayFreeThrowsMade = 0;
        this.awayTwoPtsAttempted = 0;
        this.awayThreePtsAttempted = 0;
        this.awayFreeThrowsAttempted = 0;
        this.homeTeamUsage = {};
        this.awayTeamUsage = {};
    }

    openingTipEvent() {
        // set usage rates for all players. should probably make its own method
        for (const player of this.homeTeam.startingLineup) {
            this.homeTeamUsage[player.id] = player.offensiveAbility;
        }
        console.log(this.homeTeamUsage);
        for (const player of this.awayTeam.startingLineup) {
            this.awayTeamUsage[player.id] = player.offensiveAbility;
        }

        if (Math.round(Math.random()) === 0) {
            this.homeTeamPossession = true;
        } else {
            this.awayTeamPossession = true;
        }
        return this.possessionEvent();
    }

    possessionEvent() {
        if (this.homeTeamPossession) {
            let playerId = RandomProperty(this.homeTeamUsage);
            const player = this.homeTeam.startingLineup.find(player => player.id === playerId);


        } else {
            let playerId = RandomProperty(this.awayTeamUsage);
            const player = this.homeTeam.startingLineup.find(player => player.id === playerId);
        }
    }

    reboundingEvent() {

    }

    FreeThrowEvent() {

    }

}

const slowTeamPace = {
    5: 0.5,
    6: 0.5,
    7: 0.5,
    8: 0.5,
    9: 0.5,
    10: 0.5,
    11: 0.5,
    12: 0.5,
    13: 0.5,
    14: 0.5,
    15: 0.5,
    16: 0.5,
    17: 0.5,
    18: 0.5,
    19: 0.5,
    20: 2,
    21: 2,
    22: 2,
    23: 1.5,
    24: 1,
    25: 1,
    26: 1,
    27: 0.75,
    28: 0.5,
    29: 0.5,
    30: 0.5,
};

const averageTeamPace = {
    5: 0.5,
    6: 0.5,
    7: 0.5,
    8: 0.5,
    9: 0.5,
    10: 0.5,
    11: 0.5,
    12: 0.5,
    13: 0.5,
    14: 0.5,
    15: 1,
    16: 1,
    17: 2,
    18: 2,
    19: 1.5,
    20: 1.5,
    21: 1,
    22: 1,
    23: 0.75,
    24: 0.5,
    25: 0.5,
    26: 0.5,
    27: 0.25,
    28: 0.25,
    29: 0.25,
    30: 0.25,
};

const fastTeamPace = {
    5: 1.5,
    6: 1.5,
    7: 1.5,
    8: 1.5,
    9: 1.5,
    10: 1.5,
    11: 1.5,
    12: 1,
    13: 1,
    14: 1,
    15: 2,
    16: 2,
    17: 1.5,
    18: 1,
    19: 0.75,
    20: 0.5,
    21: 0.5,
    22: 0.5,
    23: 0.25,
    24: 0.25,
    25: 0.25,
    26: 0.25,
    27: 0.1,
    28: 0.1,
    29: 0.1,
    30: 0.1,
};
