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

/**
 * Crea la tarjeta (<li>) de una característica con createElement y textContent.
 */
function crearTarjeta({ nombre, categoria, descripcion }) {
  const tarjeta = document.createElement("li");
  tarjeta.classList.add("tarjeta");

  const titulo = document.createElement("h3");
  titulo.textContent = nombre;

  const etiqueta = document.createElement("span");
  etiqueta.classList.add("tarjeta__categoria");
  etiqueta.textContent = categoria;

  const texto = document.createElement("p");
  texto.textContent = descripcion;

  tarjeta.append(titulo, etiqueta, texto);
  return tarjeta;
}

/**
 * Sustituye el contenido de la lista por las tarjetas de las características recibidas.
 */
export function pintarCaracteristicas(lista, caracteristicas) {
  lista.replaceChildren(...caracteristicas.map(crearTarjeta));
}
