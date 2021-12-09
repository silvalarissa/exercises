const person = {
    name: 'John doe',
    age: 27,
    address: {
        street: 'Spring Mountain Rd',
        number: '6850 W' ,
        country: 'U.S',
        state: 'NV',
        city: 'Las Vegas',
        district: 'Spring Valley'
    }
}

console.log('Person Object: ', person)
console.log('has name?: ', person.name)
console.log('has street? (without nullish coalescing operator): ', person.street)
console.log('has street? (with nullish coalescing operator): ', person.street ?? 'no street')