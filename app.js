// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let ingresoAmigos = document.getElementById ("amigo");
let listaAmigos = document.getElementById("listaAmigos");
let eleccionAmigo;
let resultadoAmigo;
let mensajeResultado = document.getElementById("resultado");

function limpiarCaja(){
    document.getElementById("amigo").value = '';
}
function agregarAmigo(){
    if(!ingresoAmigos.value){
        alert("Por favor, inserte un nombre");
    } else{
        amigos.push(ingresoAmigos.value);
        listaAmigos.innerHTML += `<li>${ingresoAmigos.value}</li>`;
    }
    limpiarCaja();
}

function sortearAmigo(){
    eleccionAmigo = Math.floor(Math.random() * amigos.length)
    resultadoAmigo = amigos[eleccionAmigo];
    mensajeResultado.innerHTML = `<li>El amigo secreto es: ${resultadoAmigo}</li>`
}
