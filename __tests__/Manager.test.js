const Manager = require('../lib/Manager');

test('create a new manager', () => {
    const manager = new Manager('Peter', 123, 'peterw712@outlook.com', 456)

    expect(manager.name).toBe('Peter')
    expect(manager.id).toBe(123)
    expect(manager.email).toBe('peterw712@outlook.com')
    expect(manager.officeNumber).toBe(456)
});

test('return values from Manager class', () => {
    const manager = new Manager('Peter', 123, 'peterw712@outlook.com', 456)

    expect(manager.getName()).toBe('Peter')
    expect(manager.getId()).toBe(123)
    expect(manager.getEmail()).toBe('peterw712@outlook.com')
    expect(manager.getOfficeNumber()).toBe(456)
});