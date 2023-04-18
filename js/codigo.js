function aleatorio(min, max) {
  let eleccion = Math.floor(Math.random() * (max - min + 1) + min);
  return eleccion;
}
function eleccion(ente, jugado) {
  if (jugado == 1) {
    alert(ente + "Piedra 🥌");
  } else if (jugado == 2) {
    alert(ente + "Papel 📄");
  } else if (jugado == 3) {
    alert(ente + "Tijera ✂");
  } else {
    alert("Mal Elegido");
  }
}
function combate() {
  let jugador = 0;
  let min = 1;
  let max = 3;
  let pc = aleatorio(min, max);
  jugador = prompt("Elige 1 para piedra 🥌, 2 para papel 📄, 3 para tijera ✂");
  eleccion("Jugador elige ", jugador);
  eleccion("Pc elige ", pc);
  if (jugador == pc) {
    return "EMPATE!!";
    return 0;
  } else if (
    (jugador == 1 && pc == 3) ||
    (jugador == 2 && pc == 1) ||
    (jugador == 3 && pc == 2)
  ) {
    return "GANASTE!!";
  } else {
    return "PERDISTE";
  }
}
// 1 es piedra, 2 es papel, 3 es tijera
let resultado = "";
let victorias = 0;
let perdidas = 0;
while (victorias < 3 && perdidas < 3) {
  //COMBATE
  resultado = combate();
  if (resultado != "EMPATE!!") {
    if (resultado != "PERDISTE") {
      victorias++;
    } else {
      perdidas++;
    }
  }
  alert("Perdidas " + perdidas + " Victorias " + victorias);
}
