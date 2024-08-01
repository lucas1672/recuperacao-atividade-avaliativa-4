//Escreva um algoritmo que solicite ao usuário um texto ou palavra e ele conte quantas consoantes esse texto ou palavra tem.
 //Vale lembrar que toda String (texto), nada mais é do que um vetor de caracteres.

 import leia from "readline-sync"
 

function contarconsoantes(texto) {
  var consoantes = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
  var contar = 0;

  
  var  caracteristicas = texto.split('');

  
  for (var i = 0; i <  caracteristicas.length; i++) {
    if (consoantes.indexOf( caracteristicas[i]) !== -1) {
      contar++;
    }
  }

  return contar;
}

function main() {
 
  var usuario = leia.question('Digite um texto ou palavra: ');

  var consoantes = contarconsoantes(usuario);

  console.log('O número de consoantes no texto fornecido é: ' + consoantes);
}

main();
