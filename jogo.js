var altura = 0
var largura = 0
var vidas = 1
var tempo = 10
var Qtd_Mosquitos_Mortos = 0
var criaMosquitoTempo = 1500

nivel = window.location.search
nivel = nivel.replace('?','')

if(nivel == 'normal') {
	criaMosquitoTempo = 1500
} else if (nivel == 'mediano') {
   criaMosquitoTempo = 1000
} else if (nivel == 'dificil'){
	criaMosquitoTempo = 850
}


function ajustaTamanhoPalcoJogo(){

altura = window.innerHeight
largura = window.innerWidth
console.log(altura,largura)
}
ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function() {
	 tempo = tempo - 1;
	 if(tempo<0) {
	 	clearInterval(cronometro)
	 	clearInterval(criaMosca)
        window.location.href = 'vitoria.html'  
	 }else {
    document.getElementById('cronometro').innerHTML = tempo
     }
},1000)



function posicaoRandomica() {

// remover o mosquito anterior(caso exista)
if(document.getElementById('mosquito')) {
	document.getElementById('mosquito').remove()
   
     if(vidas > 3) {
     	window.location.href="fim_de_jogo.html"
     }else {
   document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"
   vidas++
}
}

var posicaoX = Math.floor(Math.random() * largura) - 90
var posicaoY = Math.floor(Math.random() * altura) - 90

posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY

console.log(posicaoX,posicaoY) 

// criar o elemento html

var mosquito = document.createElement('img')
mosquito.src = 'imagens/mosca.png'
mosquito.className = TamanhoAleatorio() + ' ' + ladoAleatorio()
mosquito.style.left = posicaoX + 'px'
mosquito.style.top = posicaoY + 'px'
mosquito.style.position = 'absolute'
mosquito.id = 'mosquito'
mosquito.onclick = function() {
	this.remove()
	Qtd_Mosquitos_Mortos++ // adiciona um valor na quantidade de mosquitos mortos
	document.getElementById('qtd_mortos').innerHTML = Qtd_Mosquitos_Mortos // atualiza a quantidade
}

document.body.appendChild(mosquito)



}

function TamanhoAleatorio(){
	var classe = Math.floor(Math.random() * 3)
	
	switch(classe){
		case 0:
           return 'mosquito1'
		case 1:
           return 'mosquito2'
		case 2:
           return 'mosquito3'

	}
}

function ladoAleatorio() {
	var classe = Math.floor(Math.random() * 2)

	switch(classe) {

		case 0:
		return 'ladoA'

		case 1:
		return 'ladoB'

	}
}

function playSong(){
	var audio = new Audio('./musicas/toque.mp3')
	audio.addEventListener('canplaythrough',function(){
		audio.play()
		audio.loop = true
	})
}
playSong(); 