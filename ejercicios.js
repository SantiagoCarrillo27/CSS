function escalera(n){
    
    for(let i = 1 ; i <= n; i++){
        let espacios = ' '.repeat(n-i)    
        let caracter = '#'.repeat(i);
        console.log(espacios + caracter);
    }
}

escalera(5)

