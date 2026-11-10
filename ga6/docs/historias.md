# Historias de usuario · AutoFacture

Fecha de elaboración: **9 de noviembre de 2026 · Colombia (America/Bogota)**.

Historias desarrolladas mediante revisión asistida de los antecedentes y utilizadas en las quince interfaces construidas. No se atribuye su redacción ni sus correcciones a una intervención personal de Sebastián.

## Fuentes y conservación
El contexto adjunto enumera HU-001 a HU-006 por código y tema, sin una redacción completa ni criterios anteriores. Se conservan esos códigos y temas; las frases y criterios siguientes son su desarrollo documental, no una transcripción histórica. HU-007 y HU-008 se añaden por indicación expresa del contexto y del usuario. La guía, sección 4, pide al menos ocho historias, criterios comprobables y prioridad.

Prioridad propuesta: Alta = necesaria para el recorrido principal; Media = apoyo al seguimiento. Las prioridades de los RF se conservan aparte en requisitos.md; pendiente no es un nivel de prioridad. Los criterios describen el comportamiento esperado. Las comprobaciones efectivamente realizadas en esta etapa constan en verificacion.md; no se atribuyen al aprendiz. Los detalles no definidos por la fuente se marcan como propuesta.

## HU-001 · Recibir facturas

Como AUXR quiero recibir facturas identificables desde un archivo autorizado para dejar constancia de su ingreso y poder revisarlas.

**Prioridad:** Alta.

**Origen:** Original: tema y código del contexto; redacción y criterios desarrollados en esta preparación.

**Relación:** RF06, RF07, RF08, RF09, RF10; RF01 y RF24 condicionados, fuera de implementación.

**Criterios de aceptación:**

1. Con un registro ficticio identificable, crear un consecutivo único y estado Recibida, conservando las fechas y la OC informadas.
2. Si falta identificación del emisor o número, conservar el intento en incidencias sin crear factura ni completar datos inventados.
3. Si se repite la identidad emisor/número, informar el duplicado y no crear otra factura; este criterio desarrolla RNF15.
4. Mostrar las fechas ausentes como no informadas y el origen como archivo local, sin anunciar captura de FACTURE.

## HU-002 · Revisar datos

Como AUXR quiero revisar los datos de una factura y registrar novedades para decidir si puede avanzar a la asignación.

**Prioridad:** Alta.

**Origen:** Original: tema y código del contexto; criterios de versiones y revisión vigente tomados de sus decisiones.

**Relación:** RF02, RF03, RF04, RF05, RF19, RF20.

**Criterios de aceptación:**

1. Mostrar identificación, fechas, OC, moneda e importes y señalar los campos inconsistentes.
2. Guardar resultado y fecha de revisión vinculados a la versión revisada; Validada no debe aparecer como estado de factura.
3. Una corrección conserva la versión anterior y exige nueva revisión antes de asignar.
4. El rechazo preliminar requiere motivo y se identifica como decisión interna, no rechazo DIAN.
5. Sin reglas tributarias aprobadas, indicar revisión tributaria no realizada; no aplicar tasas inventadas.

## HU-003 · Asignar responsable

Como AUXR quiero asignar o reasignar una factura a un responsable para definir quién continúa el trámite.

**Prioridad:** Alta.

**Origen:** Original: tema y código del contexto; condiciones de asignación tomadas de sus decisiones.

**Relación:** RF11, RF12, RF14, RF19, RF20.

**Criterios de aceptación:**

1. Bloquear la asignación cuando no exista revisión vigente de la versión actual.
2. Proponer responsable con reglas activas por proveedor, OC, área o servicio; gana el número de prioridad menor.
3. Ante empate o falta de coincidencias, solicitar decisión manual sin elegir silenciosamente.
4. En asignación o reasignación manual exigir responsable activo y motivo; registrar fecha, resultado y evento con responsable anterior y nuevo.

## HU-004 · Gestionar trámite

Como RESP quiero actualizar el trámite de mis facturas asignadas para mantener informado su avance interno.

**Prioridad:** Alta.

**Origen:** Original: tema y código del contexto; alcance de RESP y cierre interno tomados del contexto.

**Relación:** RF15, RF19, RF20.

**Criterios de aceptación:**

1. El perfil RESP solo puede gestionar las facturas asignadas a su identidad ficticia.
2. Para una factura Asignada permitir pasar a En trámite y desde En trámite a Cerrada, registrando fecha y observación; transiciones implementadas en la demostración.
3. Bloquear el avance con revisión no vigente y mostrar el motivo.
4. Mostrar el cambio en detalle e historial y explicar que Cerrada no acredita pago ni contabilización.

## HU-005 · Alertas y tiempos

Como AUXR quiero consultar tiempos, vencimientos y demoras para identificar facturas que requieren seguimiento.

**Prioridad:** Media.

**Origen:** Original: tema y código del contexto; tratamiento de fechas ausentes tomado de sus decisiones.

**Relación:** RF16, RF17, RF18, RF19.

**Criterios de aceptación:**

1. Mostrar fecha de corte y tiempo transcurrido desde la recepción cuando exista fecha disponible.
2. Con vencimiento anterior al corte y trámite abierto, mostrar alerta de vencimiento; sin fecha, mostrar no informada y no inventarla.
3. Para demoras, usar un umbral ficticio visible y configurable como dato de prueba; si no hay umbral, indicar no evaluada.
4. Al abrir una alerta, navegar al detalle de la misma factura; diferenciar alertas por texto además de color.

## HU-006 · Reportes e indicadores

Como CODA quiero consultar reportes filtrados e indicadores para revisar la carga de trabajo y el estado de las facturas.

**Prioridad:** Media.

**Origen:** Original: tema y código del contexto; alcance de exportación precisado frente a la maqueta fija.

**Relación:** RF21, RF22, RF23. RF25 no se atribuye a esta historia: es preparación futura de arquitectura.

**Criterios de aceptación:**

1. Filtrar por estado, responsable y fechas, mostrando cantidad de resultados y mensaje cuando no haya coincidencias.
2. Calcular indicadores y totales con el mismo conjunto filtrado; separar totales por moneda.
3. En el conjunto actual sin filtros, mostrar tres facturas por COP 2.023.000 y, aparte, la incidencia FE-DEMO-104 por COP 357.000; no incluirla en cantidad ni total de facturas.
4. El CSV contiene las filas filtradas vigentes; no reutiliza la descarga fija de GA5.
5. Identificar Excel y PDF como pendientes si no se implementan; no anunciar sincronización FACTURE ni envío a ERP.

## HU-007 · Configurar reglas

Como AUXR autorizado quiero crear, editar y activar reglas de asignación para organizar la propuesta de responsables sin cambiar el código.

**Prioridad:** Alta.

**Origen:** Nueva: desarrollo explícito de RF13, indicado en el contexto. Actor definido durante la revisión asistida de los antecedentes: AUXR autorizado configura; CODA supervisa y consulta.

**Relación:** RF13, RF11, RF12, RF19, RF20.

**Criterios de aceptación:**

1. Reservar crear, editar y activar/desactivar a AUXR autorizado; CODA solo consulta. Listar reglas con condición, responsable, prioridad numérica y estado activo/inactivo.
2. En crear/editar exigir condición, responsable y prioridad numérica; impedir guardar si falta alguno y señalar el campo.
3. Guardar cambios con evento y conservar el valor anterior; una regla inactiva no participa en propuestas nuevas.
4. Comprobar con datos ficticios que prioridad 1 gana frente a 2 y que dos coincidencias con igual prioridad solicitan decisión manual.
5. El cambio de una regla no reasigna automáticamente facturas ya asignadas.

## HU-008 · Acceso interno de demostración

Como usuario interno quiero seleccionar mi identidad y perfil ficticios e ingresar a la demostración para recorrer las opciones previstas para mi rol.

**Prioridad:** Alta.

**Origen:** Nueva: derivada expresamente de RNF04 autenticación y RNF05 permisos en el contexto. RF-UI01 cubre solo la representación de interfaz.

**Relación:** RF-UI01; RNF04 y RNF05.

**Criterios de aceptación:**

1. Antes de ingresar mostrar que es una demostración y que no valida identidad real; exigir identidad y perfil ficticios disponibles.
2. Con AUXR mostrar recepción, revisión, asignación y alertas; solo AUXR autorizado configura reglas. RESP gestiona sus facturas. CODA supervisa y consulta sin crear, editar ni activar reglas.
3. Impedir acciones no previstas para el perfil también al abrir una página directamente, como restricción de demostración, sin presentarla como seguridad de servidor.
4. Al salir limpiar la selección del perfil; DEV no obtiene permisos de negocio implícitos.
5. No ofrecer registro público ni solicitar contraseñas reales.


## Corrección mediante revisión asistida
Durante la revisión asistida de los antecedentes, el asistente propuso conservar AUXR en HU-005 y AUXR autorizado en RF13. Esas correcciones se incorporaron sin cambiar códigos ni temas. La incidencia FE-DEMO-104 queda fuera de la bandeja mientras no tenga identificación suficiente. La propuesta y su redacción corresponden al trabajo del asistente; no se presentan como una intervención personal de Sebastián.
