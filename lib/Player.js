const Potion = require('../lib/Potion');
const Character = require('./Character');

// convert constructor to ES6 
class Player extends Character {
    constructor(name='') {
        // call parent constructor here which is Character in here
        super(name);

        this.inventory = [new Potion('health'), new Potion()];
    }

    getStats() {
        return {
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility
        };
    }

    // check the inventory
    getInventory() {
        if (this.inventory.length) {
        return this.inventory;
        }
        return false;
    }

    // add potion to player inventory
    addPotion(potion) {
        this.inventory.push(potion);
    }

    // player use the potion and remove the correct potion from inventory
    usePotion(index) {
        const potion = this.getInventory().splice(index, 1)[0];
  
        switch (potion.name) {
          case 'agility':
            this.agility += potion.value;
            break;
          case 'health':
            this.health += potion.value;
            break;
          case 'strength':
            this.strength += potion.value;
            break;
        }
    }
}

module.exports = Player;