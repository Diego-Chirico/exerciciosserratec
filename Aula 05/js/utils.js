function calcularParOuImpar(numero){
    numero = parseInt(numero);

    if(isNaN(numero)){
        return 'Esse não é um número.'
    }else if(numero % 2 != 0){
        return 'IMPAR';
    }else{
        return 'PAR';
    }
}