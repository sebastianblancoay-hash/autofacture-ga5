# Verificación del navegador de AutoFacture

Fecha de elaboración: 9 de noviembre de 2026, Colombia.

Registro de comprobaciones asistidas. Las capturas muestran distintos pasos del recorrido y perfiles. Los restablecimientos recuperan los tres registros iniciales; las vistas de RESP muestran solo sus facturas. No se atribuyen estas acciones al aprendiz.

| Caso | Comprobación | Resultado |
|---|---|---|
| C01 | Formulario de componentes vacío: errores junto a los campos y foco en el primero. | Correcto |
| C02 | Acceso AUXR autorizado; bandeja inicial con tres facturas por COP 2.023.000 e incidencia 104 aparte. | Correcto |
| C03 | Búsqueda inexistente: cero registros y mensaje sin coincidencias. | Correcto |
| C04 | Asignación de FE-DEMO-101 bloqueada antes de revisión vigente. | Correcto |
| C05 | Asignación sin motivo: error y foco en motivo. | Correcto |
| C06 | Revisión y asignación a Lina reflejadas en reporte y CSV real con una fila COP 1.190.000. | Correcto |
| C07 | Repetir revisión válida de la misma versión de FE-DEMO-103. | Correcto |
| C08 | Corrección crea versión 2 por COP 1.200.000 y conserva versión 1 por COP 1.190.000. | Correcto |
| C09 | Lina avanza FE-DEMO-102 de Asignada a En trámite y queda bloqueada la versión corregida sin revisión. | Correcto |
| C10 | Lina no puede consultar directamente F-103 de Pablo. | Correcto |
| C11 | CODA consulta reglas sin editar; la ruta directa de creación queda bloqueada. | Correcto |
| C12 | Importar valido.json crea una factura FE-DEMO-105 y conserva recepción registrada. | Correcto |
| C13 | Volver a importar el mismo archivo produce incidencia por duplicado y no crea otra factura. | Correcto |
| C14 | Importar sin-identidad.json conserva el intento de FE-DEMO-106 con NIT ausente sin registrarla como factura. | Correcto |
| C15 | Versión final: 105 comprobaciones de lógica, 31 combinaciones de pantalla e identidad en DOM simulado, 33 HTML y 718 referencias estáticas. | Correcto |
| C16 | El navegador conservó scripts de la publicación anterior; se identificó la versión en los enlaces de recursos para cargar la actualización completa. | Correcto |
| C17 | Crear regla sin valor muestra error y foco en valor. | Correcto |
| C18 | R-1 prioridad 1 gana frente a R-3 prioridad 2. Al igualarlas, aparece empate y el responsable queda sin selección automática. | Correcto |
| C19 | Simular ausencia de REV-DEMO-01 convierte revisión válida solicitada en Pendiente y bloquea la asignación. | Correcto |
| C20 | RESP avanza su FE-DEMO-102 de Asignada a En trámite y después a Cerrada; el mensaje aclara cierre interno sin pago. | Correcto |
| C21 | P02 y P10 en marco con 356 píxeles CSS de contenido: documento sin desborde horizontal; menú móvil abre y cierra por su control. | Correcto |

El registro incluye pruebas de navegador y el resumen de pruebas automáticas en C15. Las restricciones de identidad son de demostración. La revisión móvil usó un marco con 356 píxeles CSS observados, no un teléfono físico. El menú móvil se abrió y cerró mediante su control accesible. No se certifica accesibilidad integral ni uso con lector de pantalla.

Durante la continuidad del trabajo, el mantenimiento del entorno eliminó copias temporales. Se recuperaron 25 imágenes del borrador de Word y los prompts del chat. La versión documental se recuperó de su ZIP guardado. El código publicado se comparó mediante su hash de Git; solo difería el LEEME actualizado. Las capturas nuevas se conservaron junto con las anteriores.
