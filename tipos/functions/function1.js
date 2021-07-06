//Declaração de função
function fn(){
    return 'Code Here';
}

//Declaração de Arrow Function
const arrowfn = () => 'Code HERE';
//O retorno do Arrow Function é explicito, 
//Porém se for colocar mais de uma expressão precisa usar o comando RETURN
const arrowfn2 = () => {
    //mais de uma expressão
    return 'CODE Here';
}

//Funções também são objetos
fn.prop = 'Posso criar propriedades!';

console.log(fn());
console.log(fn.prop);

//Receber parâmetros
const logValues = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);

//Receber e retornar função
const controlFnExec = fnParam => allowed => {
    if(allowed){
        fnParam();
    }
}

const handleFnExecution = controlFnExec(fn);

handleFnExecution(true);
handleFnExecution();

// controlFnExec como função
function controlFnExecution(fnParam){
    return function(allowed){
        if(allowed){
            fnParam();
        }
    }
}