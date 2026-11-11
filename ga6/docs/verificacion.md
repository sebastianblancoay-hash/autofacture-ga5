# Verificación final de AutoFacture

Revisión final: **10 de noviembre de 2026 · Colombia (America/Bogota)**.

El aprendiz aprueba las decisiones del proyecto y dirige las instrucciones; el codificador las implementa. Los resultados siguientes describen comprobaciones ejecutadas sobre los archivos, sin atribuir actuaciones manuales.

| Método | Resultado |
|---|---|
| Análisis estático | 33 HTML y 718 referencias locales correctos; quince códigos P01–P15, prioridades y sintaxis verificados. |
| Pruebas del modelo en Node | 105 comprobaciones correctas. |
| DOM simulado en Node | 31 combinaciones de pantalla e identidad correctas, además de los casos de regresión, errores y texto largo. |

## Etiquetas, foco y errores
El análisis estático comprueba labels, identificadores únicos y destinos ARIA de los campos estáticos. El DOM simulado comprueba las mismas asociaciones en los campos generados. Ante una revisión sin resultado, se muestra el error junto al campo y se solicita el foco en ese control. styles.css define el contorno :focus-visible, blanco en la cabecera y oscuro sobre fondo claro. Estos métodos no comprueban teclado físico ni lector de pantalla.

## Diseño adaptable
La hoja compartida define filtros de una columna como base, dos desde 48.01rem y tres desde 64rem. El menú móvil usa details/summary hasta 48rem; las tarjetas pasan a una columna. El JSON largo se inserta como texto en pre, con ajuste de líneas y desplazamiento interno. Las reglas se comprobaron en el código; el DOM simulado no calcula geometría, desbordamiento ni apariencia real de un dispositivo.

## Lógica verificada
Se conserva En trámite cuando se repite una revisión válida de la misma versión. Las versiones nuevas, revisiones pendientes o rechazadas y la falta de regla necesaria mantienen sus bloqueos. Las pruebas incluyen conservación de versiones, asignación/reasignación con motivo, permisos por identidad, transiciones de estado, importación válida y fallida, duplicados por NIT/número, reglas de prioridad menor y empate manual, CSV de filas filtradas y protección de fórmulas. También se comprueban reinicio y rechazo de guardados con una revisión de almacenamiento anterior.

## Datos y límites
El conjunto inicial permanece en tres facturas por COP 2.023.000 y una incidencia FE-DEMO-104 por COP 357.000 aparte, sin NIT inventado. El corte y reloj funcionales son ficticios: 9 de noviembre de 2026, 5:00 p. m., Colombia. Los bocetos conservan su escenario de octubre y las referencias GA5 se mantienen intactas.

No se documenta una inspección visual manual como resultado de estas pruebas. El acceso es de demostración: no implementa autenticación ni autorización de servidor. No hay integración con DIAN, FACTURE, SAP o Supabase, ni aprobación tributaria, cálculo de tasas reales, pago o contabilización. RF22 incluye CSV; Excel/PDF del reporte no están implementados. Las demoras no se evalúan sin un umbral definido. El PDF integrador y capturas no están incluidos en este ZIP.

## Repetir las comprobaciones
Desde la carpeta del proyecto, con Python y Node:

```sh
python pruebas/estatica.py
node pruebas/modelo.test.cjs
node pruebas/interfaz-simulada.test.cjs
```

Son comprobaciones sin dependencias externas, separadas de cualquier evaluación visual en navegador.

## Comprobaciones del navegador

El registro verificacion-navegador.md reúne C01 a C21, con su método y resultado. Incluye acceso ficticio, filtros, revisión vigente, asignación con motivo, conservación de versiones, gestión de estados, importación, CSV y reglas de prioridad. Las capturas del informe muestran quince interfaces y dos vistas con 356 píxeles CSS de contenido. El corte ficticio es el 9 de noviembre de 2026. Las pruebas automáticas y los recorridos del navegador se identifican por separado.
