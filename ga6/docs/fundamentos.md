# Fundamentos aplicados en AutoFacture

Fecha de elaboración: **9 de noviembre de 2026 · Colombia (America/Bogota)**.

Estos fragmentos corresponden a los archivos construidos. Las explicaciones describen decisiones del proyecto y quedan para revisión del aprendiz; no se presentan como palabras ni pruebas realizadas por él.

## HTML: estructura común y carga ordenada
En index.html y las demás páginas se enlaza una sola hoja y dos scripts clásicos:

```html
<link rel="stylesheet" href="styles.css">
<script src="js/modelo.js" defer></script><script src="js/aplicacion.js" defer></script>
```

La hoja da la misma apariencia a todas las pantallas. defer permite esperar a que el HTML esté disponible y mantiene el modelo antes de la aplicación. No se cargan frameworks ni recursos de CDN.

Cada página tiene header, nav, main y footer. El enlace «Saltar al contenido» apunta a main con id contenido. El título y los códigos P/RF/HU están en el HTML; el contenido que cambia se agrega dentro de vista.

## HTML: etiquetas y mensajes asociados
En componentes.html está este ejemplo real:

```html
<label for="condicion">Condición (obligatoria)</label>
<input id="condicion" type="text" required maxlength="80" aria-describedby="ayuda-condicion error-condicion">
```

El for coincide con el id del campo. aria-describedby relaciona la ayuda y el mensaje de error. En las interfaces funcionales, la función campo de aplicacion.js crea la misma relación con identificadores propios; formulario muestra el error junto al campo y solicita el foco allí. No se depende de una alerta que desaparece sin indicar el campo.

## CSS: variables y estilos compartidos
En styles.css:

```css
:root {
  --azul: #16324F;
  --verde: #20644F;
  --blanco: #FFFFFF;
```

Este fragmento es el inicio del bloque :root. Sus colores se usan con var(). Si se cambia la paleta, no hay que buscar el mismo valor en quince archivos. La clase boceto redefine unas variables dentro de la misma hoja para conservar grises solo en prototipo/.

## CSS: distribución adaptable
El bloque real de styles.css incluye:

```css
@media (max-width: 48rem) {
  .nav-escritorio { display: none; }
  .nav-movil { display: block; width: 100%; }
  .nav-movil .menu { flex-direction: column; padding-top: .5rem; }
  .rejilla { grid-template-columns: 1fr; }
```

Es el inicio de la regla para anchos pequeños. El menú pasa a details/summary y las tarjetas quedan en una columna. Las tablas tienen su propia región desplazable. Esto prepara la distribución para celular; La revisión real en navegador la está realizando otro asistente, por separado. No se atribuye a Sebastián ni al asistente que prepara este ZIP, ni se declara completada aquí.

## JavaScript: conservar versiones
Fragmento de corregir en js/modelo.js:

```js
f.version += 1;
f.versiones.push({ version: f.version, datos: d });
f.estado = 'Pendiente de corrección';
```

Después de validar los nuevos datos y descartar duplicados, se agrega otra versión en lugar de sobrescribir la anterior. Las revisiones conservan el número de versión al que pertenecen. Por eso una revisión de la versión 1 no permite avanzar con la versión 2. El historial puede mostrar ambas.

## JavaScript: modelo separado de la pantalla
El modelo ofrece funciones como revisar, asignar, corregir, transicion e importar. También comprueba roles y condiciones. No basta con esconder un botón: una operación no autorizada se rechaza en el modelo de demostración.

La aplicación crea elementos con document.createElement y asigna el contenido a textContent. Los nombres de proveedor y textos de un JSON no se insertan con innerHTML. Un texto que parezca una etiqueta se muestra como texto y no se ejecuta.

Cada cambio se aplica sobre una copia del estado. Al guardar se comprueba que la revisión del almacenamiento no cambió, se escribe un único JSON en localStorage y se actualiza la vista. Las demás páginas del mismo origen leen ese conjunto. No se promete una base de datos ni concurrencia segura de servidor: otra pestaña obliga a recargar si tiene datos anteriores.

## JavaScript: CSV de las filas filtradas y protección
En js/modelo.js:

```js
function celdaCSV(v) {
    let x = String(v ?? '');
    if (/^[\s\u0000-\u0020\uFEFF]*[=+@-]/.test(x) || /^[\t\r\n]/.test(x)) x = "'" + x;
    return '"' + x.replace(/"/g, '""') + '"';
  }
```

La función convierte cada dato en una celda entre comillas y duplica las comillas que ya traía el texto. Si la celda comienza con un signo que podría interpretarse como fórmula, incluso después de espacios o caracteres de control, agrega un apóstrofo. El CSV se genera con las mismas filas calculadas por los filtros aplicados, no con el archivo fijo de GA5. El importe exportado usa dos decimales sin separadores de miles; representa el mismo valor mostrado.

## Datos y límites
Los totales se acumulan por moneda usando centavos enteros. No se suman COP, USD y EUR como si fueran lo mismo. No hay conversión ni tasas tributarias. REV-DEMO-01 solo produce resultados ficticios claramente rotulados. El corte y la hora de eventos son simulados y visibles.

Las pruebas de Node y DOM simulado descritas en verificacion.md comprueban lógica y conexión entre componentes. No demuestran apariencia, teclado real, lector de pantalla ni experiencia en celular.

## Referencias técnicas reales en español
- MDN Web Docs. «label». https://developer.mozilla.org/es/docs/Web/HTML/Reference/Elements/label
- MDN Web Docs. «Uso de propiedades personalizadas (variables) en CSS». https://developer.mozilla.org/es/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties
- MDN Web Docs. «Crear enlaces». https://developer.mozilla.org/es/docs/Learn_web_development/Core/Structuring_content/Creating_links
- MDN Web Docs. «details». https://developer.mozilla.org/es/docs/Web/HTML/Reference/Elements/details

Las fuentes se usan como apoyo técnico. Los ejemplos y fragmentos de este documento son del proyecto entregado.

## Ajuste: revisión repetida sin retroceder el trámite
En revisar, de js/modelo.js, se conserva esta condición antes de guardar la revisión:

```js
const conservarTramite = f.estado === 'En trámite' && vigente(f);
```

Solo una revisión válida mantiene ese avance. La decisión de estado sigue dando prioridad a Pendiente y Rechazada preliminarmente. Una corrección crea otra versión, queda pendiente y no cumple esa condición: necesita nueva revisión. La nueva revisión y su evento se conservan aunque el estado continúe En trámite.

## Ajuste: filtros en columnas y textos largos
El styles.css compartido contiene:

```css
@media (min-width: 48.01rem) {
  .formulario-filtros { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (min-width: 64rem) {
  .formulario-filtros { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}
```

La base de formulario-filtros es una columna y no tiene el límite de 42rem de los formularios de edición. minmax(0, 1fr) permite que una columna se reduzca sin imponer el ancho de un texto largo. Los errores siguen junto al campo y el orden del HTML no se cambia. Los bloques pre conservan pre-wrap, overflow-wrap y desplazamiento interno: un JSON extenso no necesita ampliar toda la página. Son reglas implementadas y comprobadas estáticamente; su aspecto en navegador corresponde a la revisión del otro asistente.

## Ajuste: formato visible sin cambiar los datos
La función datosTabla usa un mapa de nombres claros y el formateador dinero(v, d.moneda) para Total informado. Esto también se aplica a las versiones anteriores al consultarlas. La función solo construye una tabla para mostrarla: no modifica los importes, identidades ni versiones almacenados, ni calcula impuestos.
