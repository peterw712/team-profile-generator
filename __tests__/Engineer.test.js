const Engineer = require('../lib/Engineer');

test('create a new engineer', () => {
    const engineer = new Engineer('Peter', 123, 'peterw712@outlook.com', 'peterw712')

    expect(engineer.name).toBe('Peter')
    expect(engineer.id).toBe(123)
    expect(engineer.email).toBe('peterw712@outlook.com')
    expect(engineer.github).toBe('peterw712')
});

test('return values from Engineer class', () => {
    const engineer = new Engineer('Peter', 123, 'peterw712@outlook.com', 'peterw712')

    expect(engineer.getName()).toBe('Peter')
    expect(engineer.getId()).toBe(123)
    expect(engineer.getEmail()).toBe('peterw712@outlook.com')
    expect(engineer.getGithub()).toBe('peterw712')
});