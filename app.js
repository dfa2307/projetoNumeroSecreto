let tentativas = 0
let palavra = tentativas == 1 ? `Tentativa` : `Tentativas`
let numDigitado = document.querySelector(`input`);
let newGame = document.getElementById(`reiniciar`)

function editarHTML(tag, texto) {
  let tagHTML = document.querySelector(tag);
  tagHTML.innerHTML = texto;
}

editarHTML(`h1`, `Bem Vindo ao Jogo`);
editarHTML(`p`, `Digite um número de 1 a 10:`);

function gerarNumAleatorio() {
  let numAleatorio = Math.floor(Math.random() * 10) + 1;
  return numAleatorio
}

let numSecreto = gerarNumAleatorio()

function verificarNumeroAleatorio() {
  
  if (numDigitado.value == numSecreto) {
    editarHTML(`h1`, `Você Acertou`);
    editarHTML(`p`, `${palavra} : ${tentativas}`);
    newGame.disabled = false;
  } else if (numDigitado.value < numSecreto) {
    editarHTML(`h1`, `Você Errou`);
    editarHTML(`p`, `Número digitado menor que o número secreto`);
  } else {
    editarHTML(`h1`, `Você Errou`);
    editarHTML(`p`, `Número digitado maior que o número secreto`);
  }

  tentativas += 1
}

function reiniciar(){
  editarHTML(`h1`, `Bem Vindo ao Jogo`);
  editarHTML(`p`, `Digite um número de 1 a 10:`);
  numDigitado.value = ``;
}