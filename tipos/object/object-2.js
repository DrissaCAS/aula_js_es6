const user = {
    name: 'Drissa',
    lastName: 'Cunha Amarante dos Santos'
}

//Recupera as chaves do objeto
console.log('Propriedades do objeto user: ', Object.keys(user));

//Recupera os valores das chaves do objeto
console.log('\n Valores das propriedades do user: ', Object.values(user));

//Retorna um array de arrays contendo [nome_prop, valor_prop]
console.log('\n Lista de propriedades e valores: ', Object.entries(user));

//Mergear propriedades de objetos
Object.assign(user, {fullName: 'Drissa da Cunha Amarante dos Santos'});

console.log('\n Adiciona a propriedade fullName no objeto user: ', user);
console.log('\n Retorna um novo objeto mergeando dois ou mais objetos: ', Object.assign({}, user, {age: 26}));

//Previne todas as alterações em um objeto
const newObj = { foo:'bar' };
Object.freeze(newObj);

newObj.foo = 'changes';
delete newObj.foo;
newObj.bar = 'foo';

console.log('\n Variável newObj após as alterações: ', newObj);

//Permite apenas a alteração de propriedades existentes em um objeto
const person = { name: 'Drissa' };
Object.seal(person);

person.name = 'Drissa da Cunha';
delete person.name;
person.age = 26;

console.log('\n Variável person após as alterações: ', person);