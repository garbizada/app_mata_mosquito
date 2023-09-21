
var altura = 0              // inicio
var largura = 0

function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(altura,largura)
}

ajustaTamanhoPalcoJogo()   // fim codigo para ajuste de tamanho de tela


function posicaoRandomica(){
    var posicaoX = Math.floor(Math.random() * largura) - 90  // -90 serve pra impedir que a mosca saia da visão da tela
    var posicaoY = Math.floor(Math.random() * altura) - 90 // randomizando o aparecimento dos mosquitos

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)     

    var mosquito = document.createElement('img')
    mosquito.src = "./imagens/imagens/mosca.png" 
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + "px"
    mosquito.style.top = posicaoY + "px"
    mosquito.style.position = "absolute"



    document.body.appendChild(mosquito)        // criando elemento HTML

} 

function tamanhoAleatorio() {           // randomizando as moscas para mais dinamismo
    var classe = Math.floor(Math.random() * 3)

    switch(classe){
        case 0 :
            return 'mosquito1'

        case 1 :
            return 'mosquito2'

        case 2 : 
            return 'mosquito3'


    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)

    switch(classe){
        case 0 :
            return 'lado_a'

        case 1 :
            return 'lado_b'


    }


}
