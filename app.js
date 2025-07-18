// //Criando um variável para armazenar a tag H1 do HTML
// let txtTitulo = document.querySelector('h1')
// //Modificando a variável que esta armazenado o H1 do HTML, adicionando um texto
// txtTitulo.innerHTML = "Bem vindo ao Jogo"

// let txtParagrafo = document.querySelector('p')
// txtParagrafo.innerHTML = "Digite um número de 1 a 10"

//------------------------------------------------------------------------------------------------------------

function modificarHTML (tag, texto){
    let tagModificar = document.querySelector(tag)
    tagModificar.innerHTML = texto
}

modificarHTML(`p`, `Digite um número de 1 a 10`)
modificarHTML(`h1`, `Bem vindo ao Jogo`)


function gerarNumeroAleatorio(){
    let numAleatorio = Math.floor(Math.random() * 10) + 1
    return numAleatorio
}

<<<<<<< HEAD
let numeroAleatorio = gerarNumeroAleatorio()

function verificarNumeroAleatorio(){
    let numDigitado = document.querySelector('input').value
    
    if (numDigitado > numeroAleatorio){
        modificarHTML(`h1`, `Você Errou!`)
        modificarHTML(`p`, `Número digitado maior que o número secreto`)
    }else if(numDigitado < numeroAleatorio){
        modificarHTML(`h1`, `Você Errou!`)
        modificarHTML(`p`, `Número digitado menor que o número secreto`)
    }else{
        modificarHTML(`h1`, `Parabéns`)
        modificarHTML(`p`, `Você acertou o número secreto`)
    }
=======


function verificarNumeroAleatorio(){
    let numSecreto = 5
    
    let numDigitado = document.getElementsByClassName(`container__input`).value

    if(numDigitado > numSecreto){
        modificarHTML(`h1`, `Você Errou`)
        modificarHTML(`p`, `Número digitado maior que o número secreto`)
    }else if(numDigitado < numSecreto){
        modificarHTML(`h1`, `Você Errou`)
        modificarHTML(`p`, `Número digitado menor que o número secreto`)
    }else{
        modificarHTML(`h1`, `Você Acertou`)
        modificarHTML(`p`, ``)
    }
        
>>>>>>> e4c4e1c1670c34fed3abd765dcfb55e797bb15e4
}


