// Retorna o tamanho de uma string
const textSize = 'Drissa'.length;
console.log(`Quantidade de letras: ${textSize}`);

// Retorna um array quebrando a string por um delimitador
const splitText = 'Drissa'.split('s');
console.log(
  "\nArray com as posiçòes separadas pelo delimitador: ",
  splitText
);

// Busca por um valor e substitui por outro
const replaceText = "DriSsa".replace("DriS", "SirD");
console.log("\nSubstituição de valor:", replaceText);

// Retorna a "fatia" de um valor
const lastChar = "Drissa".slice(-1);
console.log("\nÚltima letra de uma string:", lastChar);

const allWithoutLastChar = "Drissa".slice(0, -1);
console.log("\nValor da string da primeira letra menos a última:", allWithoutLastChar);

const secondToEnd = "Drissa".slice(1);
console.log("\nValor da string da segunda letra até a última:", secondToEnd);

// Retorna N caracteres a partir de uma posição
const twoCharsBeforeFirstPos = "Drissa".substr(0, 2);
console.log("\nAs duas primeiras letras são:", twoCharsBeforeFirstPos);