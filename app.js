const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



function buscarElemento(arr, elemento) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === elemento) {
        return `El elemento ${elemento} está en la posición ${i}`;
      }
    }
    return `El elemento ${elemento} no se encuentra en el arreglo`;
  }
const arreglo=[10,8,7,6,5,9];
console.log(buscarElemento(arreglo,6));




// Suma con array
let sumaArray=0;
const arr=[12,21,31,41,2];
console.log(`La suma del array ${arr} es igual a: ${sumarelementos(arr)}`);

function sumarelementos(arr){
    for (let i = 0; i < arr.length; i++) {
        sumaArray += arr[i];
    }
return sumaArray
}

//Retornar mayor y menor elemento

const arr1=[2,4,6,8,10];
console.log(`El numero mayor es ${Mayor_y_MenorValor(arr1).numMayor} y el numero menor es ${Mayor_y_MenorValor(arr1).numMenor}`);

function Mayor_y_MenorValor(arr){
    const numMayor= Math.max(...arr);
    const numMenor= Math.min(...arr);
    return{numMayor,numMenor};
}


//Contar elementos pares de un aray

const arr2=[10,9,8,7,6,5,4,3,2,1];
console.log(`El numero de numeros pares de este array: ${arr2} es: ${ContarPares(arr2)}`);

function ContarPares(arr){
    contadorDEpares=0;
    for (let i = 0; i < arr.length; i++) {
       if (arr[i]%2){
        contadorDEpares++;
       }
    }
    return contadorDEpares;
}

//Ordenar un array
console.log(`El array: ${arr2} se ordena de menor a mayor: ${ordenarMenor_Mayor(arr2)}`);

function ordenarMenor_Mayor(arr){
    const g=arr.length;
    for (let i = 0; i < g-1; i++) {
        for (let j = 0; j < g-1; j++) {
            if (arr[j]>arr[j+1]) {
                const cambio= arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=cambio;
            }
        }
    }
    return arr;
}


//Buscar en una lista un dato

function buscarNombre(arr, elemento) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === elemento) {
        return `El nombre ${elemento} está en la posición ${i}`;
      }
    }
    return `El nombre ${elemento} no se encuentra en el arreglo`;
  }
const Nombres=["Sahara","Jaime","Marta","Pepe","Jose","Pedro"];
console.log(buscarNombre(Nombres,"Jaime"));



// Invertir el orden de un array

console.log(`El array de nombres invertido es: ${invertirArray(Nombres)}`);

function invertirArray(arr){
    const ArrayInvertido=[];
    for (let i = arr.length-1; i >= 0; i--){
       ArrayInvertido.push(arr[i])
    }
return ArrayInvertido;
}

//Convertir un array a mayusculas

console.log(`Los nombres convertidos a mayuscula son: ${ConvertiraMayus(Nombres)}`);

function ConvertiraMayus(arr){
        const arrayMayus=arr.map(arr=>arr.toUpperCase());
        return arrayMayus;
}


//Sumar todos los numeros positivos

const numeros1=[2,12,-3,-20,14,-2];
console.log(`La suma de los numeros positivos son: ${SumarPositivos(numeros1)}`);

function SumarPositivos(arr){
    let suma=0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]>=0) {
            suma+=arr[i];
        }
    }
    return suma;
}

//Encontrar el multiplo de 5

function EncontrarMultp5(array) {
    return array.find(numero => numero % 5 === 0); 
    // Usa 'find' para recorrer el array y devolver el primer número que cumple la condición de ser divisible entre 5.
}

const numeros = [12, 22, 35, 40, 51, 60];
console.log( `El primer mltiplo de 5 en el array es: ${EncontrarMultp5(numeros)}`); // Resultado


//Tabla de multiplicar de un numero del 1 al 10
/*

rl.question('Ingresa un número: ', (input) => {
  const numero = parseInt(input);

  if (isNaN(numero)) {
    console.log('Eso no es un número válido.');
  } else {
    console.log(`Tabla del ${numero}:`);
    for (let i = 1; i <= 10; i++) {
      console.log(`${numero} x ${i} = ${numero * i}`);
    }
  }
  rl.close();
});
5**/

// Generar una frecuencia de fibonacci


fibonacci();
function fibonacci(){
    let a=0;
    let b=1;
    let c;
    console.log(a)
    console.log(b)
    for (let i = 0; i < 8; i++) {
        c=a+b;
        console.log(c);
        a=b;
        b=c;
}
}

//16 
/*
//EJERCICIO 16:
//Sumar solo los numeros impares entre 1 y 50:
let suma = 0;

for (let i = 1; i <= 50; i++) {
   
    if (i % 2 !== 0) { // Verifica si el número es impar.
        suma += i;
        }
        while (suma > 500) {
            console.log("La suma supera 500. Proceso detenido.");
                break;
        }
        if (suma>500){
            break;
        }
}

console.log(`Suma final: ${suma}`);
*/
/*
//12
GenNumRandom()

function GenNumRandom() {
    const secreto = Math.floor(Math.random() * 10) + 1;
  
    const preguntar = () => {
      rl.question('Adivina el número (1 al 10): ', (respuesta) => {
        const intento = parseInt(respuesta);
        if (intento === secreto) {
          console.log('¡Correcto!');
          ejercicio13(); // Continuar con el siguiente
        } else {
          console.log('Incorrecto. Intenta de nuevo.');
          preguntar();
        }
      });
    };
  
    preguntar();
  }

*/




  //13
ejercicio13();
  function ejercicio13() {
    rl.question('Ingresa un número para contar regresivamente: ', (respuesta) => {
        let numero = parseInt(respuesta);
        while (numero >= 0) {
          console.log(numero);
          numero--;
        }
        rl.close();
      });

    }


/*
  //14
 ejercicio14();
  function ejercicio14() {
    
  let numero;

function pedirNumero() {
  rl.question('Ingresa un número mayor que 0: ', (respuesta) => {
    numero = parseInt(respuesta);
    if (numero > 0) {
      console.log(`Número válido: ${numero}`);
      rl.close();
    } else {
      console.log('Número inválido, intenta de nuevo.');
      pedirNumero();
    }
  });
}

pedirNumero();
    
  }
*/

/*
  //15
  function mostrarMenu() {
    console.log('\n--- MENÚ ---');
    console.log('1. Saludar');
    console.log('2. Mostrar fecha');
    console.log('3. Salir');
  
    readline.question('Elige una opción: ', (opcion) => {
      switch (opcion) {
        case '1':
          console.log('¡Hola!');
          mostrarMenu();
          break;
        case '2':
          console.log(`Fecha actual: ${new Date().toLocaleDateString()}`);
          mostrarMenu();
          break;
        case '3':
          console.log('¡Hasta luego!');
          readline.close();
          break;
        default:
          console.log('Opción inválida.');
          mostrarMenu();
      }
    });
  }
  
  mostrarMenu();
}
  */