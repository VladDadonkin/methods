import { Swordsman } from "../src/swordsman";

test('check character_swordsman', () => {
    const swordsman = new Swordsman('Drakula');
    const characteristic = {
        attack: 40,
        defence: 10,
        health: 100,
        level: 1,
        name: 'Drakula',
        type: 'Swordsman',
    };

    expect(swordsman).toEqual(characteristic);
 
})