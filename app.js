let numGerado = gerarNumAleatorio();
let numDigitado = parseInt(document.querySelector(`input`).value);

function editarHTML(tag, texto) {
  let tagHTML = document.querySelector(tag);
  tagHTML.innerHTML = texto;
}

editarHTML(`h1`, `Bem Vindo ao Jogo`);
editarHTML(`p`, `Digite um número de 1 a 10:`);

function gerarNumAleatorio() {
  let numAleatorio = Math.floor(Math.random() * 10) + 1;
  return numAleatorio;
}

function verificarNumeroAleatorio() {
  if (numDigitado == numGerado) {
    editarHTML(`h1`, `Você Acertou`);
    editarHTML(`p`, ``);
  } else if (numDigitado < numGerado) {
    editarHTML(`h1`, `Você Errou`);
    editarHTML(`p`, `Número digitado menor que o número secreto`);
  } else {
    editarHTML(`h1`, `Você Errou`);
    editarHTML(`p`, `Número digitado maior que o número secreto`);
  }
}
