const user = ['John', 'Jenny', 'James'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const persons = [
    {
        name: 'John',
        age: 26,
        gender: gender.MAN
    },
    {
        name: 'Jenny',
        age: 20,
        gender: gender.WOMAN
    },
    {
        name: 'James',
        age: 18,
        gender: gender.MAN
    }
]

//Retornar a quantidade de itens de um array
console.log(`Itens: ${persons.length}`);

//Verificar se é array
console.log(`A variável persons é um array:`, Array.isArray(persons));

//Iterar os itens do array
persons.forEach(person => {
    console.log(`Nome: ${person.name}`);
});

//Filtrar array
const mens = persons.filter(person => person.gender === gender.MAN);
console.log('\n\n Nova lista apenas com homens: ', mens);

//Retorna um novo
const personsWithCourse = persons.map(person => {
    person.course = 'JavaScript';
    return person;
});

console.log('\n\n Pessoas com adição do curso: ', personsWithCourse);

//Transformar um array em outro tipo
const totalAge = persons.reduce((age, person) => {
    age += person.age;
    return age;
}, 0);

console.log('\n\n Soma de idade das pessoas:', totalAge);

//Juntando operações
const totalEvenAges = persons
                            .filter(person => person.age % 2 === 0)
                            .reduce((age, person) => {
                                age += person.age;
                                return age;
                            }, 0);

console.log('\n\n Soma de idade das pessoas com idades pares:', totalEvenAges);
