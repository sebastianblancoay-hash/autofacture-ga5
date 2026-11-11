# Mapa y recorridos

Revisión final: **10 de noviembre de 2026 · Colombia (America/Bogota)**.


Fecha de entrega: **9 de noviembre de 2026 · Colombia (America/Bogota)**.

El prototipo HTML es la opción elegida por el aprendiz para recorrer AutoFacture y continuar la maqueta anterior. Se conservan los quince bocetos enlazados y el mapa editable. Abrir ../prototipo/mapa.html para ver el mapa sin instalar herramientas. Está dividido en ingreso/supervisión, recepción/revisión y trámite/reglas para que las flechas se lean con claridad.

## Archivos editables
- prototipo/mapa-navegacion.mmd: mapa maestro Mermaid con P01 a P15.
- prototipo/mapa-entrada.dot, mapa-recepcion.dot y mapa-gestion.dot: fuentes Graphviz de los tres diagramas mostrados.
- Sus SVG son imágenes vectoriales locales, incluidas también dentro de mapa.html. Al modificar las fuentes, debe regenerarse la imagen y actualizarse su copia en el HTML.

## Regresos de los mockups conservados
Todas las pantallas ofrecen Bandeja, Mapa y Acceso. P04 cancela a P03; P06 vuelve a P09; P08 cancela a P02; P10 vuelve a revisión P03; P11 vuelve al detalle propio P03; P15 cancela a P14. P12 permite volver al detalle, reglas o alertas. El mapa y el índice facilitan revisar las quince pantallas sin contar como una pantalla de negocio adicional.

## Datos y alcance de los mockups
Los bocetos mantienen su escenario de octubre de 2026. El corte funcional del 9 de noviembre de 2026, 5:00 p. m., Colombia, corresponde solo a las interfaces de la raíz. No se sustituyen las fechas del boceto por ese corte.

P02/P05/P07 muestran tres facturas y COP 2.023.000. P09/P06 conservan INC-DEMO-104, referencia recibida FE-DEMO-104, por COP 357.000. Esa incidencia no tiene NIT inventado, responsable ni consecutivo activo de factura. No se puede asignar como una factura identificada.

P01 selecciona un recorrido mediante la dirección local. Un JavaScript breve solo mantiene esa selección, cambia los datos ilustrativos al abrir 101/102/103 y muestra/oculta acciones de reglas. CODA y AUXR sin autorización ven consulta; AUXR autorizado ve el formulario. No hay autenticación, persistencia, motor de reglas, importación ni exportación.

En revisión libre se pueden visitar todas las pantallas. Los escenarios no se encadenan como operaciones guardadas: abrir el resultado previsto no modifica bandeja, historial ni reportes. Estos bocetos se conservan como antecedente de distribución y navegación; las interfaces funcionales ya están construidas en la raíz.

## Recorridos documentados en los mockups
Recepción: P01 → P02 → P08 → P09 → P06 → P09. Revisión/asignación: P02 → P03 → P10 → P03 → P04 → P03. Gestión propia: P01 (RESP) → P02 → P11 → P12. Supervisión: P01 (CODA) → P07 → P05 o P14 solo consulta. Reglas: P01 (AUXR autorizado) → P14 → P15 → P14. Alertas: P01 (AUXR) → P13 → P03 o P06 según el caso.

## Etapa funcional en la raíz
Los archivos de prototipo/ se conservan como antecedente estático. El recorrido funcional ahora se abre en /index.html del mismo origen HTTP/HTTPS. Usa los mismos nombres P01–P15, con id de factura/incidencia/regla en la consulta de la dirección cuando corresponde. Los formularios y cambios reales de demostración están solo en las páginas de la raíz. Ver LEEME.md.

## Identificación de los bocetos
P01 a P15 comparten el pie «AutoFacture · Boceto de navegación · Datos ficticios». La nota visible de cada boceto distingue octubre del corte funcional de noviembre. Se conservan enlaces, regresos, códigos, mapa y fuentes editables sin funciones nuevas.
