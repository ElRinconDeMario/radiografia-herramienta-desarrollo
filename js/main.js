import { caracteristicas } from "./datos.js";
import {
  mostrarMensaje,
  alternarSeccion,
  pintarCaracteristicas,
  filtrarCaracteristicas,
  actualizarEstadoBusqueda
} from "./interfaz.js";

const botonSaludo = document.querySelector("#btn-saludo");
const mensaje = document.querySelector("#mensaje");
const botonAmpliada = document.querySelector("#btn-ampliada");
const infoAmpliada = document.querySelector("#info-ampliada");
const listaCaracteristicas = document.querySelector("#lista-caracteristicas");
const formBusqueda = document.querySelector("#form-busqueda");
const campoBusqueda = document.querySelector("#busqueda");
const contador = document.querySelector("#contador");
const avisoSinResultados = document.querySelector("#sin-resultados");

let pulsaciones = 0;

botonSaludo.addEventListener("click", () => {
  pulsaciones++;
  const veces = pulsaciones === 1 ? "vez" : "veces";
  mostrarMensaje(mensaje, `¡Hola! Has pulsado el botón ${pulsaciones} ${veces}. Mira también la consola.`);
});

botonSaludo.addEventListener("click", () => {
  console.log(`Botón pulsado (${pulsaciones}) a las ${new Date().toLocaleTimeString()}`);
});

botonAmpliada.addEventListener("click", () => {
  alternarSeccion(botonAmpliada, infoAmpliada);
});

function mostrarCaracteristicas(busqueda) {
  const resultado = filtrarCaracteristicas(caracteristicas, busqueda);
  pintarCaracteristicas(listaCaracteristicas, resultado);
  actualizarEstadoBusqueda(contador, avisoSinResultados, resultado.length, caracteristicas.length);
}

campoBusqueda.addEventListener("input", () => {
  mostrarCaracteristicas(campoBusqueda.value);
});

formBusqueda.addEventListener("submit", (evento) => {
  evento.preventDefault();
});

mostrarCaracteristicas("");
