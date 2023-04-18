let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

function iniciarJuego() {
  let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
  sectionSeleccionarAtaque.style.display = "none";
  let sectionReiniciar = document.getElementById("reiniciar");
  sectionReiniciar.style.display = "none";

  let botonMascotaJugador = document.getElementById("boton-mascota");
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);

  let botonFuego = document.getElementById("boton-fuego");
  botonFuego.addEventListener("click", ataqueFuego);
  let botonAgua = document.getElementById("boton-agua");
  botonAgua.addEventListener("click", ataqueAgua);
  let botonTierra = document.getElementById("boton-tierra");
  botonTierra.addEventListener("click", ataqueTierra);

  let botonReiniciar = document.getElementById("boton-reiniciar");
  botonReiniciar.addEventListener("click", reiniciarJuego);
}

// Funcion para el jugador
function seleccionarMascotaJugador() {
  let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
  sectionSeleccionarAtaque.style.display = "block";
  let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota");
  sectionSeleccionarMascota.style.display = "none";

  let inputHipodoge = document.getElementById("hipodoge");
  let inputCapipepo = document.getElementById("capipepo");
  let inputRatigueya = document.getElementById("ratigueya");
  let spanMascotaJugador = document.getElementById("mascota-jugador");

  if (inputHipodoge.checked) {
    spanMascotaJugador.innerHTML = "Hipodoge";
  } else if (inputCapipepo.checked) {
    spanMascotaJugador.innerHTML = "Capipepo";
  } else if (inputRatigueya.checked) {
    spanMascotaJugador.innerHTML = "Ratigueya";
  }else {
    alert("Selecciona una mascota");
    location.reload();
  }
  
    seleccionarMascotaEnemigo();
  

  
}
// Funcion para el enemigo
function seleccionarMascotaEnemigo() {
  let mascotaAleatorio = aleatorio(1, 3);
  let spanMascotaEnemigo = document.getElementById("mascota-enemigo");
  if (mascotaAleatorio == 1) {
    spanMascotaEnemigo.innerHTML = "Hipodoge";
  } else if (mascotaAleatorio == 2) {
    spanMascotaEnemigo.innerHTML = "Carpino";
  } else if (mascotaAleatorio == 3) {
    spanMascotaEnemigo.innerHTML = "Ratigueya";
  }
}

//Funciones de combate
function ataqueAleatorioEnemigo() {
  let ataqueAleatorio = aleatorio(1, 3);

  if (ataqueAleatorio == 1) {
    ataqueEnemigo = "FUEGO";
  } else if (ataqueAleatorio == 2) {
    ataqueEnemigo = "AGUA";
  } else {
    ataqueEnemigo = "TIERRA";
  }
  crearMensaje();
}

function ataqueFuego() {
  ataqueJugador = "FUEGO";
  ataqueAleatorioEnemigo();
}

function ataqueAgua() {
  ataqueJugador = "AGUA";
  ataqueAleatorioEnemigo();
}

function ataqueTierra() {
  ataqueJugador = "TIERRA";
  ataqueAleatorioEnemigo();
}

function combate() {
  let spanVidasJugador = document.getElementById("vidas-jugador");
  let spanVidasEnemigo = document.getElementById("vidas-enemigo");

  if (ataqueJugador == ataqueEnemigo) {
    return "EMPATE!! 💥💥";
  } else if (
    (ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") ||
    (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") ||
    (ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA")
  ) {
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
    return "GANASTE!! 🤩🏆";
  } else {
    vidasJugador--;
    spanVidasJugador.innerHTML = vidasJugador;
    return "PERDISTE 😣";
  }
}

function revisarVidas() {
  if (vidasEnemigo == 0) {
    // Ganamos
    crearMensajeFinal("FELICITACIONES GANASTE!!");
  } else if (vidasJugador == 0) {
    //perdimos
    crearMensajeFinal("UNA LASTIMA PERDISTE 😕");
  }
}

//funciones para mostrar mensajes
function crearMensaje() {
  let sectionMensajes = document.getElementById("mensajes");
  let parrafo = document.createElement("p");
  parrafo.innerHTML =
    "Tu mascota ataco con " +
    ataqueJugador +
    ", las mascota del enemigo ataco con " +
    ataqueEnemigo +
    " -/" +
    combate() +
    "/";
  sectionMensajes.appendChild(parrafo);
  revisarVidas();
}

function crearMensajeFinal(resultado) {
  let sectionMensajes = document.getElementById("mensajes");
  let parrafo = document.createElement("p");

  parrafo.innerHTML = resultado;
  sectionMensajes.appendChild(parrafo);

  let botonFuego = document.getElementById("boton-fuego");
  botonFuego.disabled = true;
  let botonAgua = document.getElementById("boton-agua");
  botonAgua.disabled = true;
  let botonTierra = document.getElementById("boton-tierra");
  botonTierra.disabled = true;

  let sectionReiniciar = document.getElementById("reiniciar");
  sectionReiniciar.style.display = "block";
}

function reiniciarJuego() {
  location.reload();
}

function aleatorio(min, max) {
  let eleccion = Math.floor(Math.random() * (max - min + 1) + min);
  return eleccion;
}

window.addEventListener("load", iniciarJuego);
