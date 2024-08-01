
import leia from "readline-sync"
//Escreva um algoritmo que gere uma senha aleatória de comprimento especificado pelo usuário. 
//Você deve solicitar ao usuário o tamanho da senha e gerar de forma aleatório. A senha deve conter uma combinação de letras maiúsculas, minúsculas, números e caracteres especiais.


function gerarsenha(tamanho) {
  var aleatorio = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&';
  var senha = '';

  for (var i = 0; i < tamanho; i++) {
    var randomIndex = Math.floor(Math.random() * aleatorio.length);
    senha += aleatorio[randomIndex];
  }

  return senha;
}


function main() {
  var length = parseInt(leia.question('Digite o comprimento desejado para a senha: '), 10);

  if (isNaN(length) || length <= 0) {
    console.log('digite um número inteiro positivo.');
    return;
  }

  
  var senha = gerarsenha(length);
  console.log('Sua senha gerada é: ' + senha);
}


main();









