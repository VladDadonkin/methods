import { Daemon } from "../src/daemon";

test('check character_daemon', () => {
    const daemon = new Daemon('Drakula');
    expect(daemon.attack).toBe(10);
    expect(daemon.defense).toBe(40);
})