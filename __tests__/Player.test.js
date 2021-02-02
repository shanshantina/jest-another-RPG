const { expect } = require('@jest/globals');
const Player = require('../lib/Player');
const Potion = require('../lib/Potion');

/* The require() line imports the Potion() constructor into the test, establishing Potion as a usable variable
 (otherwise new Potion() would throw an error). 
 Then jest.mock() mocks/replaces the constructor's implementation with our faked data. */
jest.mock('../lib/Potion.js');

console.log(new Potion());

// test player object
test('create a player object', () =>{
    const player = new Player('Dave');

    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    expect(player.inventory).toEqual(expect.arrayContaining([expect.any(Object)]));
});

// add test to get the stats about the player
test ("gets player's stats as an object", () => {
    const player = new Player('Dave');

    expect(player.getStats()).toHaveProperty('potions');
    expect(player.getStats()).toHaveProperty('health');
    expect(player.getStats()).toHaveProperty('strength');
    expect(player.getStats()).toHaveProperty('agility');
});

// add test to get the inventory stats
test ('gets inventory from player or returns false', () => {
    const player = new Player('Dave');

    expect(player.getInventory()).toEqual(expect.any(Array));

    player.inventory = [];

    expect(player.getInventory()).toEqual(false);
});