# Requisitos · AutoFacture

Revisión final: **10 de noviembre de 2026 · Colombia (America/Bogota)**.


Elaboración inicial: **9 de noviembre de 2026 · Colombia (America/Bogota)**.

## Fuente y alcance
RF01 a RF25 conservan los códigos y temas del contexto adjunto. La descripción «El sistema debe…» desarrolla esos temas, porque el adjunto no aporta el documento histórico completo. Las prioridades históricas y las relaciones RF24/RF25 se conservan como decisiones del proyecto aprobadas por el aprendiz. Los códigos no se reemplazan ni se renumeran. La guía, sección 4, exige código, descripción, HU y prioridad.

La columna de alcance distingue lo que se representa localmente y lo que seguirá fuera de implementación. Conservar un RF no significa haberlo programado, probado o cumplido. RF01 y RF24 se relacionan con HU-001, sin implementar integraciones. RF25 es preparación futura de arquitectura, sin HU de origen atribuida. Una integración pendiente conserva su prioridad histórica; su condición se registra en alcance.

## Decisiones del proyecto aprobadas
El aprendiz aprueba conservar RF01 a RF25 y las seis historias anteriores, HU-001 a HU-006. El conjunto se completa hasta ocho historias en total con HU-007 (configurar reglas) y HU-008 (acceso interno de demostración).

AUXR recibe, revisa, asigna y consulta alertas. Solo AUXR autorizado configura RF13. RESP gestiona sus propias facturas y CODA consulta, sin administrar reglas ni modificar trámites.

Se conservan las prioridades originales: RF07, RF09, RF16, RF21, RF22 y RF25 son Media; los demás RF históricos son Alta. RF24 se relaciona con HU-001. RF25 se mantiene como preparación futura de arquitectura, sin atribuirlo a HU-006.

El aprendiz define y dirige estas decisiones; el codificador implementa las instrucciones en la demostración. La aprobación del alcance no sustituye las comprobaciones técnicas ni implementa integraciones.

## Tabla de requisitos funcionales

| Código | Tema histórico | Descripción | HU de origen o relación | Prioridad histórica | Alcance de la demostración construida |
|---|---|---|---|---|---|
| RF01 | captura FACTURE condicionada | El sistema debe capturar facturas desde FACTURE cuando exista una integración autorizada y disponible. | HU-001 | Alta | No implementado; sin API ni conexión. |
| RF02 | revisión interna de datos | El sistema debe permitir revisar internamente los datos de la factura y guardar el resultado de la revisión. | HU-002 | Alta | Revisión local implementada, vinculada a versión y resultado ficticio. |
| RF03 | revisión de impuestos con reglas aprobadas, condicionada | El sistema debe permitir revisar impuestos con reglas aprobadas cuando estén disponibles. | HU-002 | Alta | Condicionado; sin reglas aprobadas mostrar no evaluado, sin inventar tasas. |
| RF04 | alertas inconsistencias | El sistema debe mostrar las inconsistencias detectadas durante la revisión interna. | HU-002 | Alta | Mensajes locales implementados, sin validación oficial. |
| RF05 | rechazo preliminar interno | El sistema debe permitir registrar un rechazo preliminar interno con su motivo. | HU-002 | Alta | No representa rechazo de DIAN. |
| RF06 | registro desde archivo autorizado | El sistema debe registrar facturas identificables desde un archivo autorizado y conservar los intentos con incidencias. | HU-001 | Alta | Demostración con archivo ficticio; formato JSON documentado en LEEME.md y muestras/. |
| RF07 | consecutivo | El sistema debe generar un consecutivo interno único para cada factura registrada. | HU-001 | Media | Distinto del número del proveedor; control local. |
| RF08 | fechas | El sistema debe conservar y mostrar las fechas informadas de emisión, recepción y vencimiento. | HU-001 | Alta | No completar fechas ausentes. |
| RF09 | OC | El sistema debe conservar y mostrar la referencia de la orden de compra cuando se informe. | HU-001 | Media | Sin consulta a SAP ni confirmación externa de OC. |
| RF10 | estado Recibida | El sistema debe asignar el estado Recibida al registrar una factura identificable. | HU-001 | Alta | Un intento sin identidad queda en incidencias. |
| RF11 | responsable por proveedor | El sistema debe proponer un responsable según las reglas activas por proveedor. | HU-003, HU-007 | Alta | Solo propuesta local; requiere revisión vigente. |
| RF12 | asignación por OC/área/servicio | El sistema debe proponer asignación según reglas de OC, área o servicio. | HU-003, HU-007 | Alta | Menor prioridad numérica gana; empate manual. |
| RF13 | configurar reglas | El sistema debe permitir configurar reglas de asignación con condición, responsable, prioridad y estado. | HU-007 | Alta | Solo AUXR autorizado configura; CODA supervisa y consulta. Sin reglas tributarias implícitas. |
| RF14 | fecha y resultado de asignación | El sistema debe guardar fecha y resultado de cada asignación o reasignación. | HU-003 | Alta | Manual exige responsable y motivo. |
| RF15 | estados | El sistema debe permitir gestionar los estados del trámite interno conservando sus cambios. | HU-004 | Alta | Validada es resultado; Cerrada no significa pagada. |
| RF16 | tiempos | El sistema debe mostrar tiempos transcurridos del trámite a partir de las fechas disponibles. | HU-005 | Media | Corte visible; sin fechas no calcular. |
| RF17 | vencimientos | El sistema debe mostrar vencimientos y alertas usando la fecha informada y el corte de consulta. | HU-005 | Alta | Sin vencimiento informar dato ausente. |
| RF18 | demoras | El sistema debe identificar demoras según un umbral definido y visible. | HU-005 | Alta | Umbral ficticio de prueba; sin umbral no evaluar. |
| RF19 | historial | El sistema debe conservar y mostrar el historial de recepción, revisiones, versiones, asignaciones y trámite. | HU-002, HU-003, HU-004, HU-005, HU-007 | Alta | Eventos locales ficticios, sin garantía de inmutabilidad. |
| RF20 | auditoría | El sistema debe registrar identidad ficticia, fecha, acción y referencia del cambio para su consulta. | HU-002, HU-003, HU-004, HU-007 | Alta | Simulación; no acredita auditoría segura de servidor. |
| RF21 | reportes con filtros | El sistema debe permitir consultar reportes filtrados de facturas. | HU-006 | Media | Mismo conjunto de datos que las demás pantallas. |
| RF22 | exportación Excel/PDF/CSV | El sistema debe permitir exportar los reportes en Excel, PDF y CSV. | HU-006 | Media | RF completo conservado. CSV dinámico implementado con las filas filtradas; Excel/PDF no implementados. No dar por cumplidos los tres formatos. |
| RF23 | panel | El sistema debe mostrar un panel general de indicadores del trámite. | HU-006 | Alta | Separar monedas; informar filtros y corte. |
| RF24 | sincronización FACTURE condicionada | El sistema debe sincronizar información con FACTURE cuando exista integración autorizada y disponible. | HU-001 | Alta | No implementado ni simulado como conexión exitosa. |
| RF25 | ERP futuro | El sistema debe permitir una integración futura con el ERP según especificaciones aprobadas. | Sin HU atribuida · preparación futura de arquitectura | Media | Preparación futura de arquitectura para ERP; sin conexión a SAP ni contabilización en esta entrega. |
| RF-UI01 | Acceso interno de demostración, nuevo | El sistema debe permitir seleccionar una identidad y perfil ficticios, entrar y salir del recorrido y representar las opciones disponibles según el rol. | HU-008 | Alta | Derivado de RNF04 y RNF05; no implementa autenticación real. |

## RNF relevantes conservados

| Código | Tema del contexto | Aplicación en esta entrega |
|---|---|---|
| RNF01 | Usabilidad | Controles claros, amplios y adaptables a celular. |
| RNF02 | Mensajes claros | Explicar el problema y la acción de corrección junto al campo. |
| RNF03 | Navegación | Menú consistente, ubicación y regreso a la bandeja. |
| RNF04 | Autenticación | En producto real requiere servidor; RF-UI01 representa únicamente acceso de demostración. |
| RNF05 | Permisos | Representar AUXR, RESP y CODA; no confundir controles locales con autorización segura. |
| RNF06 | Auditoría | Mostrar eventos ficticios relacionados con RF19/RF20. |
| RNF12 | Mantenibilidad | Plantilla, componentes reutilizables y styles.css único. |
| RNF15 | Duplicados | Detectar coincidencias de emisor/número en los datos locales, sin crear otro registro. |

No se reconstruyen RNF no incluidos en la fuente.

## Reglas y decisiones de la implementación
El contexto indica conservar intentos sin identidad, revisar después de registrar, exigir revisión vigente para avanzar, guardar versiones y eventos, usar motivo y responsable en asignación manual y resolver empates manualmente. Son reglas tomadas de la fuente.

El proyecto usa identificación del emisor y número de factura como identidad mínima y clave local de duplicado. Los roles vigentes están aprobados: solo AUXR autorizado configura reglas y CODA consulta. La demostración implementa el paso de Asignada a En trámite y luego a Cerrada para RESP. Las demoras quedan sin evaluar porque no hay un umbral definido. El aprendiz aprueba estas decisiones y el codificador las implementa. Los temas históricos se conservan sin atribuirles detalles no incluidos en la fuente.

AUXR recibe, revisa, asigna y consulta alertas (HU-005); AUXR autorizado configura reglas (RF13/HU-007). RESP gestiona sus facturas; CODA supervisa y consulta, sin administrar reglas. DEV es técnico y no hereda permisos. No sumar monedas diferentes ni inferir fechas o tasas. Los nombres de campos futuros deben contrastarse con el modelo de datos cuando esté disponible: el contexto solo menciona su existencia, no incluye su esquema completo. No modificar ni conectar Supabase.

## Conjunto de datos del prototipo
Frente a GA5, FE-DEMO-104 pasa a incidencia por identificación insuficiente, sin inventar NIT. Bandeja: tres facturas y COP 2.023.000. Incidencia aparte: COP 357.000. El total de recepción de COP 2.380.000 no se presenta como total de facturas registradas. El valor informado de la incidencia no acredita una factura identificada.
