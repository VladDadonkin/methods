import { Magician } from "../src/magician";

test('check character_magician', () => {
    const magician = new Magician('Invoker');
    const characteristic = {
        attack: 10,
        defence: 40,
        health: 100,
        level: 1,
        name: 'Invoker',
        type: 'Magician',
    };

    expect(magician).toEqual(characteristic);
    
})