import { RandomProperty } from "/src/league-creation/random-utility/random.jsx";
import { calculateHeightWeight } from "/src/league-creation/player-utility/heightWeight.jsx";
import { calculateAttributes } from "/src/league-creation/player-utility/attribute.jsx";
import { calculateTendencies } from "/src/league-creation/player-utility/tendencies.jsx";
import { calculateAbilities } from "/src/league-creation/player-utility/ability.jsx";
/*
    Model for the Player class
    ** NEEDS WORK ** 
    - Should add functionality for generating players based on overall (75ovr player, 80ovr player, etc.), would be useful for generating players for Mid-Major teams
    - Should probably adjust ratings based on grade
    - Will need to add something like potential or work ethic to determine player progression
    - should probably have separate class for Player's personal attributes
    - Via progression update, player abilities should be recalculated when a player progresses. Changes to player tendencies should be adjusted during the off-season
    - Should consider setting automatic roles, or manually assigned roles feature as a way to describe players
    - Player summary feature that describes player strengths and weaknesses
*/
const firstNames = [
    "James", "Michael", "William", "David", "Richard", "Joseph", "Thomas", "Charles", "Christopher", "Daniel",
    "Matthew", "Anthony", "Mark", "Donald", "Steven", "Paul", "Andrew", "Joshua", "Kenneth", "Kevin",
    "Brian", "George", "Edward", "Ronald", "Timothy", "Jason", "Jeffrey", "Ryan", "Jacob", "Gary",
    "Nicholas", "Eric", "Jonathan", "Stephen", "Larry", "Justin", "Scott", "Brandon", "Benjamin", "Samuel",
    "Frank", "Gregory", "Raymond", "Alexander", "Patrick", "Jack", "Dennis", "Jerry", "Tyler", "Aaron",
    "Jose", "Henry", "Adam", "Douglas", "Nathan", "Peter", "Zachary", "Kyle", "Walter", "Ethan",
    "Jeremy", "Harold", "Keith", "Christian", "Roger", "Noah", "Gerald", "Carl", "Terry", "Sean",
    "Austin", "Arthur", "Lawrence", "Jesse", "Dylan", "Bryan", "Joe", "Jordan", "Billy", "Bruce",
    "Albert", "Willie", "Gabriel", "Logan", "Alan", "Juan", "Wayne", "Roy", "Ralph", "Randy",
    "Eugene", "Carlos", "Russell", "Bobby", "Victor", "Martin", "Ernest", "Phillip", "Todd", "Jesse"
];
const lastNames = [
    "Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor",
    "Anderson", "Thomas", "Jackson", "White", "Harris", "Martin", "Thompson", "Garcia", "Martinez", "Robinson",
    "Clark", "Rodriguez", "Lewis", "Lee", "Walker", "Hall", "Allen", "Young", "Hernandez", "King",
    "Wright", "Lopez", "Hill", "Scott", "Green", "Adams", "Baker", "Gonzalez", "Nelson", "Carter",
    "Mitchell", "Perez", "Roberts", "Turner", "Phillips", "Campbell", "Parker", "Evans", "Edwards", "Collins",
    "Stewart", "Sanchez", "Morris", "Rogers", "Reed", "Cook", "Morgan", "Bell", "Murphy", "Bailey",
    "Rivera", "Cooper", "Richardson", "Cox", "Howard", "Ward", "Torres", "Peterson", "Gray", "Ramirez",
    "James", "Watson", "Brooks", "Kelly", "Sanders", "Price", "Bennett", "Wood", "Barnes", "Ross",
    "Henderson", "Coleman", "Jenkins", "Perry", "Powell", "Long", "Patterson", "Hughes", "Flores", "Washington",
    "Butler", "Simmons", "Foster"
];
/*
The following proportions are used to determine the player's position:
    Guard: (50%)
    Forward: (40%)
    Center: (10%)
*/
const positionWeighted = {
    1: 5,
    2: 4,
    3: 1,
}
export class Player {
    // personal, height and weight, attributes, tendencies, caps, abilities
    id;
    firstName;
    lastName;
    hometown;
    position;
    grade;
    redShirt;
    hsRanking;
    number;
    height;
    weight;
    finishing;
    finishingTendency;
    finishingCap;
    midRange;
    midRangeTendency;
    midRangeCap;
    threePt;
    threePtTendency;
    threePtCap;
    freeThrow;
    freeThrowTendency;
    freeThrowCap;
    passing;
    passingCap;
    ballHandling;
    ballHandlingCap;
    offensiveRebounding;
    offensiveReboundingCap;
    perimeterDefense;
    perimeterDefenseCap;
    interiorDefense;
    interiorDefenseCap;
    teamDefense;
    teamDefenseCap;
    defensiveRebounding;
    defensiveReboundingCap;
    block;
    blockCap;
    steal;
    stealCap;
    offensiveAbility;
    defensiveAbility;
    // individual statistics
    seasonStats;
    careerStats;
    // team, conference
    team;
    conference;


    // consider separate initialize function that is called by constructor
    constructor(id) {
        this.id = id;
        this.setPersonal();
        this.setHeightWeight();
        this.setAttributes();
        this.setTendencies();
        this.setCaps();
        this.setAbilities();
        this.setStats();
    }

    setPersonal() {
        this.firstName = firstNames[Math.floor(Math.random() * firstNames.length)]; // needs work 
        this.lastName = lastNames[Math.floor(Math.random() * lastNames.length)]; // needs work
        this.hometown = "Hometown"; // needs work
        this.position = Math.floor(Math.random() * 3) + 1;
        this.grade = Math.floor(Math.random() * 4) + 1;
        this.redShirt = false;
        this.hsRanking = "N/A"; // should be calculated by position in future, or use starRating instead
        this.number = Math.floor(Math.random() * 100); // should be calculated by position in future
    }
    // can simply method by just passing player object, and setting properties in calculate method
    setHeightWeight() {
        let hw = calculateHeightWeight(this.position);
        this.height = hw.height;
        this.weight = hw.weight;
    }
    setAttributes() {
        let attributes = calculateAttributes(this.position, this.height, this.weight);
        this.finishing = attributes.finishing;
        this.midRange = attributes.midRange;
        this.threePt = attributes.threePt;
        this.freeThrow = attributes.freeThrow;
        this.passing = attributes.passing;
        this.ballHandling = attributes.ballHandling;
        this.offensiveRebounding = attributes.offensiveRebounding;
        this.perimeterDefense = attributes.perimeterDefense;
        this.interiorDefense = attributes.interiorDefense;
        this.teamDefense = attributes.teamDefense;
        this.defensiveRebounding = attributes.defensiveRebounding;
        this.block = attributes.block;
        this.steal = attributes.steal;
    }
    setTendencies() {
        let tendencies = calculateTendencies(this.position, this.height, this.weight);
        this.finishingTendency = tendencies.finishingTendency;
        this.midRangeTendency = tendencies.midRangeTendency;
        this.threePtTendency = tendencies.threePtTendency;
        this.freeThrowTendency = tendencies.freeThrowTendency;
    }
    // ** NEEDS WORK ** - will need to add appropriate caps for each attribute with player progression feature
    setCaps() {
        this.finishingCap = 0;
        this.midRangeCap = 0;
        this.threePtCap = 0;
        this.freeThrowCap = 0;
        this.passingCap = 0;
        this.ballHandlingCap = 0;
        this.offensiveReboundingCap = 0;
        this.perimeterDefenseCap = 0;
        this.interiorDefenseCap = 0;
        this.teamDefenseCap = 0;
        this.defensiveReboundingCap = 0;
        this.blockCap = 0;
        this.stealCap = 0;
    }
    // should consider adding abilities for specific attributes, shooting for example (maybe even add something similar to badges in 2k)
    setAbilities() {
        let abilities = calculateAbilities(this.finishing, this.finishingTendency, this.midRange, this.midRangeTendency, this.threePt, this.threePtTendency, this.freeThrow, this.freeThrowTendency, this.passing, this.ballHandling, this.offensiveRebounding, this.perimeterDefense, this.interiorDefense, this.teamDefense, this.defensiveRebounding, this.block, this.steal, this.position);
        this.offensiveAbility = Math.round(abilities.offensiveAbility);
        this.defensiveAbility = Math.round(abilities.defensiveAbility);
    }
};