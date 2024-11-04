import { Daemon } from "../src/daemon";

test('check character_daemon', () => {
    const daemon = new Daemon('Drakula');
    const characteristic = {
        attack: 25,
        defence: 25,
        health: 100,
        level: 1,
        name: 'Drakula',
        type: 'Daemon',
    };

    expect(daemon).toEqual(characteristic);
})