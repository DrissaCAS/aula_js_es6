function fn(){
    log('Hoisting de função');

    function log(value){
        console.log(value);
    }
}

fn();

/**
 * O Hoisting suspende/levanta algo. 
 * No caso das funções ele sobe toda função.
 * 
function fn(){
    function log(value){
        console.log(value);
    }

    log('Hoisting de função');
}
 */
