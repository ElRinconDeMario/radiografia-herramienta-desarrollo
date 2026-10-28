# Radiografía de una herramienta de desarrollo: Chrome DevTools

Página informativa sobre **Chrome DevTools**, las herramientas para desarrolladores integradas en Google Chrome.
Sirven para inspeccionar y editar HTML y CSS en vivo, depurar JavaScript, analizar la red y medir el rendimiento.
La interacción está hecha solo con JavaScript y la API DOM del navegador, sin frameworks ni bibliotecas.

Práctica del Tema 5 de *Desarrollo Web en Entorno Cliente* (2.º DAW).

## Cómo ejecutarla

La página usa módulos ES (`<script type="module">`), así que **hay que abrirla desde un servidor local**.
Si se abre con doble clic (`file://`), el navegador bloquea los módulos.

**Opción 1: Python**

```bash
python -m http.server 8000
```

Después abre <http://localhost:8000> en el navegador.

**Opción 2: Visual Studio Code**

Instala la extensión *Live Server*, haz clic derecho en `index.html` y elige **Open with Live Server**.

## Estructura

```
index.html          Estructura semántica (header, main, footer)
css/estilos.css     Estilos
js/main.js          Punto de entrada: selecciona elementos y registra los eventos
js/datos.js         Array de características (nombre, categoría, descripción)
js/interfaz.js      Funciones que modifican el DOM
README.md
```

## Funcionalidades añadidas

- **Fase A, mensaje en la página:** el botón «Probar la consola» tiene dos manejadores `click` registrados con `addEventListener`.
  Uno actualiza un mensaje visible con `textContent` y el otro registra la interacción en la consola.
- **Fase B, mostrar y ocultar:** el botón «Mostrar información ampliada» alterna la clase `oculto` con `classList.toggle`.
  Así se muestra u oculta la sección de instalación, ventajas y extensiones, y el botón actualiza su texto y `aria-expanded`.
- **Fase C, contenido generado:** las 8 tarjetas se crean desde el array de `datos.js` con `createElement`, `textContent` y `append`.
  No están escritas en el HTML.
- **Fase D, búsqueda:** el campo «Buscar por nombre o descripción» filtra las tarjetas mientras se escribe, sin distinguir mayúsculas ni tildes.
  Muestra un contador de resultados y un aviso cuando no hay coincidencias.

Todos los controles son botones o campos de formulario nativos, así que la página se puede usar entera con el teclado.

## Cliente y servidor

El servidor local solo entrega archivos estáticos: `index.html`, `estilos.css` y los módulos `main.js`, `datos.js` e `interfaz.js`.
El cliente (el navegador) interpreta el HTML, aplica el CSS y descarga los módulos que importa `main.js`.
Después ejecuta todo el JavaScript: registra los eventos, genera las tarjetas y filtra la búsqueda sin pedir nada más al servidor.
Para comprobarlo abrí DevTools → pestaña **Red**, marqué *Desactivar caché* y recargué la página.
Aparecen las peticiones del documento, la hoja de estilos y los tres scripts de tipo módulo, todas con estado **200**, y la consola no muestra errores.

![Pestaña Red con las peticiones de HTML, CSS y módulos JS](docs/captura-red.png)
