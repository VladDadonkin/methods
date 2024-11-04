import { Zombie } from "../src/zombie";

test('check characters_zombie', () => {
    const zombie = new Zombie('ZombieXX');
    const characteristic = {
        attack: 40,
        defence: 10,
        health: 100,
        level: 1,
        name: 'ZombieXX',
        type: 'Zombie',
    };
    expect(zombie).toEqual(characteristic);
})