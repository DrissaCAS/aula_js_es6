(() => {
    let test = 'valor da função';
    console.log(`Valor dentro da função "${test}"`);

    if (true) {
        let test = 'valor no if';
        console.log(`Valor dentro do IF "${test}"`);
    }

    console.log(`Valorapós o IF "${test}"`);
})();