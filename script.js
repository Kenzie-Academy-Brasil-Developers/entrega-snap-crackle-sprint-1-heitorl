// Se o número for ímpar, no lugar dele, concatenar "Snap"
//  no final da string

// Se o número for múltiplo de 5, no lugar dele, 
// concatenar "Crackle" no final da string.

// Se o número for tanto ímpar quanto múltiplo de 5, no lugar 
// dele, concatenar "SnapCrackle" no final da string.

// Se número não for nem ímpar nem múltiplo de 5,
//  concatenar o próprio número no final da string.

// Seus itens devem ser separados sempre por vírgula e espaço
//  (veja o exemplo).
// Esta função deve retornar a string obtida.



function snapCrackle(maxValue){
    let resultado = ''

    for(let i = 1; i <= maxValue; i++){
        let valor = i;
        i % 2 !== 0 ? valor = 'Snap' : '';
        i % 5 === 0 ? valor = 'Crackle' : '';
        i % 5 === 0 && i % 2 !== 0 ? valor = 'SnapCrackle' : '';
        i % 2 === 0 && i % 5 !== 0 ? valor = i : '';
        
    resultado = resultado + valor + ", ";
}
    return resultado.slice(0, -2)
}
console.log(snapCrackle(12))


function isPrime(n){
    for(let div = 2; div < n; div++){
        if(n % div === 0){
            return false;
        }
    }return true;
}

function snapCracklePrime(maxValue){
    let resultado = ''

    for(let i = 1; i <= maxValue; i++){
        let valor = i;
            
        if(isPrime(i))
            valor = "Prime"           
              
        i % 2 !== 0 ? valor = 'Snap' : '';
        i % 5 === 0 ? valor = 'Crackle' : '';
        i % 2 !== 0 && isPrime(i) && i !== 1 ? valor = "snapPrime" : '';
        i % 5 === 0 && i % 2 !== 0 ? valor = 'SnapCrackle' : '';
        isPrime(i) && i % 5 === 0 && i % 2 !== 0 ? valor = "SnapCracklePrime" : ''; 
        
        resultado = resultado + valor + ", ";
       
    }
    return resultado.slice(0, -2)
}
console.log(snapCracklePrime(15))

