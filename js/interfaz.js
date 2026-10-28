// Funciones que manipulan el DOM. No registran eventos: de eso se encarga main.js.

/**
 * Escribe un texto en el elemento indicado usando textContent.
 */
export function mostrarMensaje(elemento, texto) {
  elemento.textContent = texto;
}

/**
 * Muestra u oculta una sección con classList y sincroniza el botón
 * (texto y aria-expanded) con el nuevo estado.
 */
export function alternarSeccion(boton, seccion) {
  const estaOculta = seccion.classList.toggle("oculto");
  const expandida = !estaOculta;

  boton.setAttribute("aria-expanded", String(expandida));
  boton.textContent = expandida ? "Ocultar información ampliada" : "Mostrar información ampliada";
}
