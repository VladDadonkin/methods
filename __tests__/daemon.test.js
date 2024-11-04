import { Daemon } from "../src/daemon";

test('check character_daemon', () => {
    const daemon = new Daemon('Drakula');
    const characteristic = {
        attack: 10,
        defence: 40,
        health: 100,
        level: 1,
        name: 'Drakula',
        type: 'Daemon',
    };

    expect(daemon).toEqual(characteristic);
})