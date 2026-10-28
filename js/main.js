import { mostrarMensaje } from "./interfaz.js";

// --- Selección de elementos ---
const botonSaludo = document.querySelector("#btn-saludo");
const mensaje = document.querySelector("#mensaje");

// --- Fase A: dos manejadores para el mismo clic ---
let pulsaciones = 0;

// Manejador 1: actualiza el mensaje visible en la página.
botonSaludo.addEventListener("click", () => {
  pulsaciones++;
  mostrarMensaje(
    mensaje,
    `¡Hola desde Chrome DevTools! Has pulsado el botón ${pulsaciones} ${pulsaciones === 1 ? "vez" : "veces"}.`
  );
});

// Manejador 2: registra la interacción en la consola.
botonSaludo.addEventListener("click", (evento) => {
  console.log(`[Interacción] Clic en #${evento.currentTarget.id} a las ${new Date().toLocaleTimeString()}`);
});
