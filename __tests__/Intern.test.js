const Intern = require('../lib/Intern');

test('create a new intern', () => {
    const intern = new Intern('Peter', 123, 'peterw712@outlook.com', 'UofT')

    expect(intern.name).toBe('Peter')
    expect(intern.id).toBe(123)
    expect(intern.email).toBe('peterw712@outlook.com')
    expect(intern.school).toBe('UofT')
});

test('return values from Intern class', () => {
    const intern = new Intern('Peter', 123, 'peterw712@outlook.com', 'UofT')

    expect(intern.getName()).toBe('Peter')
    expect(intern.getId()).toBe(123)
    expect(intern.getEmail()).toBe('peterw712@outlook.com')
    expect(intern.getSchool()).toBe('UofT')
});