var width = 0      //Largura
var height = 0     //Altura


//Ajuste do tamanho da tela para o jogo
function sreenAdjustmentGame() {
    width = window.innerWidth
    height = innerHeight
}

//Define qual classe colocar no elemento do Mosquito
function sizeRandom() {

    var classNumber = Math.floor(Math.random() * 3)

    switch(classNumber){
        case 0:
            return 'mosquito1'
        
        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3'
    }

}

//Define qual a direção do Mosquito
function sideRandom() {

    var number = Math.floor(Math.random() * 2)

    switch(number){
        case 0:
            return 1
        
        case 1:
            return -1
    }

}

//Define uma posição aleatória para a imagem do mosquito
function positionRandom() {

    if(document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
    }

    var positionAxisX = Math.floor(Math.random() * width) - 90
    var positionAxisY = Math.floor(Math.random() * height) - 90

    positionAxisX = positionAxisX < 0 ? 0 : positionAxisX
    positionAxisY = positionAxisY < 0 ? 0 : positionAxisY

    var mosquito = document.createElement('img')
    mosquito.src            = 'imagens/mosca.png'
    mosquito.id             = 'mosquito'
    mosquito.className      = sizeRandom()
    mosquito.style.left     = positionAxisX + 'px'
    mosquito.style.top      = positionAxisY + 'px'
    mosquito.style.transform = 'scaleX(' + sideRandom() + ')'
    mosquito.style.position  = 'absolute'

    document.body.appendChild(mosquito)

}



sreenAdjustmentGame()

setInterval(()=>{
    positionRandom()
}, 1000)

