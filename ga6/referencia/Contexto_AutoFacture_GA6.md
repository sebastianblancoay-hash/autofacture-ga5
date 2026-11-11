# Contexto de AutoFacture para GA6 AA3 y AA4

Contexto técnico y académico del proyecto AutoFacture. Elaboración inicial: 9 de noviembre de 2026. Revisión documental: 10 de noviembre de 2026, Colombia.

AutoFacture es una aplicación web interna propuesta para recibir, revisar, asignar y seguir facturas. Los datos de la entrega son ficticios. El producto tiene tres módulos: recepción y revisión; asignación y gestión; reportes y monitoreo.

La maqueta previa adjunta contiene seis páginas HTML/CSS: P01 index.html Acceso; P02 bandeja.html; P03 detalle.html; P04 asignacion.html; P05 reportes.html; P06 errores.html. Paleta azul #16324F, verde #20644F y blanco. Arial, controles amplios, foco visible. Datos FE-DEMO-101 a 104; 4 registros base con total COP 2.380.000. Su asignación y CSV eran fijos; esta entrega incorpora JavaScript y datos coherentes entre pantallas.

Roles: AUXR recibe, revisa, asigna y consulta alertas; solo AUXR autorizado configura RF13. RESP gestiona sus facturas; CODA supervisa y consulta, sin administrar reglas ni modificar trámites. DEV es actor técnico y no tiene permisos de negocio implícitos. Elegir un perfil en una demostración no es autenticación real.

Estados: Recibida, Pendiente de corrección, Rechazada preliminarmente, Asignada, En trámite y Cerrada. Validada es un resultado de revisión y Cerrada significa cierre interno, no pago ni contabilización.

Decisiones: conservar el intento si falta identidad mínima; no inventar una factura o proveedor. Registrar primero la factura identificable y revisar después. Solo avanzar con revisión vigente. La asignación manual exige responsable y motivo; prioridad numérica menor gana; empate requiere decisión manual. Conservar versiones y eventos. No sumar monedas diferentes. No inventar tasas tributarias ni fechas faltantes. FACTURE por API, DIAN oficial y SAP están fuera de esta demostración.

RF históricos que se conservan: RF01 captura FACTURE condicionada; RF02 revisión interna de datos; RF03 revisión de impuestos con reglas aprobadas, condicionada; RF04 alertas inconsistencias; RF05 rechazo preliminar interno; RF06 registro desde archivo autorizado; RF07 consecutivo; RF08 fechas; RF09 OC; RF10 estado Recibida; RF11 responsable por proveedor; RF12 asignación por OC/área/servicio; RF13 configurar reglas; RF14 fecha y resultado de asignación; RF15 estados; RF16 tiempos; RF17 vencimientos; RF18 demoras; RF19 historial; RF20 auditoría; RF21 reportes con filtros; RF22 exportación Excel/PDF/CSV; RF23 panel; RF24 sincronización FACTURE condicionada; RF25 ERP futuro.

RNF relevantes: RNF01 usabilidad; RNF02 mensajes claros; RNF03 navegación; RNF04 autenticación; RNF05 permisos; RNF06 auditoría; RNF12 mantenibilidad; RNF15 duplicados. La seguridad real de servidor y las integraciones no se acreditan con el frontend.

HU originales: HU-001 recibir facturas, HU-002 revisar datos, HU-003 asignar responsable, HU-004 gestionar trámite, HU-005 alertas y tiempos, HU-006 reportes e indicadores. Añadir HU-007 configurar reglas como desarrollo de RF13 y HU-008 acceso de demostración derivado de RNF04/RNF05. Acceso no tenía RF propio: proponer RF-UI01 como derivación nueva de interfaz; no renumerar RF01 a RF25.

Pantallas previstas: P01 acceso; P02 bandeja; P03 detalle y revisión; P04 asignación/reasignación; P05 reportes; P06 informe de novedad; P07 panel general; P08 importar archivo; P09 recepciones e incidencias; P10 corregir datos y conservar versión; P11 gestionar trámite; P12 historial; P13 alertas; P14 reglas; P15 crear/editar regla. Crear/editar cuenta como una pantalla. Estados vacíos y vistas móviles no aumentan el conteo.

Base de datos posterior: documento del 17 de octubre registra 14 tablas de dominio más identidad_acceso, version_factura y auditoria_sistema, y la vista indicador_dashboard. Esta actividad no necesita conectarse ni modificar Supabase. El frontend deberá usar nombres y campos compatibles con este modelo y un almacén local con datos ficticios.

Evidencias GA6-220501096-AA3-EV01, EV02, EV03 y AA4-EV01, EV02, EV03. La guía adjunta exige un solo PDF en seis espacios, al menos 8 HU, RF con HU, comparación de 2 herramientas, mapa y mockups navegables, styles.css único, plantilla.html, componentes.html, explicación de HTML/CSS/JS, 12 a 20 pantallas, fichas RF/HU por pantalla, 2 vistas móviles como mínimo, bitácora mínima de 6 entradas y 3 correcciones propias.

Stack HTML5 CSS3 y JavaScript puro. Sin frameworks, librerías, CDN, React, Tailwind o Bootstrap. Interfaz en español. Cada archivo HTML debe abrir correctamente y la entrega incluir instrucciones. Preferir scripts clásicos compatibles con apertura local y datos de demostración compartidos; almacenamiento local solo de datos ficticios con reinicio del ejemplo.

Redacción sencilla de estudiante: explicar decisiones y cambios concretos. El aprendiz define las decisiones del proyecto, aprueba las correcciones y dirige las instrucciones; el codificador las implementa. Conservar una bitácora con las instrucciones completas y sus resultados. Describir las comprobaciones por su método y resultado, diferenciando análisis estático, lógica, DOM simulado y recorridos reales en navegador.

Organizar primero el contexto y AGENTS.md, historias y RF; después mapa y mockups; después componentes y estilos; después interfaces y JavaScript; por último comprobar accesibilidad, datos y recorridos. Generar ZIP con fuentes y recursos, sin depender de servicios externos.
