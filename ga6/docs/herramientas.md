# Comparación de herramientas de prototipado

Fecha de entrega: **9 de noviembre de 2026 · Colombia (America/Bogota)**.

## Opciones consideradas

| Aspecto | Figma | Prototipo HTML local |
|---|---|---|
| Forma de trabajo | Diseñar pantallas en marcos y conectarlas mediante interacciones. | Crear páginas sencillas conectadas con enlaces relativos. |
| Navegación | Flujos con punto de inicio y conexiones entre marcos. | Enlaces para avanzar, volver y abrir una pantalla específica. |
| Cambios visuales | Facilita mover elementos y revisar la composición visual. | Requiere editar HTML/CSS; permite revisar estructura en el navegador. |
| Adaptación a esta entrega | Útil como antecedente de diseño y alternativa para bocetos. | Reutiliza nombres, contenido y estructura de la maqueta HTML/CSS de GA5. |
| Accesibilidad en esta etapa | La representación visual no demuestra por sí sola etiquetas ni foco del HTML final. | Se pueden revisar etiquetas, orden de lectura y foco de los controles nativos. |
| Entrega de este trabajo | No se adjunta ni se afirma haber editado un archivo Figma. | Se incluye en ZIP, abre localmente y no usa CDN ni servicios externos. |
| Límite | Un flujo navegable no acredita funcionamiento del sistema. | Estos enlaces tampoco ejecutan registro, revisión, reglas, exportación ni autenticación. |

## Decisión para AutoFacture
Se elige HTML para esta entrega porque ya existe una maqueta GA5 en HTML/CSS y el trabajo final debe usar HTML, CSS y JavaScript puro. Así se puede revisar el recorrido en el navegador y entregar todos los archivos juntos. En los mockups de prototipo/ se usan grises, bordes sencillos y controles nativos para concentrarse en qué hace cada pantalla y cómo se regresa, sin adelantar el diseño final.

Figma se conserva como antecedente de prototipado conservado en la revisión asistida y como herramienta comparada. Los tres adjuntos no contienen un archivo ni enlace Figma verificable: no se inventan pantallas anteriores, capturas o pruebas en esa herramienta. La comparación describe sus funciones documentadas, no una sesión realizada por el aprendiz.

## Antecedente: recorrido de los mockups
Abrir prototipo/index.html, elegir el recorrido AUXR y entrar a la bandeja. Abrir FE-DEMO-101, revisar el escenario y visitar asignación; cancelar regresa al detalle. Desde recepciones se abre la novedad de FE-DEMO-104 y se regresa a la incidencia, que sigue separada de las tres facturas. El menú Mapa permite ubicar las quince pantallas. Los formularios muestran datos ficticios y resultados de escenario: no guardan cambios.

La vista de reglas distingue AUXR autorizado de CODA: el primero ve el acceso al formulario; CODA consulta el listado sin botones de administración. Se trata de una representación de navegación, no de autenticación o permisos de servidor.

## Fuentes consultadas
- Figma, “Guía para el prototipado en Figma”: https://help.figma.com/hc/es-419/articles/360040314193 . Describe flujos, puntos de inicio y conexiones.
- MDN, “Crear enlaces”: https://developer.mozilla.org/es/docs/Learn_web_development/Core/Structuring_content/Creating_links . Explica enlaces relativos entre archivos y enlaces a secciones.

Fecha de esta entrega: 9 de noviembre de 2026, hora de Colombia. La elección de HTML es una decisión de esta entrega basada en la maqueta y el alcance, no una afirmación de que una herramienta sea siempre mejor.

## Etapa construida
Las quince interfaces funcionales están en la raíz y usan azul, verde y blanco. Comparten datos, versiones, reglas y reportes de demostración mediante almacenamiento del mismo origen. El recorrido estático descrito arriba corresponde únicamente a los mockups conservados en prototipo/. Ver LEEME.md para abrir el recorrido funcional por HTTP/HTTPS.
