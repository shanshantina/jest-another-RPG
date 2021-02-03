const Potion = require('../lib/Potion');
function Player(name = '') {
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);
    this.inventory = [new Potion('health'), new Potion()];
}
 /* prototype syntax, using prototype so we don't need to create getStats and get Inventory for each player,
    it can works for all the players even the new one add in*/
Player.prototype.getStats = function() {
    return {
        potions: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility
    };
};
        
// check the inventory
Player.prototype.getInventory = function() {
    if (this.inventory.length) {
    return this.inventory;
    }
    return false;
};

// check the player health
Player.prototype.getHealth = function() {
    return `${this.name}'s health is now ${this.health}!`;
};

// check if the player is alive
Player.prototype.isAlive = function() {
    if (this.health === 0) {
        return false;
    }
    return true;
};


// check if reduce the correct health from player's health
Player.prototype.reduceHealth = function(health) {
    this.health -= health;

    if (this.health < 0) {
        this.health =0;
    }
};


// build player attack power
Player.prototype.getAttackValue = function() {
    const min = this.strength - 5;
    const max = this.strength + 5;

    return Math.floor(Math.random() * (max - min) + min);
};
    
// add potion to player inventory
Player.prototype.addPotion = function(potion) {
    this.inventory.push(potion);
};

// player use the potion and remove the correct potion from inventory
Player.prototype.usePotion = function(index) {
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
  };


module.exports = Player;