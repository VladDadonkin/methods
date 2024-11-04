import { Swordsman } from "../src/swordsman";

test('check character_swordsman', () => {
    const swordsman = new Swordsman('Drakula');
    expect(swordsman.attack).toBe(40);
    expect(swordsman.defense).toBe(10);
})