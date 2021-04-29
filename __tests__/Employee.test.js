const Employee = require('../lib/Employee');

test('create a new employee', () => {
    const employee = new Employee('Peter', 123, 'peterw712@outlook.com')

    expect(employee.name).toBe('Peter')
    expect(employee.id).toBe(123)
    expect(employee.email).toBe('peterw712@outlook.com')
});

test('return values from Employee class', () => {
    const employee = new Employee('Peter', 123, 'peterw712@outlook.com')

    expect(employee.getName()).toBe('Peter')
    expect(employee.getId()).toBe(123)
    expect(employee.getEmail()).toBe('peterw712@outlook.com')
});