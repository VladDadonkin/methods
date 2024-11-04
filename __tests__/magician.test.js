import { Magician } from "../src/magician";

test('check character_magician', () => {
    const magician = new Magician('Invoker');
    expect(magician.attack).toBe(10);
    expect(magician.defense).toBe(40);
})