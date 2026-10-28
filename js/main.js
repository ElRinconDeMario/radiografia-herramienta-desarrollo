import { caracteristicas } from "./datos.js";
import {
  mostrarMensaje,
  alternarSeccion,
  pintarCaracteristicas,
  filtrarCaracteristicas,
  actualizarEstadoBusqueda
} from "./interfaz.js";

// --- Selección de elementos ---
const botonSaludo = document.querySelector("#btn-saludo");
const mensaje = document.querySelector("#mensaje");
const botonAmpliada = document.querySelector("#btn-ampliada");
const infoAmpliada = document.querySelector("#info-ampliada");
const listaCaracteristicas = document.querySelector("#lista-caracteristicas");
const formBusqueda = document.querySelector("#form-busqueda");
const campoBusqueda = document.querySelector("#busqueda");
const contador = document.querySelector("#contador");
const avisoSinResultados = document.querySelector("#sin-resultados");

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

// --- Fase B: mostrar y ocultar la información ampliada ---
botonAmpliada.addEventListener("click", () => {
  alternarSeccion(botonAmpliada, infoAmpliada);
});

// --- Fases C y D: tarjetas generadas desde el array y filtradas al escribir ---
function mostrarCaracteristicas(busqueda) {
  const resultado = filtrarCaracteristicas(caracteristicas, busqueda);
  pintarCaracteristicas(listaCaracteristicas, resultado);
  actualizarEstadoBusqueda(contador, avisoSinResultados, resultado.length, caracteristicas.length);
}

campoBusqueda.addEventListener("input", () => {
  mostrarCaracteristicas(campoBusqueda.value);
});

// Pulsar Intro en el campo no debe recargar la página.
formBusqueda.addEventListener("submit", (evento) => {
  evento.preventDefault();
});

mostrarCaracteristicas("");
