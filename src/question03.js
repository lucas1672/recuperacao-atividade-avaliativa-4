
import leia from "readline-sync"
//Crie um algoritmo que leia uma quantidade `n` de números inteiros fornecida pelo usuário e armazene esses números em um vetor. O
//algoritmo parar de solicitar valores, quando o usuário digitar o numero 0. Ao final, o algoritmo deve calcular e imprimir a média
//desses números, a soma de todos os números o maior e menor digitado. (Desconsiderar o 0).

function lernumeros() {
  var numeros = [];
  var entrada;

  console.log('Digite números inteiros:');
  
  do {
    entrada = parseInt(leia.question('numero: '), 10);
    if (entrada !== 0) {
      numeros.push(entrada);
    }
  } while (entrada !== 0);

  return numeros;
}
function calcularestatistica(numero) {
  if (numero.length === 0) {
    console.log('Nenhum numero valido foi inserido.');
    return;
  }

  var soma = 0;
  var max = numero[0];
  var min = numero[0];

 
  for (var i = 0; i < numero.length; i++) {
    soma += numero[i];
    if (numero[i] > max) {
      max = numero[i];
    }
    if (numero[i] < min) {
      min = numero[i];
    }
  }

  var media = soma / numero.length;

  console.log('Soma: ' + soma);
  console.log('media: ' + media.toFixed(2));
  console.log('Maior numero: ' + max);
  console.log('Menor numero: ' + min);
}


function main() {
  var numeros = lernumeros();
  calcularestatistica(numeros);
}

main();
