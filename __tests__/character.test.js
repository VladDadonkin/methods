import Character from "../src/character";

test('creating an object with the correct characteristics', () => {
    const character = new Character('Vlad', 'Bowman');
    expect(character.name).toBe('Vlad');
    expect(character.type).toBe('Bowman')
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
})



test('check Error_name', () => {
    expect(() => new Character('A', 'Bowman')).toThrow('Имя должно быть строкой от 2 до 10 символов.');
    expect(() => new Character('OverLongName11', 'Bowman')).toThrow('Имя должно быть строкой от 2 до 10 символов.');
})

test('check Error_validTypes', () => {
    expect(() => new Character('Vlad', 'NoBowman')).toThrow('Выберите тип из Bowman, Swordsman, Magician, Undead, Zombie, Daemon');
})


test('checking the lelevUp method' , () => {
    const character = new Character('Vlad', 'Bowman');
    character.attack = 25;
    character.defence = 25;
    character.levelUp();

    expect(character.level).toBe(2);
    expect(character.health).toBe(100);
    expect(character.attack).toBe(30)  // 25 * 1,2
    expect(character.defence).toBe(30) // 25 * 1,2
})

test('Checking the error inside the method levelUp', () => {
    const character = new Character('Vlad', 'Bowman');
    character.health = 0;
    expect(() => character.levelUp()).toThrow('Нельзя повысить левел умершего');
})

test('cheking damage(poinst) method', () => {
    const character = new Character('Vlad', 'Bowman');
    character.defence = 25;
    character.health = 100;
    character.damage(40);

    expect(character.health).toBeCloseTo(70) //100 - 40 * (1 - 25 / 100)
})

test('checking that health does not drop below zero', () => {
    const character = new Character('Vlad', 'Bowman');
    character.health = 10;
    character.damage(20);
    expect(character.health).toBe(0);
});


test('Cheking damage method with health = 0', () => {
    const character = new Character('Vlad', 'Bowman');
    character.defence = 25;
    character.health = 30;
    character.damage(100);

    expect(character.health).toBeCloseTo(0)
})

test('damage should not change health if already at 0', () => {
    const character = new Character('Vlad', 'Bowman');
    character.health = 0;
    character.damage(50);
    expect(character.health).toBe(0);
});