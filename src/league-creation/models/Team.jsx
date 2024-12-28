/*
    Model for the Player class
*/
export class Team {
    constructor(name) {
        this.name = name;
        this.players = [];
    }

    // setStartingLineup() {
    //     // sort players by offensive ability as test
    //     this.players.sort((a, b) => b.offensiveAbility - a.offensiveAbility);
    //     // set starting lineup
    //     this.startingLineup = this.players.slice(0, 5);
    // }
};