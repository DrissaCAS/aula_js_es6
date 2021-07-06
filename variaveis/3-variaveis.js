const nome = 'Drissa';

//Não podemos alterar o valor
//nome = 'CAS';

const user = {
    nome: 'Drissa'
};
 
// Mas se for um objeto, podemos trocar suas propriedades
user.nome = 'Drissa CAS';

// Não podemos fazer o objeto "apontar" para outro lugar
/**user = {
    nome: 'Drissa'
};*/

const persons = ['Drissa', 'Paul', 'Jenni'];

// Podemos adicionar novos itens
persons.push('John');

// Podemos remover algum item
persons.shift();

// Podemos alterar diretamente
persons[1] = "James";

console.log("\n Array após as alterações: ", persons);