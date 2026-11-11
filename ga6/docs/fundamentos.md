# Fundamentos aplicados en AutoFacture

Revisión final: **10 de noviembre de 2026 · Colombia (America/Bogota)**.


Fecha de entrega: **9 de noviembre de 2026 · Colombia (America/Bogota)**.

Se conservan las decisiones aprobadas para la entrega: HTML, CSS y JavaScript puro, una sola hoja styles.css, plantilla y componentes reutilizables. Las quince interfaces están construidas. Este documento explica fragmentos exactos de sus archivos actuales; cuando se muestra solo el inicio de un bloque se indica expresamente. No se cambia el código ni los datos.

## HTML: organizar la pantalla
HTML da estructura y significado al contenido. En index.html aparece esta apertura de cabecera:

```html
<header class="cabecera">
```

header agrupa la presentación de AutoFacture: marca, identidad ficticia y menú. No es el título del documento; ese título se define con title. La cabecera ayuda a reconocer el sistema en todas las pantallas.

El menú principal comienza con esta etiqueta real del mismo archivo:

```html
<nav class="menu" aria-label="Navegación principal">
```

nav identifica un grupo de enlaces de navegación, por ejemplo Bandeja, Reportes e Historial. aria-label le da un nombre al grupo para tecnologías de asistencia. El menú móvil usa otro grupo llamado «Navegación móvil».

El contenido principal comienza así en index.html:

```html
<main id="contenido" tabindex="-1">
```

main contiene la tarea de la pantalla, no el menú ni el pie. Su id permite llegar con el enlace «Saltar al contenido». tabindex="-1" permite enfocar esa región sin añadirla como una parada normal más al recorrer con Tab. Dentro de main, la aplicación agrega los formularios y tablas en el contenedor vista.

## HTML: label y aria-describedby
En componentes.html se encuentra esta etiqueta:

```html
<label for="condicion">Condición (obligatoria)</label>
```

label es el nombre visible del campo. Su for coincide con el id del control: al activar la etiqueta se dirige la interacción a ese campo. No conviene usar solo un texto de ejemplo dentro de la caja como nombre.

El control asociado aparece exactamente así:

```html
<input id="condicion" type="text" required maxlength="80" aria-describedby="ayuda-condicion error-condicion">
```

aria-describedby relaciona el campo con los textos que explican cómo llenarlo y qué error tiene. No reemplaza a label: agrega información. En AutoFacture, una condición puede ser «Proveedor Alfa»; si falta, el mensaje explica qué corregir junto al campo. La aplicación funcional crea estas asociaciones con sus propias funciones campo y formulario.

## CSS: variables de color
Este es el inicio exacto del bloque :root de styles.css, no el bloque completo:

```css
:root {
  --azul: #16324F;
  --verde: #20644F;
  --blanco: #FFFFFF;

```

Las variables guardan los colores comunes: azul para la identidad visual, verde para acciones y blanco para fondos o texto sobre colores oscuros. :root permite compartirlas en la hoja. Esta regla real las utiliza:

```css
.cabecera { color: var(--blanco); background: var(--azul); }
```

var() toma el valor de una variable. Así todas las cabeceras usan los mismos colores sin repetirlos en quince archivos. Los bocetos conservan sus grises mediante la clase boceto dentro del mismo styles.css; no tienen otra hoja activa.

## CSS: Grid y media queries
Grid organiza el contenido en filas y columnas. Este es el inicio exacto de la regla de filtros en styles.css:

```css
.formulario-filtros {
  display: grid;
  grid-template-columns: minmax(0, 1fr);

```

display: grid activa esa distribución. Una columna minmax(0, 1fr) ocupa el espacio disponible y puede reducirse cuando el ancho es pequeño. Es la disposición base para los cinco filtros de Bandeja y Reportes en celular. Las siguientes reglas completas cambian la distribución cuando hay espacio:

```css
@media (min-width: 48.01rem) {
  .formulario-filtros { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (min-width: 64rem) {
  .formulario-filtros { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}

```

Una media query aplica estilos si se cumple una condición de ancho. Desde 48.01rem se muestran dos columnas y desde 64rem tres. repeat() repite las columnas del mismo tamaño. Los campos conservan su orden, sus etiquetas y sus mensajes; solo cambia cómo se distribuyen. No se modifican los filtros ni sus resultados.

## JavaScript: eventos y DOM
Un evento es algo que sucede en la página, como enviar un formulario o activar un botón. La aplicación escucha esos eventos para responder. Esta instrucción exacta de js/aplicacion.js está dentro del manejador de envío:

```js
ev.preventDefault();
```

Evita el envío normal del formulario y permite comprobar los datos antes de ejecutar la operación de demostración. No guarda nada por sí misma.

El DOM es la representación de la página que JavaScript puede consultar y modificar. La función nodo de js/aplicacion.js contiene esta instrucción:

```js
const n=document.createElement(tag);
```

Crea un elemento, por ejemplo un párrafo, una celda o un campo. La misma función asigna contenido textual con esta instrucción real:

```js
n.textContent=v;
```

En una recepción, el nombre del proveedor o un fragmento de JSON se muestran como texto. Aunque el archivo contenga algo parecido a una etiqueta HTML, no se inserta como código ejecutable. Las tablas, tarjetas y mensajes se actualizan con esos elementos del DOM.

## JavaScript: validar y llevar el foco al error
Validar significa comprobar que los datos permiten realizar la operación. Esta instrucción pertenece a corregir en js/modelo.js:

```js
exigir(texto(motivo),'Escribe el motivo de corrección.','motivo');
```

La corrección necesita un motivo. Si está vacío, exigir detiene la operación y señala el campo motivo. También se validan identificación, número, importes, fechas y duplicados antes de guardar una versión. La validación del modelo no se limita a ocultar un botón.

Este fragmento exacto de formulario, en js/aplicacion.js, muestra el mensaje y solicita el foco:

```js
p.textContent=e.message;p.hidden=false;x.input.setAttribute('aria-invalid','true');x.input.focus();
```

El mensaje queda junto al campo, aria-invalid señala el problema y focus() dirige allí la interacción. El foco es el punto que recibe el teclado; no es solo un color. styles.css le da un contorno visible con :focus-visible, y en la cabecera usa blanco para distinguirlo del fondo azul. En el catálogo componentes.html hay un ejemplo aislado de validación; las operaciones que guardan cambios pertenecen al modelo y a la aplicación funcional.

## JavaScript: conservar versiones y exigir otra revisión
Después de validar una corrección, js/modelo.js ejecuta este fragmento exacto:

```js
    f.version += 1;
    f.versiones.push({ version: f.version, datos: d });
    f.estado = 'Pendiente de corrección';

```

Primero aumenta el número de versión; después agrega los datos nuevos al arreglo versiones, sin borrar el registro anterior. Por último deja la factura en Pendiente de corrección.

Por ejemplo, si AUXR cambia una OC de FE-DEMO-101, la versión 1 permanece consultable en Historial y se agrega la versión 2. Las revisiones tienen asociado su número de versión: la revisión de la versión 1 no autoriza avanzar con la 2. AUXR debe revisar los datos actuales y registrar otro resultado válido antes de asignar o continuar el trámite. No se calcula un impuesto por hacer esta corrección.

Repetir una revisión válida sin cambiar la versión es otro caso. Antes de guardar esa revisión, el modelo conserva esta condición:

```js
const conservarTramite = f.estado === 'En trámite' && vigente(f);
```

Si la factura ya estaba En trámite con revisión vigente, una nueva revisión válida de esa misma versión no la devuelve a Asignada. Sí se guardan la revisión y su evento. Si el resultado es Pendiente o Rechazada preliminarmente, el bloqueo tiene prioridad; una versión nueva también exige nueva revisión. Si falta la regla ficticia necesaria, no se anuncia una validación que no se pudo hacer.

## Datos, decisiones y límites de la entrega
La documentación mantiene las decisiones aprobadas para AutoFacture. El ejemplo inicial tiene tres facturas por COP 2.023.000 y la incidencia FE-DEMO-104 aparte por COP 357.000, sin NIT inventado. Los cambios funcionales se comparten entre páginas del mismo origen HTTP/HTTPS. El acceso por identidad es de demostración, no autenticación real. No hay conexión con DIAN, FACTURE o SAP ni aprobación tributaria.

Los fragmentos se contrastaron con los archivos del proyecto. El aprendiz conserva estas decisiones para la entrega; el codificador las implementa con HTML, CSS y JavaScript puro. Las comprobaciones descritas no equivalen a una inspección visual manual.

## Referencias técnicas reales en español
- MDN Web Docs. «label». https://developer.mozilla.org/es/docs/Web/HTML/Reference/Elements/label
- MDN Web Docs. «Uso de propiedades personalizadas (variables) en CSS». https://developer.mozilla.org/es/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties
- MDN Web Docs. «Crear enlaces». https://developer.mozilla.org/es/docs/Learn_web_development/Core/Structuring_content/Creating_links
- MDN Web Docs. «details». https://developer.mozilla.org/es/docs/Web/HTML/Reference/Elements/details

Los fragmentos anteriores proceden del proyecto. Estas fuentes sirven como apoyo técnico y no sustituyen la evidencia de los archivos construidos.
