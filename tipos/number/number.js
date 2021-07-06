const num = 78.3174;

//Transformar número para string
const numAsString = num.toString();
console.log('Número transformado em String: ', numAsString, typeof numAsString);

//Retorna número com um número de casas decimais
const fixedTwoDecimals = num.toFixed(2);
console.log('\n\nNúmero com 2 casas decimais: ', fixedTwoDecimals);

//Transforma uma string em float
console.log('\n\nString para Float: ', parseFloat('13.22'));

//Transforma uma string em int
console.log('\n\nString para Int: ', parseInt('13.20'));