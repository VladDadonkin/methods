import Character from "../src/character";

test('creating an object with the correct characteristics', () => {
    const character = new Character ('Vlad', 'Bowman');
    expect(character.name).toBe('Vlad');
    expect(character.type).toBe('Bowman')
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
})

test('check Error_name', () => {
    expect(() => new Character ('A', 'Bowman')).toThrow('Имя должно быть строкой от 2 до 10 символов.');
    expect(() => new Character('OverLongName11', 'Bowman')).toThrow('Имя должно быть строкой от 2 до 10 символов.');
})

test('check Error_validTypes', () => {
    expect(() => new Character('Vlad', 'NoBowman')).toThrow('Выберите тип из Bowman, Swordsman, Magician, Undead, Zombie, Daemon');
})
