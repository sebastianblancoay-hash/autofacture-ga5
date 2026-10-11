# AutoFacture maqueta de GA5

Abre index.html en un navegador. No necesitas instalar dependencias ni iniciar un servidor. Para editar, abre esta carpeta en Visual Studio Code.

Recorrido recomendado: acceso → bandeja → Ver FE-DEMO-101 → Preparar asignación de ejemplo → Revisar la propuesta → marcar la casilla → Ver resultado de ejemplo. El resultado es fijo y no cambia el conjunto base. Desde el menú puedes consultar reportes y errores.

La bandeja tiene tres vistas predefinidas controladas con botones de opción nativos. El menú móvil y la ayuda usan details y summary. El formulario de acceso solo comprueba campos requeridos y longitud; no autentica. Los formularios no envían credenciales ni observaciones en la dirección porque esos campos no tienen name.

Todos los registros son ficticios. El CSV descarga las cuatro filas del conjunto base; no genera información nueva. No hay conexión a FACTURE, DIAN o SAP, almacenamiento, contabilización, pago, registro público ni validación tributaria.

Archivos principales: index.html, bandeja.html, detalle.html, asignacion.html, reportes.html, errores.html y css/estilos.css. La carpeta recursos contiene la muestra CSV y el conjunto JSON de referencia. El navegador no procesa ese JSON.

Para teclado: Tab y Mayús + Tab cambian el foco; Enter activa enlaces y botones; Espacio abre details o marca una casilla; las flechas cambian el botón de opción. En reportes, la región de tabla permite desplazamiento horizontal con las flechas. El enlace inicial permite saltar al contenido.
