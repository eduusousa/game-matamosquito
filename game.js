var width = 0      //Largura
var height = 0     //Altura

var lifes = 1
var points = 0
var timer = 30

var criacaoMosquito = 2000

document.getElementById('time').innerHTML = timer
document.getElementById('score').innerHTML = points


let dificuldade = window.location.search
dificuldade = dificuldade.replace('?', '')

if(dificuldade === ""){
    alert("Selecione um nível...")
    window.location.href = 'index.html'
}

if(dificuldade === 'facil') {
    criacaoMosquito = 2000

} else if(dificuldade === 'medio'){
    criacaoMosquito = 1000

} else if(dificuldade === 'dificil'){
    criacaoMosquito = 900
}


function startGame() {
    let nivel = document.getElementById('nivel').value
    window.location.href = 'main.html?' + nivel
}


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


var cronometro = setInterval(function(){
    timer--
    if(timer < 0){
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'winner.html'
    }   else {
        document.getElementById('time').innerHTML = timer
    }
}, 1000)


//Define uma posição aleatória para a imagem do mosquito
function positionRandom() {

    if(document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        if(lifes > 3){
            window.location.href = 'game-over.html'
        } else {
            document.getElementById('life' + lifes).src = "imagens/coracao_vazio.png"
            lifes++
        }

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

    mosquito.onclick = function(){
        points++
        document.getElementById('score').innerHTML = points
        this.remove()
    }

    document.body.appendChild(mosquito)

}


sreenAdjustmentGame()
var criaMosquito = setInterval(()=>{
    positionRandom()
}, criacaoMosquito)

