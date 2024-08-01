
import leia from "readline-sync"

//Você deve desenvolver um programa para verificar se um baralho de cartas está viciado. O baralho possui 52 cartas, divididas igualmente 
//entre quatro naipes: copas, espadas, ouros e paus. O algoritmo deve fazer o sorteio fazer 1000 sorteios de naipes e contar quantas
//vezes cada naipe foi sorteado em uma série de sorteios e verificar se algum naipe tem uma frequência maior que 30%. Se houver, o programa
//deve indicar que o baralho pode estar viciado. 




function verificarVicioBaralho(numSorteios) {
    var naipes = ['copas', 'espadas', 'ouros', 'paus'];
    var contagens = { 'copas': 0, 'espadas': 0, 'ouros': 0, 'paus': 0 };
  
   
    for (var i = 0; i < numSorteios; i++) {
      var indiceAleatorio = Math.floor(Math.random() * naipes.length);
      var naipeSorteado = naipes[indiceAleatorio];
      contagens[naipeSorteado]++;
    }
  
    
    var limite = numSorteios * 0.30;
    var viciado = false;
  
    console.log('frequencia dos naipes:');
    for (var naipe in contagens) {
      var frequencia = contagens[naipe];
      var porcentagem = (frequencia / numSorteios) * 100;
      console.log(`${naipe}: ${frequencia} vezes (${porcentagem.toFixed(2)}%)`);
      if (frequencia > limite) {
        viciado = true;
      }
    }
  
    return viciado;
  }
  
  
  function principal() {
    var numSorteios = 1000; 
    var estaViciado = verificarVicioBaralho(numSorteios);
  
    if (estaViciado) {
      console.log('O baralho pode estar viciado.');
    } else {
        console.log("----------------------------");
      console.log('O baralho parece estar justo.');
    }
  }console.log("----------------------------");
  
  
  principal();
  