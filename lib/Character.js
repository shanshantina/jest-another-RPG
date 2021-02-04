class Character {
    constructor(name = '') {
        this.name = name;
        this.health = Math.floor(Math.random() * 10 + 95);
        this.strength = Math.floor(Math.random() * 5 + 7);
        this.agility = Math.floor(Math.random() * 5 + 7);
      }
    // check both player and enemy if it alive or not
    isAlive() {
        if (this.health === 0) {
            return false;
        }
        return true;
    };

    // check both player and enemy health
    getHealth() {
        return `${this.name}'s health is now ${this.health}!`;
    };

    // check both player and enmy attack power
    getAttackValue() {
        const min = this.strength - 5;
        const max = this.strength + 5;

        return Math.floor(Math.random() * (max -min) + min);
    };

    // subtrack player and enmey health and check the remaining health
    reduceHealth(health) {
        this.health -= health;

        if (this.health < 0) {
            this.health = 0;
        }
    };
}


console.log(new Character().getHealth());

module.exports = Character;