import { Undead } from "../src/undead";

test('check character_undead', () => {
    const undead = new Undead('Chapsi');
    expect(undead.attack).toBe(25);
    expect(undead.defense).toBe(25);
})