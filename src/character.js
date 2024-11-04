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
        this.attack = 0;
        this.defence = 0;        
    }

    levelUp() {
        
        if (this.health === 0) {;
            throw new Error('нельзя повысить левел умершего');
        }
            this.level++;
            this.attack *= 1.2;
            this.defence *= 1.2;
            this.health = 100;
    };

    damage(points) {

        if (this.health >= 0){
            health -= points * (1 - defence / 100);
        };
        if (this.health < 0) {
            this.health = 0;
        };
    };
}