export function mostrarMensaje(elemento, texto) {
  elemento.textContent = texto;
}

export function alternarSeccion(boton, seccion) {
  const oculta = seccion.classList.toggle("oculto");

  boton.setAttribute("aria-expanded", String(!oculta));
  boton.textContent = oculta ? "Ver más información" : "Ocultar información";
}

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

export function pintarCaracteristicas(lista, caracteristicas) {
  lista.replaceChildren(...caracteristicas.map(crearTarjeta));
}

function normalizar(texto) {
  return texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export function filtrarCaracteristicas(caracteristicas, busqueda) {
  const termino = normalizar(busqueda.trim());
  if (termino === "") return caracteristicas;

  return caracteristicas.filter(({ nombre, descripcion }) =>
    normalizar(nombre).includes(termino) || normalizar(descripcion).includes(termino)
  );
}

export function actualizarEstadoBusqueda(contador, avisoSinResultados, mostradas, total) {
  contador.textContent = `${mostradas} de ${total} paneles`;
  avisoSinResultados.classList.toggle("oculto", mostradas > 0);
}
