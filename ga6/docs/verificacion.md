# Comprobaciones de la etapa funcional

Fecha de entrega: **9 de noviembre de 2026 · Colombia (America/Bogota)**.

Las comprobaciones estáticas y de lógica de este documento las ejecutó el asistente que prepara el ZIP. Las propuestas y correcciones se identifican como revisión asistida. La revisión real en navegador la está realizando otro asistente, por separado. No se atribuye a Sebastián ni al asistente que prepara este ZIP, ni se declara completada aquí.

## Comprobaciones estáticas realizadas
Se analizaron 33 HTML activos: quince interfaces en la raíz, plantilla, guía de componentes y los dieciséis archivos HTML de prototipo/ (quince mockups y el mapa). Se resolvieron 718 referencias locales y sus anclas. No se encontraron identificadores repetidos, campos estáticos sin label, referencias ARIA sin destino, estilos incrustados ni scripts/hojas externos en esos HTML. Todos enlazan el styles.css de la raíz.

Se comprobó la presencia ordenada de P01 a P15, ocho HU y RF01 a RF25. Las prioridades originales se conservan: RF07, RF09, RF16, RF21, RF22 y RF25 Media; los demás históricos Alta. RF24 se relaciona con HU-001; RF25 no se atribuye a HU-006. Los scripts pasan la revisión de sintaxis de Node. Los JSON de muestra se pueden analizar. En modelo.js y aplicacion.js no se usan asignaciones a innerHTML, eval ni document.write para insertar los datos.

## Pruebas de modelo realizadas
pruebas/modelo.test.cjs ejecutó **105 comprobaciones correctas**. Incluyen conjunto inicial, totales por moneda, búsqueda, filtros, visibilidad propia de RESP, rechazo de operaciones no autorizadas, revisión ficticia vigente, responsable/motivo obligatorio, corrección que conserva versión, bloqueo con revisión anterior, reasignación y transiciones permitidas, cierre interno, falta de regla de revisión, rechazo preliminar interno, prioridades y empate, reglas inactivas y conservación de valores anteriores.

También incluyen importación válida, duplicados con separadores de NIT, falta de identidad, JSON roto, formato/tipos/fechas inválidos, preservación del intento, texto que parece HTML, CSV de las filas elegidas y protección frente a signos de fórmula. Se verificó que una identidad de factura de una versión anterior tampoco se pueda reimportar y que el reinicio produzca las tres facturas por COP 2.023.000 y la incidencia 104 aparte.

## Conexión de interfaz y modelo comprobada con DOM simulado
pruebas/interfaz-simulada.test.cjs renderizó **31 combinaciones de pantalla e identidad** autorizadas. Revisó identificadores, labels y destinos ARIA generados. Comprobó ingreso ficticio, revisión, asignación, corrección, filtro, actualización de versión en reporte, visibilidad propia de RESP, bloqueo de configuración para CODA, importación válida y fallida, restablecimiento y prevención de guardado con una revisión de almacenamiento anterior.

Un proveedor con texto parecido a una etiqueta img se conservó como texto sin crear un elemento img. Estos resultados se obtuvieron con un DOM mínimo simulado en Node, no con un navegador real. El simulador no reproduce todos los comportamientos del navegador.

## Cómo repetir
Desde AutoFacture_GA6, con Python y Node disponibles:

```sh
python pruebas/estatica.py
node pruebas/modelo.test.cjs
node pruebas/interfaz-simulada.test.cjs
```

No requieren instalar paquetes. El servidor estático del LEEME.md corresponde al uso manual del recorrido, no a estos tests.

Los archivos de prototipo/ y referencia/ se compararon byte a byte con el ZIP de la etapa anterior: permanecen intactos.

## Revisión de navegador realizada aparte
La revisión real en navegador la está realizando otro asistente, por separado. No se atribuye a Sebastián ni al asistente que prepara este ZIP, ni se declara completada aquí. Las comprobaciones estáticas y del DOM simulado no prueban distribución real, clics, teclado, lector de pantalla ni descarga del CSV en navegador.

No se publicaron sitios ni se controlaron otros chats. No hay conexiones con DIAN, FACTURE, SAP o Supabase. No se acredita autenticación real, auditoría segura de servidor, impuestos, sincronización, pagos, contabilización, Excel o PDF del reporte. El PDF integrador y su evidencia visual siguen pendientes.

## Regresión y ajustes de esta versión
Se agregó el caso de FE-DEMO-103: repetir Validada ficticia con la misma versión mantiene En trámite, responsable y datos; agrega una revisión y evento y permite seguir a Cerrada. Se verificaron también los bloqueos por Pendiente, rechazo, falta de regla y corrección que crea versión. Una primera revisión de una versión corregida no restaura automáticamente el avance anterior.

El DOM simulado comprueba el caso desde P03 con persistencia, su reflejo en bandeja/reporte, las etiquetas claras y el importe con COP, la clase de filtros en P02/P05 y la visibilidad y foco solicitados para un error de revisión. Comprueba que 4.000 caracteres recibidos en un JSON se conservan en pre como texto. No mide geometría ni desbordamiento real: para eso se mantiene la revisión del navegador aparte.

Los cambios de CSS mantienen el contorno de foco y los mensajes junto al campo. Los filtros usan una, dos o tres columnas según el ancho. Las regiones de texto largo tienen ajuste de líneas, límite de ancho y desplazamiento interno. Los fragmentos y el catálogo se actualizaron.

Se comprobó que el conjunto inicial completo, las muestras, los mockups y las referencias no cambian. No se agregaron pantallas ni dependencias. La revisión visual real y la revalidación de estos ajustes en navegador corresponden al otro asistente.
