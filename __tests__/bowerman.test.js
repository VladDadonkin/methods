import { Bowerman } from "../src/bowerman";

test('check character_bowman', () => {
    const bowman = new Bowerman('Vladik');
    const characteristic = {
        attack: 25,
        defence: 25,
        health: 100,
        level: 1,
        name: 'Vladik',
        type: 'Bowman',
    };

    expect(bowman).toEqual(characteristic);
})