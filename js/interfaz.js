// Funciones que manipulan el DOM. No registran eventos: de eso se encarga main.js.

/**
 * Escribe un texto en el elemento indicado usando textContent.
 */
export function mostrarMensaje(elemento, texto) {
  elemento.textContent = texto;
}
