import leia from "readline-sync"
//Escreva um algoritmo que receba 5 nomes e 5 idades do usuário, armazene essas informações em dois vetores, 
//e depois exiba o nome e a idade da pessoa mais velha e da pessoa mais nova.
function principal() {
  var nomes = [];
  var idades = [];
  
  for (var i = 0; i < 5; i++) {
    nomes[i] = leia.question('Digite o nome da pessoa ' + (i + 1) + ': ');
    idades[i] = parseInt(leia.question('Digite a idade de ' + nomes[i] + ': '), 10);
  }

  var indiceMaisVelho = 0;
  var indiceMaisNovo = 0;

  for (var i = 1; i < 5; i++) {
    if (idades[i] > idades[indiceMaisVelho]) {
      indiceMaisVelho = i;
    }
    if (idades[i] < idades[indiceMaisNovo]) {
      indiceMaisNovo = i;
    }
  }

  console.log('A pessoa mais velha é ' + nomes[indiceMaisVelho] + ' com ' + idades[indiceMaisVelho] + ' anos.');
  console.log('A pessoa mais nova é ' + nomes[indiceMaisNovo] + ' com ' + idades[indiceMaisNovo] + ' anos.');
}

principal();


