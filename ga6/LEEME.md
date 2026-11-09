# AutoFacture · Preparación, prototipo y base de componentes

Fecha de entrega: **9 de noviembre de 2026 · Colombia (America/Bogota)**.

Descomprimir todo el ZIP y abrir prototipo/index.html en el navegador. No se necesita servidor ni conexión. Abrir prototipo/mapa.html para revisar las quince pantallas y sus regresos.

## Contenido
AGENTS.md define reglas; docs/ contiene historias, requisitos, pantallas, herramientas y navegación. prototipo/ contiene quince mockups HTML y el mapa con fuentes editables .mmd y .dot, además de sus vistas SVG. styles.css es la única hoja activa. plantilla.html contiene la estructura común y componentes.html muestra cabecera, menú, formularios, botones, errores, estados, tarjetas, tabla e historial con los colores de AutoFacture. docs/componentes.md explica su reutilización. Las quince interfaces finales quedan pendientes.

## Correcciones frente a la preparación anterior
HU-005 conserva AUXR. RF13/HU-007 corresponde a AUXR autorizado. CODA supervisa y consulta sin administrar reglas. Se mantienen RF01 a RF25, RF-UI01 y ocho historias.

Frente a GA5, FE-DEMO-104 queda como incidencia mientras falte identidad suficiente. Bandeja: tres facturas por COP 2.023.000. Aparte: INC-DEMO-104 por COP 357.000. No se inventa identificación. referencia/ conserva la maqueta GA5 y los adjuntos originales sin cambios; sus cuatro registros no son el conteo actual.

## Qué se puede recorrer
Enlaces de avance y regreso, escenarios de revisión, asignación, trámite, corrección y reglas; el selector de perfil cambia solo la presentación del recorrido. Los campos son ilustrativos. Los apartados «Ver resultado previsto» explican lo que sucedería; no guardan ni ejecutan acciones. No hay autenticación, permisos de servidor ni conexiones con DIAN, FACTURE, SAP o Supabase.

Figma queda como antecedente y opción comparada. No se afirma haber editado un archivo Figma ni que el aprendiz haya probado el prototipo. docs/verificacion.md identifica las comprobaciones realmente hechas por el asistente.

Esta es una etapa de prototipado, no el PDF integrador final ni las interfaces terminadas. La apariencia gris permite revisar estructura y recorrido; la plantilla y la guía de componentes ya usan la paleta azul, verde y blanco de AutoFacture.

Para revisar la base, abrir componentes.html. Para reutilizarla después, copiar plantilla.html, cambiar título y RF/HU e insertar solo los componentes necesarios dentro de main. Mantener styles.css y ajustar rutas relativas.

Prioridades: RF07, RF09, RF16, RF21, RF22 y RF25 son Media; los demás históricos son Alta. RF24 corresponde a HU-001. RF25 queda como preparación futura de arquitectura, sin HU atribuida.
