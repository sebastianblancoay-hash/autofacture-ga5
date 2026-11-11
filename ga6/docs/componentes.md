# Componentes reutilizables de AutoFacture

Revisión final: **10 de noviembre de 2026 · Colombia (America/Bogota)**.


Fecha de entrega: **9 de noviembre de 2026 · Colombia (America/Bogota)**.

## Base de esta etapa
styles.css contiene las variables y todas las clases. plantilla.html reúne la estructura común. componentes.html conserva ejemplos aislados; las quince interfaces finales de demostración ya están en la raíz. js/componentes.js solo demuestra mensajes de validación en un formulario ficticio: no guarda ni aplica reglas.

Se conservan azul #16324F, verde #20644F y blanco #FFFFFF, fuente Arial y controles amplios. El menú de escritorio se reemplaza por un menú desplegable nativo en anchos de hasta 48rem. Se usa details/summary para poder abrirlo con teclado sin una librería.

## Catálogo
La columna de pantallas identifica usos actuales o variantes de referencia. Las interfaces de la raíz usan el esqueleto real de plantilla.html, styles.css y componentes creados con el DOM por js/aplicacion.js. Los mockups siguen siendo bocetos.

| Nombre | Elemento HTML | Clase o selector de styles.css | Uso comprobado en las quince interfaces |
|---|---|---|---|
| Contenedor común | div, main | contenedor | P01–P15; main también tiene estilos por etiqueta |
| Cabecera y marca | header, div, a, p | cabecera, cabecera-fila, marca, identidad | P01–P15 |
| Menú de escritorio | div, nav, a | nav-escritorio, menu | P01–P15; opciones visibles según identidad |
| Menú móvil | details, summary, nav | nav-movil, menu | P01–P15; desplegable hasta 48rem |
| Salto al contenido | a | saltar | P01–P15 |
| Título y ruta | div, h1, p | titulo-pagina, ruta, nota | P01–P15 |
| Panel de contenido | section | panel | P01–P15, según el recorrido y los permisos |
| Botón de formulario | button | boton, boton-principal | P01, P02, P03, P04, P05, P08, P10, P11 y P15 |
| Acciones y regreso | div, nav, a, button | acciones, boton, boton-secundario | P01–P15; las acciones específicas dependen del rol y los datos |
| Formularios y campos con label | form, div, label, input, select, textarea | formulario, campo | P01, P02, P03, P04, P05, P08, P10, P11 y P15 |
| Filtros adaptables | form y cinco div de campo | formulario-filtros, campo | P02 y P05: una columna en celular, dos desde 48.01rem y tres desde 64rem |
| Ayuda junto al campo | p | ayuda | Formularios de P01, P02, P03, P04, P05, P08, P10, P11 y P15; algunos textos de ayuda quedan vacíos si no se necesitan |
| Error junto al campo | p y control con aria-invalid | error-campo, [aria-invalid="true"] | P01, P02, P03, P04, P05, P08, P10, P11 y P15; se muestra cuando falla una validación del campo |
| Foco visible | Enlaces, botones, controles y regiones enfocables | :focus-visible, .cabecera :focus-visible, #mensaje:focus | P01–P15; contorno blanco en cabecera y oscuro sobre fondo claro |
| Aviso y resumen de operación | div | aviso, aviso-error | P01–P15; mensaje compartido con role="status" y aria-live |
| Etiqueta de estado | span | estado | P02 y P05 en filas de facturas; P06 cuando muestra el resultado de una factura |
| Estado o resultado en texto | p y celdas de tabla | Estilos generales de texto y tabla | P03 muestra estado y revisiones; P07 cuenta estados; P11 muestra estado propio; P13 informa revisión/vencimiento; no todos usan la etiqueta estado |
| Tarjetas calculadas | div, article, h3, strong | rejilla, tarjeta | P02, P05 y P07; cantidad y totales por moneda |
| Tabla desplazable | div, table, caption, thead, tbody, th, td | tabla | P02, P03, P05, P07, P09, P13 y P14; P12 al consultar versiones de factura |
| Historial de eventos | ol, li, time, strong, p | historial | P12; P03 enlaza al historial, no inserta esa lista |
| Versiones de factura | details, summary y tabla | tabla y estilos de details/summary | P12 cuando se abre una factura concreta |
| JSON y versiones de reglas como texto | pre | Selector pre, sin clase propia | P06 para los datos de incidencia; P15 para valores anteriores de una regla |
| Pie común funcional | footer | pie | P01–P15 |
| Variantes solo del catálogo | fieldset, legend, div, p, span y celdas | casilla, resultado, importe, estado-pendiente, estado-rechazada, estado-cerrada | Ejemplos de componentes.html; no se atribuyen a pantallas que no las insertan |
| Apariencia de boceto | body | boceto | Solo prototipo/; conserva grises dentro del mismo styles.css |

La tabla se contrastó con los HTML de P01–P15, los renderizadores de js/aplicacion.js y la hoja compartida. Describe presencia en el código y uso condicionado por identidad o datos; no declara una revisión visual en navegador. P04 no contiene tabla de reglas, P08 no incluye tabla de resultados y P15 no usa la lista historial: sus enlaces llevan a las pantallas correspondientes.

## Cómo reutilizar la plantilla
Copiar plantilla.html para una pantalla nueva. Ajustar data-pagina al código y agregar su renderizador en vistas de js/aplicacion.js; no cambiar los quince códigos actuales. Cambiar title, h1, ruta y los códigos RF/HU. Conservar el contenedor vista dentro de main y agregar el contenido mediante su renderizador. componentes.html sirve como referencia de los bloques y clases. Conservar la cabecera, el enlace para saltar al contenido, el pie y el regreso a la pantalla de origen.

Si el nuevo archivo está en la raíz, conservar href="styles.css". Si está en una subcarpeta, ajustar la ruta, por ejemplo ../styles.css. Ajustar también los enlaces del menú. No crear otra hoja, etiquetas style ni atributos style. Para una interfaz final no copiar la clase boceto. Para un mockup sí conservarla.

Marcar la página actual con aria-current="page". Al copiar campos, cambiar sus id y el for de su label para que cada identificador sea único. Si hay ayuda o error, enlazarlos con aria-describedby. Al mostrar un error, establecer aria-invalid="true"; retirarlo cuando se corrija. No copiar un error visible a todos los formularios como si ya hubiera ocurrido.

Un enlace se usa para navegar y un botón para ejecutar una acción. No copiar js/componentes.js como lógica del negocio: solo muestra validación de ejemplo. La lógica funcional está en js/modelo.js; js/aplicacion.js crea campos, tablas, tarjetas, mensajes y navegación. El formulario aislado de componentes.html intercepta el envío y no almacena datos. En las interfaces funcionales, los formularios de operaciones guardan cambios de demostración; los filtros solo actualizan la consulta y el acceso selecciona la identidad ficticia.

## Decisiones de accesibilidad
El foco tiene un contorno visible; en la cabecera oscura se muestra blanco. Los controles tienen al menos 44px de alto (48px en formularios y botones principales). Los estados incluyen texto y no se distinguen únicamente por color. La tabla tiene caption, encabezados scope y una región enfocable para el desplazamiento horizontal. El historial usa una lista ordenada y fechas con datetime.

Los errores aparecen junto al campo, están asociados por aria-describedby y el ejemplo lleva el foco al primer campo incorrecto. El mensaje compartido de las interfaces usa role="status"; el ejemplo aislado del catálogo también lo usa. Estas son decisiones implementadas; no equivalen a una certificación de accesibilidad ni a una prueba con lector de pantalla.

## Referencias reales en español
- MDN Web Docs. «Uso de propiedades personalizadas (variables) en CSS». https://developer.mozilla.org/es/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties
- MDN Web Docs. «label». https://developer.mozilla.org/es/docs/Web/HTML/Reference/Elements/label
- MDN Web Docs. «details». https://developer.mozilla.org/es/docs/Web/HTML/Reference/Elements/details
- MDN Web Docs. «Crear enlaces». https://developer.mozilla.org/es/docs/Learn_web_development/Core/Structuring_content/Creating_links

Son fuentes técnicas verificadas en español para el informe. La fecha académica de la entrega no se presenta como una fecha inventada de pruebas o de consulta.

## Uso funcional construido
P01 usa selección y formulario; P02/P05 comparten filtros, tabla y tarjetas calculadas. P03 muestra datos y formulario de revisión; P04 usa responsable/motivo. P08 usa archivo y mensajes junto al campo. P10 usa formulario de datos y motivo. P11 presenta formularios de transición por factura propia. P12 usa historial y details para versiones; P13/P14 usan tablas; P15 usa formulario de regla. P06 presenta textos de incidencia mediante textContent y P07 tarjetas/conteos.

Las variantes de colores de estado y el ejemplo estático de error están disponibles en el catálogo. Las etiquetas estado aparecen en P02/P05 y en la rama de factura de P06; las otras pantallas muestran estados y resultados con texto o tablas. Los errores de campo se crean en los formularios indicados en la tabla. La información persistida se comparte por origen, no por una conexión a servidor. Los comentarios que describen prototipo/ se refieren únicamente a los bocetos conservados.

## Ajustes de filtros y datos informados
La clase formulario-filtros se usa en P02 y P05, sobre formulario. En celular dispone los cinco campos en una columna; desde 48.01rem usa dos y desde 64rem tres. El botón ocupa una fila completa. Los campos mantienen sus label, ayudas y errores asociados, sin cambiar el orden de teclado ni el foco al primer error. componentes.html incluye una muestra visual de esta distribución.

La tabla de datos de P03/P12 presenta «Número de factura», «NIT informado» y «Total informado», además de las fechas y demás campos. El total usa su moneda original mediante Intl.NumberFormat, sin calcular impuestos ni transformar lo almacenado. Los bloques pre ajustan líneas y permiten desplazamiento interno si hace falta; paneles, campos y tablas tienen un ancho limitado al contenedor. El contenido del JSON sigue insertándose como texto.

## Configuración final
Se mantiene una sola hoja activa styles.css con variables, la plantilla y el catálogo componentes.html. Se conservan azul, verde y blanco y la distribución actual de filtros. El catálogo describe los usos reales de cada componente en las quince interfaces. La verificación documentada corresponde a análisis estático, lógica y DOM simulado; no acredita inspección visual manual.
