# AutoFacture · Quince interfaces finales de demostración

Revisión final: **10 de noviembre de 2026 · Colombia (America/Bogota)**.


Fecha de entrega: **9 de noviembre de 2026 · Colombia (America/Bogota)**.

## Cómo abrir el recorrido completo
Descomprimir todo el ZIP. Servir la carpeta AutoFacture_GA6 desde una publicación web o un servidor estático local, siempre con el mismo origen HTTP/HTTPS. El ZIP se entrega sin publicación web.

Si tienes Python instalado, abrir una terminal dentro de AutoFacture_GA6 y ejecutar:

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Abrir http://127.0.0.1:8000/index.html y conservar ese origen. El puerto y el nombre del host forman parte del origen: localhost y 127.0.0.1 no comparten almacenamiento. Abrir archivos con file:// no garantiza que las páginas compartan los datos y no es el recorrido completo admitido.

No requiere frameworks, CDN, instalación de paquetes ni servicios externos. Los scripts son clásicos. Los datos ficticios se guardan en localStorage; la identidad seleccionada se guarda en sessionStorage. Si el navegador bloquea el almacenamiento, se informa el problema. No es un sistema multiusuario en servidor: los datos no se sincronizan entre dispositivos o navegadores.

## Identidades ficticias
AUXR Demo recibe, revisa, corrige, asigna y consulta alertas. AUXR Autorizado Demo también configura reglas. Lina Demo y Pablo Demo son RESP y gestionan sus propias facturas. CODA Demo consulta y supervisa, sin modificar facturas ni reglas. La selección no valida identidad real; son controles de demostración. No ingresar contraseñas ni datos reales.

## Datos y corte
Inicialmente hay tres facturas por COP 2.023.000. FE-DEMO-104 queda como INC-DEMO-104 por COP 357.000, sin NIT inventado ni responsable. Frente a GA5, ese intento se separa de las facturas registradas. El conjunto base de referencia se conserva intacto en referencia/.

Corte y reloj ficticios: 9 de noviembre de 2026 a las 5:00 p. m., Colombia. El reloj no es la hora real de la operación. Los eventos usan esa fecha de ejemplo y se ordenan por consecutivo. Las facturas iniciales ya están vencidas en ese corte. No se inventa un umbral de demoras.

## Recorrido sugerido
Entrar como AUXR. En bandeja abrir FE-DEMO-101. Registrar «Validada ficticia» con motivo. Es un resultado de revisión interno y no aprobación DIAN ni validación tributaria. Asignar a Lina Demo con motivo. Cambiar identidad a Lina Demo y pasar su factura de Asignada a En trámite con observación. Volver a AUXR, corregir un dato con motivo y consultar versiones en historial. La corrección conserva la anterior y exige nueva revisión. Los cambios se ven en bandeja y reportes. Un trámite Cerrado no se modifica ni acredita pago/contabilización.

Entrar como AUXR autorizado para crear/editar reglas. La prioridad numérica menor gana; empate exige selección manual de responsable en asignación. Las reglas inactivas no proponen responsables y las ediciones no reasignan facturas existentes. Se puede simular que falta REV-DEMO-01: las nuevas revisiones solicitadas como válidas quedan Pendiente. No se aplican tasas tributarias reales.

## Importación JSON
En Importar, seleccionar un archivo de muestras/:

- valido.json: FE-DEMO-105 identificable, COP 420.000. Registrar una vez; repetirlo genera incidencia por duplicado.
- duplicado.json: FE-DEMO-101 con el mismo NIT usando separadores. No crea otra factura.
- sin-identidad.json: FE-DEMO-106 sin NIT. Conserva el intento, sin crear factura.

Esquema: {"facturas":[...]} o un arreglo de objetos. Máximo 1 MB y 100 filas. numero, proveedor, nit y moneda son textos; total es número no negativo de hasta dos decimales. Monedas admitidas COP/USD/EUR. Las fechas opcionales usan AAAA-MM-DD; se dejan vacías si no fueron informadas. No hay conversión de monedas. Los campos de la muestra documentan el formato.

Los archivos inválidos, las filas con errores y los duplicados quedan en recepciones/incidencias. La identificación se normaliza quitando puntos, espacios y guiones para comparar NIT y número, sin validación oficial. Se controlan también identidades de versiones anteriores. Se guarda solo un fragmento de 2.000 caracteres para texto JSON inválido; un archivo demasiado grande no se lee. El texto recibido se muestra como texto, nunca como HTML.

## Reporte y restablecimiento
Aplicar los filtros antes de descargar. El CSV contiene exactamente las filas y versiones del reporte aplicado, sin incidencia 104. Los totales se separan por moneda. Las celdas se entrecomillan y se antepone apóstrofo a posibles fórmulas, incluidos signos =, +, -, @ y prefijos de control. Excel/PDF no están implementados.

«Restablecer datos iniciales» solicita confirmación y vuelve a las tres facturas, incidencia y reglas de inicio. Afecta la demostración en ese origen. «Salir» limpia la identidad, sin borrar el conjunto. Si otra pestaña modifica datos, se solicita recargar y se evita guardar sobre una revisión anterior.

## Archivos y comprobaciones
Las quince páginas P01–P15 están en la raíz. plantilla.html es su estructura común. componentes.html conserva la guía de piezas; su pequeño formulario no guarda información. styles.css es la única hoja activa. prototipo/ conserva los quince mockups y mapa editable. docs/ contiene fichas, fundamentos, componentes y verificaciones.

Con Python y Node instalados se pueden repetir las comprobaciones sin dependencias:

```sh
python pruebas/estatica.py
node pruebas/modelo.test.cjs
node pruebas/interfaz-simulada.test.cjs
```

Son pruebas de lógica y DOM simulado, no pruebas visuales de navegador. Las comprobaciones de este paquete se describen por su método y resultado. No acreditan una inspección visual manual en navegador. En esta actualización pasaron 105 comprobaciones de lógica y las 31 combinaciones de pantalla/identidad del DOM simulado, con casos adicionales para la regresión, los errores y el texto largo. No hay conexiones con DIAN, FACTURE, SAP o Supabase.

## Ajustes de esta versión
Repetir una revisión válida de la misma versión no devuelve una factura En trámite a Asignada. Una corrección que crea versión, una revisión pendiente o una rechazada conservan sus bloqueos. Los filtros de bandeja y reportes usan dos o tres columnas cuando hay espacio y una en celular. El detalle y las versiones muestran nombres claros e importes con moneda, sin calcular impuestos. El JSON largo conserva su texto dentro de una región ajustable/desplazable. Los datos iniciales, las versiones conservadas y las muestras no se cambian.

## Demostración y código

Demostración: https://sebastianblancoay-hash.github.io/autofacture-ga5/ga6/

Repositorio: https://github.com/sebastianblancoay-hash/autofacture-ga5/tree/main/ga6

Los enlaces de recursos conservan su identificación de versión para cargar juntos los CSS y JavaScript publicados. La fecha de elaboración de la interfaz y el corte ficticio siguen en el 9 de noviembre; la revisión documental de esta entrega corresponde al 10 de noviembre de 2026, Colombia.
