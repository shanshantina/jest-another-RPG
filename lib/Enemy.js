const Potion = require('./Potion');
const Character = require('./Character');

// enemy object information
// convert constructor to ES6 
class Enemy extends Character {
    constructor(name, weapon) {
        // call parent constructor here which is Character in here
        super(name);

        this.weapon = weapon;
        this.potion = new Potion();
    }

    // get the description of the enemy
    getDescription() {
        return `A ${this.name} holding a ${this.weapon} has appeared!`;
    };
};


module.exports = Enemy;