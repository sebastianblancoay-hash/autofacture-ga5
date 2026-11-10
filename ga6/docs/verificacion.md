# Comprobaciones finales de AutoFacture

Fecha de elaboración: 9 de noviembre de 2026, Colombia.

El agente preparó comprobaciones estáticas, de lógica y de DOM simulado. El asistente director las repitió y realizó las comprobaciones reales del navegador. Las revisiones y correcciones son asistidas; no se atribuyen al aprendiz ni a Valentina.

## Resultados automáticos

- 33 HTML activos, 718 referencias locales y sus anclas comprobadas; quince interfaces P01–P15, plantilla, componentes y dieciséis HTML de prototipo.
- 105 comprobaciones de lógica correctas: roles, búsqueda, versiones, revisión vigente, asignación, reasignación, estados, reglas, importación y CSV.
- 31 combinaciones de pantalla e identidad en DOM simulado, con casos de corrección, persistencia, texto que parece HTML y validación.
- Ocho historias, RF01 a RF25 y RF-UI01, prioridades originales y separación de las tres facturas por COP 2.023.000 de la incidencia 104 por COP 357.000.

Para repetir desde la carpeta del proyecto:

```sh
python pruebas/estatica.py
node pruebas/modelo.test.cjs
node pruebas/interfaz-simulada.test.cjs
```

No se instalan dependencias. Estas pruebas automáticas no sustituyen la revisión visual.

## Revisión real de navegador

El registro verificacion-navegador.md contiene 21 casos de comprobación, incluido el resumen automático. Se verificaron acceso ficticio, filtros y resultado vacío, bloqueos, revisión y versión anterior, asignación con motivo, permisos de RESP/CODA, importación válida y fallida, CSV real y reglas por prioridad y empate. Se capturaron las quince interfaces y dos vistas móviles con 356 píxeles CSS de contenido, sin desborde horizontal del documento.

La revisión repetida de la misma versión conserva En trámite. Una corrección, revisión pendiente o rechazada conserva sus bloqueos. El caso se comprobó de nuevo en el navegador después del arreglo. Los recursos CSS/JS llevan una versión en sus enlaces para evitar cargar la publicación anterior desde caché. El visor de anchos conserva F-101 como contexto en las pantallas que lo requieren.

La demostración final se restableció a sus datos iniciales. Los datos del navegador son locales a ese origen y no se sincronizan entre dispositivos.

## Límites de esta entrega

No hay autenticación ni auditoría segura de servidor, conexión DIAN/FACTURE/SAP/Supabase, aplicación de tasas tributarias reales, pagos o contabilización. CSV está implementado; Excel/PDF del reporte del producto siguen fuera de alcance. Esto no afecta al informe académico PDF que acompaña la entrega. No se acredita evaluación con lector de pantalla ni prueba en teléfono físico.

Los archivos históricos en referencia/ se conservan como antecedentes. La revisión personal del aprendiz y la entrega en Zajuna le corresponden al usuario. La guía menciona OpenCode; las capturas de este trabajo muestran el agente de ChatGPT Work usado por decisión del usuario.
