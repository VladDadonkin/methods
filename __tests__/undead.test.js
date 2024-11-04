import { Undead } from "../src/undead";

test('check character_undead', () => {
    const undead = new Undead('Chapsi');
    const characteristic = {
        attack: 25,
        defence: 25,
        health: 100,
        level: 1,
        name: 'Chapsi',
        type: 'Undead',
    };

    expect(undead).toEqual(characteristic);
 
})