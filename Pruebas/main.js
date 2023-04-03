

// let names = ['maria','pedro','jose','carlos','mariela'];

// for(let name of names){
//     console.log(name);
// }


// Primer ejercicio

// let nombre = prompt('Ingresa tu nombre')
// let edad = parseInt (prompt('Ingresa tu edad'));

// console.log(`Hola ${nombre}, Tienes ${edad} años , Y el año que viene tendrás ${edad + 1} años `);

// document.write(`Hola ${nombre}, Tienes ${edad} años, Y el año que viene tendrás ${edad + 1} años `)




// Segundo ejercicio


// 

// Ejercicio numero 3

// let numero =parseInt(prompt('Ingresa un numero')) 

// for(let i = 1; i <= numero; i++){

//     if(i % 2==0 ){
//         console.log(`${i} Es par ` )

//     }else{
//         console.log(`${i} Es impar`)
//     }
// }



// Ejercicio numero 4


// let numero = parseInt(prompt('Ingresa un numero'));

// let resultado = 1;

// for(let i = numero; i > 0; i--){

//     resultado *= i;
// }

// console.log(`El factorial de ${numero} es ${resultado}`);






function escaler(n){
    for(let i = 1; i <= n; i++){
        let espacios = ' '.repeat(i)
        let caracter = '#'.repeat(n-i)
        console.log(espacios + caracter);
        
    }
}

escaler(6)