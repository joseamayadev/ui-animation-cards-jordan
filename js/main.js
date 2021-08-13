// Registro de variables para mis elementos html (no recomendado para un ambiente en producción)
var btnCeleste = document.querySelector("#celeste");
var btnRojo = document.querySelector("#rojo");
var btnMorado = document.querySelector("#morado");


// Registro de eventos
btnCeleste.addEventListener("click", () => {
    document.getElementById("imagen").src = "img/awesome-shoes-celeste.png";
});

btnRojo.addEventListener("click", () => {
    document.getElementById("imagen").src = "img/awesome-shoes-red.png";
});

btnMorado.addEventListener("click", () => {
    document.getElementById("imagen").src = "img/awesome-shoes-violet.png";
});