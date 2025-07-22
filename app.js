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
  let numDigitado = document.querySelector(`input`);

  if (numDigitado.value == numSecreto) {
    editarHTML(`h1`, `Você Acertou`);
    editarHTML(`p`, ``);
  } else if (numDigitado.value < numSecreto) {
    editarHTML(`h1`, `Você Errou`);
    editarHTML(`p`, `Número digitado menor que o número secreto`);
  } else {
    editarHTML(`h1`, `Você Errou`);
    editarHTML(`p`, `Número digitado maior que o número secreto`);
  }
}
