let user = {
    name: 'John'
};


console.log(user);

//Alterando a propriedade de um objeto
user.name = 'CAS';

console.log(user);

user['name'] = 'Drissa';

console.log(user);

const prop = 'middleName';
user[prop] = 'Amarante';

console.log(user);

//Criando um propriedade
user.lastName = 'Drissa Cunha Amarante dos Santos';

console.log(user);

//Deletando uma propriedade
delete user.name;

console.log(user);