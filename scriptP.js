let sound  = new Audio('Audio-de-mati.mp3');

//var sonido = document.getElementById("sonido");


sonido.addEventListener("click",()=>{
	sound.play();

})

sonido2.addEventListener("click",()=>{
	sound.pause();

})