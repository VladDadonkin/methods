export default class Character {
    constructor(name, type) {
        const validTypes = ['Bowman', 'Swordsman', 'Magician', 'Undead', 'Zombie', 'Daemon'];

        if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
            throw new Error('Имя должно быть строкой от 2 до 10 символов.');
        }
        if (!validTypes.includes(type)) {
            throw new Error(`Выберите тип из ${validTypes.join(', ')}`);
        }



        this.name = name;
        this.type = type;
        this.level = 1;
        this.health = 100;
    }

}