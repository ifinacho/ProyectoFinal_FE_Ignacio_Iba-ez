let divdatos = document.getElementsByClassName("divMain");
let botonesOcultar = document.getElementsByClassName("botonOcultar");
let botonesMostrar = document.getElementsByClassName("botonMostrar");


for(let i = 0; i < botonesOcultar.length; i++) {
    let botonOcultar = botonesOcultar[i];
    for(let j = 0; j < divdatos.length; j++) {
        let divDato = divdatos[j];
        if(botonOcultar.classList[1] == divDato.classList[1]){
            botonOcultar.onclick = () => divDato.style.display = "none";
        }
    }
}
for(let i = 0; i < botonesMostrar.length; i++) {
    let botonMostrar = botonesMostrar[i];
    for(let j = 0; j < divdatos.length; j++) {
        let divDato = divdatos[j];
        if(botonMostrar.classList[1] == divDato.classList[1]){
            botonMostrar.onclick = () => divDato.style.display = "";
        }
    }
}


