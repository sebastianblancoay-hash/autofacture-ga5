# AutoFacture · Preparación GA6 AA3 y AA4

Aplicación web interna propuesta para recibir, revisar, asignar y seguir facturas. Etapa autorizada: quince interfaces finales de demostración, almacenamiento compartido, importación JSON, versiones, reglas y CSV. Conservar los mockups y no publicar ni controlar otros chats.

## Fuentes y orden de trabajo
Leer docs/historias.md, docs/requisitos.md y docs/pantallas.md, docs/herramientas.md y docs/navegacion.md y docs/componentes.md. El contexto adjunto define el alcance de AutoFacture y la guía define la evidencia académica. referencia/maqueta_GA5 conserva la maqueta anterior sin cambios; no es una implementación GA6 terminada. Las instrucciones actuales del usuario prevalecen sobre ejemplos de la guía.

## Reglas de la implementación actual
- Usar solo HTML5, CSS3 y JavaScript puro. Sin frameworks, librerías, CDN, React, Tailwind ni Bootstrap. Sin dependencias externas.
- Toda la interfaz, ayudas, mensajes y documentación en español. Usar HTML semántico, lang="es", títulos claros y navegación consistente.
- Cada campo debe tener label asociado por for/id. Mantener foco visible, acceso por teclado, enlace para saltar al contenido y errores junto al campo; no comunicar estados solo con color.
- Usar un solo styles.css en la raíz, con variables en :root. No crear estilos por pantalla ni estilos en línea. El css/estilos.css de la referencia se conserva como archivo histórico; no es una segunda hoja activa de las interfaces construidas.
- Toda pantalla futura debe partir de plantilla.html. componentes.html es la guía reutilizable de componentes. plantilla.html contiene la estructura común y componentes.html demuestra los componentes en azul, verde y blanco. Los mockups de prototipo/ mantienen body.boceto y enlazan ../styles.css para seguir siendo de baja fidelidad, dentro de la misma hoja. Adaptar rutas relativas al copiar la plantilla. Las quince interfaces finales de demostración están en la raíz; prototipo/ conserva los bocetos anteriores.
- Para la implementación final mantener azul #16324F, verde #20644F, blanco, Arial y controles amplios. En los mockups usar grises para centrar la revisión en estructura y navegación. Diseñar para celular y escritorio; prever al menos dos capturas móviles.
- Usar el recorrido completo desde un mismo origen HTTP/HTTPS: publicación web o servidor estático local. file:// no garantiza almacenamiento compartido. Mantener scripts clásicos, sin dependencias ni solicitudes externas. Persistir solo datos ficticios y permitir restablecerlos.
- Mantener RF01 a RF25 y HU-001 a HU-006. HU-007 desarrolla RF13; HU-008 desarrolla RNF04/RNF05; RF-UI01 es nuevo y no renumera los RF históricos.
- Conservar las 15 pantallas construidas. Crear/editar regla es una sola pantalla; estados vacíos y versiones móviles no suman pantallas.

## Datos y reglas del negocio
- Solo datos ficticios: no usar credenciales, facturas, proveedores ni información personal reales. No conectarse con DIAN, FACTURE, SAP ni Supabase. DEV no obtiene permisos de negocio por ser actor técnico.
- AUXR recibe, revisa, asigna y consulta alertas (HU-005). Solo AUXR autorizado configura las reglas RF13/HU-007. RESP gestiona sus facturas; CODA supervisa y consulta, sin crear, editar ni activar/desactivar reglas. Seleccionar un perfil no es autenticación ni seguridad real.
- Si falta identidad mínima, conservar el intento como incidencia, sin inventar factura ni proveedor. Identidad mínima usada en la demostración: identificación del emisor y número de factura. Registrar la factura identificable antes de revisarla.
- Solo avanzar con revisión vigente. Una corrección crea versión e invalida la revisión anterior para continuar. Asignación manual exige responsable y motivo; número de prioridad menor gana; empate exige decisión manual.
- Estados: Recibida, Pendiente de corrección, Rechazada preliminarmente, Asignada, En trámite y Cerrada. Validada es resultado de revisión, no estado. Cerrada significa cierre interno, sin pago ni contabilización.
- Conservar versiones y eventos. No sumar monedas distintas ni inventar tasas tributarias o fechas. Las cifras tributarias de la maqueta son datos informados, no reglas aprobadas.

## Evidencia honesta
No afirmar pruebas, revisiones o correcciones hechas por Sebastián o Valentina sin evidencia. Identificar las propuestas y correcciones del asistente como revisión asistida de los antecedentes. No atribuirlas a una intervención personal de Sebastián. No declarar cumplimiento integral de la guía con estos documentos. La comparación de herramientas y los mockups pertenecen a esta etapa; la base de componentes también está autorizada; esta etapa incluye comprobaciones estáticas y de lógica; la revisión real en navegador la realiza otro asistente por separado; no atribuirla a Sebastián ni al asistente que prepara este ZIP; capturas y PDF integrador siguen pendientes. Registrar únicamente acciones realmente ejecutadas.

## Correcciones y límites del prototipo
FE-DEMO-104 se conserva como incidencia sin identidad suficiente: no asignar consecutivo de factura ni responsable. Tres facturas por COP 2.023.000 y una incidencia aparte por COP 357.000. La maqueta GA5 original permanece sin cambios y no define el conteo actual.

El prototipo es un recorrido de escenarios estáticos: los enlaces avanzan o regresan, los formularios ilustran campos y los mensajes aclaran que no guardan. Esta limitación corresponde solo a prototipo/. En la raíz se autorizan lógica local de demostración, importación JSON y CSV filtrado; sin autenticación real ni integraciones. El selector de vistas de rol, si se usa, solo cambia la presentación del mockup.

## Prioridades, trazabilidad y fecha
RF07, RF09, RF16, RF21, RF22 y RF25 son Media; todos los demás RF históricos son Alta. No usar Futura como prioridad. RF24 se relaciona con HU-001. RF25 queda como preparación futura de arquitectura sin asignarlo a HU-006. La fecha académica de esta entrega es 9 de noviembre de 2026, hora de Colombia (America/Bogota); no confundirla con el corte ficticio de los datos de GA5. Usar referencias reales en español para el informe. Las fuentes históricas adjuntas se conservan intactas.

## Reutilización de componentes
No insertar CSS en los HTML ni descargar fuentes externas. Usar las clases de styles.css y copiar únicamente los bloques necesarios de componentes.html. Los botones ejecutan acciones y los enlaces navegan. Cada error debe estar junto al campo y asociado con aria-describedby; señalar aria-invalid cuando corresponda. La guía de componentes usa ejemplos sin persistencia. Las interfaces finales sí guardan datos ficticios compartidos en localStorage del mismo origen. Mantener el menú adaptable y el foco visible sin añadir frameworks.

## Reglas de la etapa funcional
Usar tres facturas iniciales por COP 2.023.000 y FE-DEMO-104 como incidencia aparte por COP 357.000 sin inventar NIT. Corte visible: 9 de noviembre de 2026, 5:00 p. m., Colombia. REV-DEMO-01 es una regla ficticia de revisión sin tasas tributarias. Si falta, guardar Pendiente. No anunciar aprobación DIAN. Corrección crea versión e invalida revisión para continuar. Prioridad menor gana; empate exige elección manual. Duplicados se controlan por NIT normalizado y número. Renderizar archivos con textContent y proteger el CSV de fórmulas. Los permisos de demostración se revisan también en el modelo y al abrir páginas directamente, sin prometer seguridad de servidor.

Una nueva revisión Validada ficticia de la misma versión vigente conserva En trámite. Las revisiones pendientes/rechazadas y las correcciones con nueva versión siguen bloqueando el avance. Mantener filtros en columnas adaptables y datos informados con nombres claros, sin alterar sus valores.
