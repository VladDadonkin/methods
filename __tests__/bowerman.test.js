import { Bowerman } from "../src/bowerman";

test('check character_bowman', () => {
    const bowman = new Bowerman('Vladik');
    expect(bowman.attack).toBe(25);
    expect(bowman.defense).toBe(25);
})