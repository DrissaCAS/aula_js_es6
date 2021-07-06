var test = 'Drissa';

(() =>{
    console.log(`Valor dentro da função "${test}"`);

    if (true){
        var test = 'CAS';
        console.log(`Valor dentro do if: ${test}`);
    }

    console.log(`Valor após a execução do if: ${test}`);
})();

console.log(`Valor fora da função "${test}"`);