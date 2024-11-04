import { Zombie } from "../src/zombie";

test('check characters_zombie', () => {
    const zombie = new Zombie('ZombieXX');
    expect(zombie.attack).toBe(40);
    expect(zombie.defense).toBe(10);
})