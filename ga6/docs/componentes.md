# Componentes reutilizables de AutoFacture

Fecha de elaboración: **9 de noviembre de 2026 · Colombia (America/Bogota)**.

## Base de esta etapa
styles.css contiene las variables y todas las clases. plantilla.html reúne la estructura común. componentes.html conserva ejemplos aislados; las quince interfaces finales de demostración ya están en la raíz. js/componentes.js solo demuestra mensajes de validación en un formulario ficticio: no guarda ni aplica reglas.

Se conservan azul #16324F, verde #20644F y blanco #FFFFFF, fuente Arial y controles amplios. El menú de escritorio se reemplaza por un menú desplegable nativo en anchos de hasta 48rem. Se usa details/summary para poder abrirlo con teclado sin una librería.

## Catálogo
La columna de pantallas identifica usos actuales o variantes de referencia. Las interfaces de la raíz usan el esqueleto real de plantilla.html, styles.css y componentes creados con el DOM por js/aplicacion.js. Los mockups siguen siendo bocetos.

| Nombre | Elemento HTML | Clase de styles.css | Uso en interfaces actuales y catálogo |
|---|---|---|---|
| Contenedor común | div, main | contenedor | P01–P15 |
| Cabecera y marca | header, a, div | cabecera, cabecera-fila, marca, identidad | P01–P15 |
| Menú de escritorio | nav, a | menu, nav-escritorio | P01–P15; las opciones se limitan según identidad |
| Menú móvil | details, summary, nav | nav-movil, menu | Mismas pantallas que el menú de escritorio |
| Salto al contenido | a | saltar | P01–P15; ya existe en los mockups |
| Título y ruta | div, h1, p, a | titulo-pagina, ruta, nota | P01–P15 |
| Panel | section | panel | P01–P15 según contenido |
| Acción principal | button o a | boton, boton-principal | P01, P03, P04, P08, P10, P11, P14, P15 |
| Acción secundaria/regreso | button o a | boton, boton-secundario, acciones | P01–P15; los mockups ya usan boton y acciones |
| Formulario y campo | form, fieldset, legend, div, label, input, select, textarea | formulario, campo, casilla | P01, P03, P04, P08, P10, P11, P15; filtros P02 y P05 |
| Ayuda junto al campo | p | ayuda | Formularios y filtros de las pantallas anteriores |
| Error junto al campo | p e input/select/textarea con aria-invalid | error-campo; selector [aria-invalid="true"] | P01, P03, P04, P08, P10, P11, P15 |
| Aviso de contexto o incidencia | div o aside | aviso, aviso-error | P01–P15; aviso de incidencia en P06/P09 |
| Estado del trámite | span | estado, estado-pendiente, estado-rechazada, estado-cerrada | P02, P03, P04, P05, P07, P11, P13 |
| Resultado de revisión | p | resultado | P03 y mensajes del ejemplo de componentes; Validada no es un estado |
| Tarjetas de resumen | div, article, h3, strong | rejilla, tarjeta | P02, P05, P07; ya se usan en esos mockups |
| Tabla desplazable | div, table, caption, thead, tbody, tfoot, th, td | tabla, importe | P05, P08, P09, P13, P14; tabla también se usa en P02 del boceto |
| Historial | ol, li, time, p | historial | P12 y resumen opcional en P03; versiones y eventos de reglas |
| Pie | footer | pie | P01–P15 |
| Apariencia de boceto | body | boceto | Solo prototipo/; mantiene grises dentro del mismo styles.css |

## Cómo reutilizar la plantilla
Copiar plantilla.html para una pantalla nueva. Ajustar data-pagina al código y agregar su renderizador en vistas de js/aplicacion.js; no cambiar los quince códigos actuales. Cambiar title, h1, ruta y los códigos RF/HU. Conservar el contenedor vista dentro de main y agregar el contenido mediante su renderizador. componentes.html sirve como referencia de los bloques y clases. Conservar la cabecera, el enlace para saltar al contenido, el pie y el regreso a la pantalla de origen.

Si el nuevo archivo está en la raíz, conservar href="styles.css". Si está en una subcarpeta, ajustar la ruta, por ejemplo ../styles.css. Ajustar también los enlaces del menú. No crear otra hoja, etiquetas style ni atributos style. Para una interfaz final no copiar la clase boceto. Para un mockup sí conservarla.

Marcar la página actual con aria-current="page". Al copiar campos, cambiar sus id y el for de su label para que cada identificador sea único. Si hay ayuda o error, enlazarlos con aria-describedby. Al mostrar un error, establecer aria-invalid="true"; retirarlo cuando se corrija. No copiar un error visible a todos los formularios como si ya hubiera ocurrido.

Un enlace se usa para navegar y un botón para ejecutar una acción. No copiar js/componentes.js como lógica del negocio: solo muestra validación de ejemplo. La lógica funcional está en js/modelo.js; js/aplicacion.js crea campos, tablas, tarjetas, mensajes y navegación. El formulario aislado de componentes.html intercepta el envío y no almacena datos; los formularios funcionales de las quince interfaces sí guardan los cambios de demostración.

## Decisiones de accesibilidad
El foco tiene un contorno visible; en la cabecera oscura se muestra blanco. Los controles tienen al menos 44px de alto (48px en formularios y botones principales). Los estados incluyen texto y no se distinguen únicamente por color. La tabla tiene caption, encabezados scope y una región enfocable para el desplazamiento horizontal. El historial usa una lista ordenada y fechas con datetime.

Los errores aparecen junto al campo, están asociados por aria-describedby y el ejemplo lleva el foco al primer campo incorrecto. El resumen de resultado usa role="status". Estas son decisiones implementadas; no equivalen a una certificación de accesibilidad ni a una prueba con lector de pantalla.

## Referencias reales en español
- MDN Web Docs. «Uso de propiedades personalizadas (variables) en CSS». https://developer.mozilla.org/es/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties
- MDN Web Docs. «label». https://developer.mozilla.org/es/docs/Web/HTML/Reference/Elements/label
- MDN Web Docs. «details». https://developer.mozilla.org/es/docs/Web/HTML/Reference/Elements/details
- MDN Web Docs. «Crear enlaces». https://developer.mozilla.org/es/docs/Learn_web_development/Core/Structuring_content/Creating_links

Son fuentes técnicas verificadas en español para el informe. La fecha académica de la entrega no se presenta como una fecha inventada de pruebas o de consulta.

## Uso funcional construido
P01 usa selección y formulario; P02/P05 comparten filtros, tabla y tarjetas calculadas. P03 muestra datos y formulario de revisión; P04 usa responsable/motivo. P08 usa archivo y mensajes junto al campo. P10 usa formulario de datos y motivo. P11 presenta formularios de transición por factura propia. P12 usa historial y details para versiones; P13/P14 usan tablas; P15 usa formulario de regla. P06 presenta textos de incidencia mediante textContent y P07 tarjetas/conteos.

Las variantes de colores de estado y el ejemplo estático de error están disponibles en el catálogo; las páginas funcionales usan estado y los errores del formulario creados por el renderizador. La información persistida se comparte por origen, no por una conexión a servidor. Los comentarios que describen prototipo/ se refieren únicamente a los bocetos conservados.

## Ajustes de filtros y datos informados
La clase formulario-filtros se usa en P02 y P05, sobre formulario. En celular dispone los cinco campos en una columna; desde 48.01rem usa dos y desde 64rem tres. El botón ocupa una fila completa. Los campos mantienen sus label, ayudas y errores asociados, sin cambiar el orden de teclado ni el foco al primer error. componentes.html incluye una muestra visual de esta distribución.

La tabla de datos de P03/P12 presenta «Número de factura», «NIT informado» y «Total informado», además de las fechas y demás campos. El total usa su moneda original mediante Intl.NumberFormat, sin calcular impuestos ni transformar lo almacenado. Los bloques pre ajustan líneas y permiten desplazamiento interno si hace falta; paneles, campos y tablas tienen un ancho limitado al contenedor. El contenido del JSON sigue insertándose como texto.
