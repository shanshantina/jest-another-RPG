const { expect, test } = require('@jest/globals');
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

// test to get player health value
test("get player's health value", () => {
    const player = new Player('Dave');

    expect(player.getHealth()).toEqual(expect.stringContaining(player.health.toString()));
});

// test if the player is alive
test('check if player is alive or not', () => {
    const player = new Player('Dave');

    expect(player.isAlive()).toBeTruthy();

    player.health =0;

    expect(player.isAlive()).toBeFalsy();
});


// test if the player health reduce in correct amount
test("subtracts from player's health", () => {
    const player = new Player('Dave');
    const oldHealth = player.health;

    player.reduceHealth(5);

    expect(player.health).toBe(oldHealth-5);

    player.reduceHealth(99999);

    expect(player.health).toBe(0);
});

// test the player attack value
test("gets player's attack value", () => {
    const player = new Player('Dave');
    player.strength = 10;

    expect(player.getAttackValue()).toBeGreaterThanOrEqual(5);
    expect(player.getAttackValue()).toBeLessThanOrEqual(15);
});

// test add potion to player inventory
test('adds a potion to the inventory', () =>{
    const player = new Player('Dave');
    const oldCount = player.inventory.length;

    player.addPotion(new Potion());

    expect(player.inventory.length).toBeGreaterThan(oldCount);
});

// test the correct potion remove from inventory when player use it
test('uses a potion from inventory', () => {
    const player = new Player('Dave');
    player.inventory = [new Potion(), new Potion(), new Potion()];
    const oldCount = player.inventory.length;

    player.usePotion(1);

    expect(player.inventory.length).toBeLessThan(oldCount);
});