# Bitácora de decisiones y trabajo con el codificador

Sebastián Alejandro Blanco Ytriago. ADSO, ficha 3336064.

Revisión por etapas: 10 de noviembre de 2026, Colombia.

Las instrucciones registran las decisiones del proyecto y los resultados del codificador. Los métodos de comprobación se indican por separado.

## Entrada 1 Historias y requisitos

Instrucción utilizada:

Apruebo estas decisiones para AutoFacture: conservar RF01 a RF25 y las seis historias anteriores; completar ocho historias; AUXR recibe, revisa, asigna y consulta alertas; solo AUXR autorizado configura RF13; RESP gestiona sus facturas y CODA consulta. Conserva las prioridades originales, RF24 con HU-001 y RF25 como preparación futura. Actualiza AGENTS.md, historias y requisitos para expresar esas decisiones del proyecto con claridad. Usa lenguaje sencillo y no cambies la lógica ni los datos. Resume el resultado en cuatro líneas.

Decisión o problema: Conservar los roles, códigos, prioridades y relaciones de los antecedentes.

Resultado: Se actualizaron AGENTS.md, ocho historias y requisitos con las decisiones aprobadas. RF24 mantiene HU-001 y RF25 continúa como preparación futura.

Capturas en el paquete de evidencias: revision_01.jpg

## Entrada 2 Herramienta mapa y prototipos

Instrucción utilizada:

Elijo el prototipo HTML porque permite recorrer AutoFacture y continuar la maqueta anterior. Conserva la comparación con Figma, el mapa editable y los quince bocetos enlazados. En todos los bocetos usa el pie: AutoFacture · Boceto de navegación · Datos ficticios. Conserva su escenario de octubre y aclara que la versión funcional tiene corte del 9 de noviembre. Actualiza herramientas, navegación y descripción de pantallas, sin agregar funciones ni cambiar los datos. Resume los cambios en cuatro líneas.

Decisión o problema: Elegir una herramienta y distinguir el escenario de los bocetos del corte funcional.

Resultado: Se registró la elección de HTML, se conservó la comparación con Figma, el mapa editable y quince bocetos; sus pies identifican AutoFacture y los datos ficticios.

Capturas en el paquete de evidencias: revision_02.jpg

## Entrada 3 Componentes plantilla y estilos

Instrucción utilizada:

Mantengo una sola hoja styles.css con variables, plantilla.html y componentes.html. Revisa que la tabla de componentes coincida con las quince pantallas: cabecera, menú, formularios, errores junto al campo, foco visible, estados, tarjetas, tablas e historial. Conservo azul, verde y blanco. Los filtros deben usar una columna en celular y dos o tres cuando haya espacio. Ajusta la documentación si falta algo y conserva la implementación actual. Resume el resultado en cuatro líneas.

Decisión o problema: La tabla debía describir el uso real de las piezas reutilizables en las quince pantallas.

Resultado: Se corrigió la tabla y se conservaron styles.css único, variables, plantilla y componentes. Los filtros se documentan con una, dos o tres columnas según el ancho.

Capturas en el paquete de evidencias: revision_03.jpg

## Entrada 4 Comprobación funcional

Instrucción utilizada:

Apruebo la corrección que conserva En trámite cuando se repite una revisión válida de la misma versión. Comprueba que una versión nueva, una revisión pendiente o una rechazada siguen bloqueando el avance. Mantén las tres facturas por COP 2.023.000 y la incidencia 104 aparte por COP 357.000. Ejecuta las pruebas estáticas, de lógica y de DOM simulado; revisa también importación, versiones, reglas por prioridad y CSV filtrado. Informa los resultados exactos, distinguiéndolos de una prueba visual. No cambies datos ni agregues funciones.

Decisión o problema: Una revisión válida repetida debe conservar En trámite y mantener los bloqueos cuando cambian datos o resultado.

Resultado: Pasaron 105 comprobaciones de lógica, 31 combinaciones de pantalla e identidad, 33 HTML y 718 referencias locales. Se conservaron tres facturas por COP 2.023.000 y la incidencia 104 aparte.

Capturas en el paquete de evidencias: revision_04_instruccion.jpg, revision_04.jpg

## Entrada 5 Fundamentos del frontend

Instrucción utilizada:

Quiero explicaciones sencillas de fragmentos reales del proyecto. En fundamentos.md explica para qué sirven header, nav, main, label y aria-describedby; las variables de color, Grid y las media queries; y los eventos, el DOM, la validación y el foco en JavaScript. Incluye cómo una corrección conserva la versión anterior y exige una revisión nueva. Usa fragmentos exactos de los archivos actuales y ejemplos de AutoFacture. Conservo estas decisiones para la entrega. No cambies código ni datos. Resume el resultado en cuatro líneas.

Decisión o problema: Explicar fragmentos reales y relacionarlos con las decisiones de AutoFacture.

Resultado: Se actualizaron los fundamentos con dieciséis fragmentos exactos de HTML, CSS y JavaScript, incluidas validación, foco y conservación de versiones.

Capturas en el paquete de evidencias: revision_05.jpg

## Entrada 6 Accesibilidad y cierre

Instrucción utilizada:

Para cerrar la revisión de accesibilidad, comprueba etiquetas asociadas, ayudas y errores junto a los campos, foco visible, navegación por teclado, menú móvil y filtros de una columna en ancho pequeño. Conserva las quince pantallas y las decisiones funcionales que aprobé. Revisa el código y las comprobaciones disponibles, indicando el método utilizado y sus límites. Mantén intactos código y datos. Resume el resultado en cuatro líneas.

Decisión o problema: Comprobar etiquetas, ayudas, errores, foco, menú móvil y distribución adaptable con el método indicado.

Resultado: Se verificaron por análisis estático y DOM simulado las etiquetas, ayudas, errores, solicitud de foco y reglas de diseño adaptable. Se conservaron quince pantallas, código y datos. La apariencia y la interacción reales se distinguen de estas comprobaciones.

Capturas en el paquete de evidencias: revision_06.jpg
