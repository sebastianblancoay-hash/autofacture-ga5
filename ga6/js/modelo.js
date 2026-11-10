/* Modelo local de demostración. Sin red ni dependencias. */
(function (raiz) {
  'use strict';
  const CORTE = '2026-11-09T17:00:00-05:00';
  const IDENTIDADES = [
    { id: 'auxr', nombre: 'AUXR Demo', rol: 'AUXR', autorizado: false },
    { id: 'auxr-autorizado', nombre: 'AUXR Autorizado Demo', rol: 'AUXR', autorizado: true },
    { id: 'lina', nombre: 'Lina Demo', rol: 'RESP' },
    { id: 'pablo', nombre: 'Pablo Demo', rol: 'RESP' },
    { id: 'coda', nombre: 'CODA Demo', rol: 'CODA' }
  ];
  const ESTADOS = ['Recibida', 'Pendiente de corrección', 'Rechazada preliminarmente', 'Asignada', 'En trámite', 'Cerrada'];
  const copia = v => JSON.parse(JSON.stringify(v));
  function exigir(condicion, mensaje, campo) { if (!condicion) { const e = new Error(mensaje); e.campo = campo || ''; throw e; } }
  function texto(v) { return typeof v === 'string' ? v.trim() : ''; }
  function identidad(id) { const u = IDENTIDADES.find(x => x.id === id); exigir(u, 'Selecciona una identidad ficticia disponible.', 'identidad'); return u; }
  function permiso(id, accion) {
    const u = identidad(id);
    exigir((accion === 'reglas' && u.rol === 'AUXR' && u.autorizado) || (accion === 'operar' && u.rol === 'AUXR') || (accion === 'gestionar' && u.rol === 'RESP'), 'Esta identidad no tiene esa acción de demostración.');
    return u;
  }
  function evento(s, actor, tipo, ref, detalle) {
    s.eventos.push({ id: 'EV-' + (s.eventos.length + 1), fecha: CORTE, actor, tipo, ref, detalle });
  }
  function inicial() {
    const datos = [
      ['101', 'Proveedor Alfa', '900000001-0', 1190000, 'Recibida', '', '2026-10-07', '2026-10-20', 'OC-DEMO-7001', 'Compras'],
      ['102', 'Proveedor Beta', '900000002-0', 595000, 'Asignada', 'lina', '2026-10-05', '2026-10-18', 'OC-DEMO-7002', 'Compras'],
      ['103', 'Proveedor Gamma', '900000003-0', 238000, 'En trámite', 'pablo', '2026-10-03', '2026-10-12', '', 'Servicios']
    ];
    const facturas = datos.map((d, i) => ({ id: 'F-' + d[0], consecutivo: 'AF-DEMO-00' + (i + 1), estado: d[4], responsable: d[5], version: 1, versiones: [{ version: 1, datos: { numero: 'FE-DEMO-' + d[0], proveedor: d[1], nit: d[2], total: d[3], moneda: 'COP', emision: ['2026-10-06','2026-10-04','2026-10-02'][i], recepcion: d[6], vencimiento: d[7], oc: d[8], area: d[9], servicio: d[9] } }], revisiones: d[5] ? [{ version: 1, resultado: 'Validada ficticia', fecha: CORTE, actor: 'AUXR Demo', motivo: 'Resultado inicial ficticio para probar el recorrido. No es validación tributaria.', regla: 'REV-DEMO-01' }] : [] }));
    return { esquema: 1, revision: 0, siguiente: 4, facturas, recepciones: [{ id: 'INC-DEMO-104', fecha: CORTE, archivo: 'Conjunto inicial GA5', resultado: 'Incidencia', motivo: 'Identificación insuficiente del emisor. No se inventa NIT.', referencia: 'FE-DEMO-104', datos: { numero: 'FE-DEMO-104', proveedor: 'Proveedor Delta (nombre informado)', nit: '', total: 357000, moneda: 'COP' } }], reglas: [
      { id: 'R-1', campo: 'proveedor', valor: 'Proveedor Alfa', responsable: 'lina', prioridad: 1, activa: true, versiones: [] },
      { id: 'R-2', campo: 'area', valor: 'Servicios', responsable: 'pablo', prioridad: 2, activa: true, versiones: [] }
    ], reglaRevision: { id: 'REV-DEMO-01', disponible: true, descripcion: 'Comprobar identidad mínima e importe informado. Resultado ficticio para el trámite; no calcula impuestos.' }, eventos: [{ id: 'EV-1', fecha: CORTE, actor: 'Conjunto ficticio', tipo: 'Inicio', ref: 'sistema', detalle: 'Tres facturas por COP 2.023.000; incidencia 104 aparte por COP 357.000. Las revisiones de 102 y 103 son ficticias.' }] };
  }
  function actual(f) { return f.versiones.find(v => v.version === f.version).datos; }
  function buscar(s, id) { const f = s.facturas.find(x => x.id === id); exigir(f, 'La factura no existe.'); return f; }
  function puedeVer(f, actor) { const u = identidad(actor); return u.rol !== 'RESP' || f.responsable === actor; }
  function ver(s, id, actor) { const f = buscar(s, id); exigir(puedeVer(f, actor), 'RESP solo puede consultar sus propias facturas.'); return f; }
  function vigente(f) { return f.revisiones.some(r => r.version === f.version && r.resultado === 'Validada ficticia') && f.revisiones.filter(r => r.version === f.version).slice(-1)[0]?.resultado === 'Validada ficticia'; }
  function fechaValida(v) { return /^\d{4}-\d{2}-\d{2}$/.test(v) && !isNaN(Date.parse(v + 'T12:00:00Z')) && new Date(v + 'T12:00:00Z').toISOString().slice(0,10) === v; }
  function normalizarNit(v) { return texto(v).replace(/[.\s-]/g, '').toUpperCase(); }
  function clave(d) { return normalizarNit(d.nit) + '|' + texto(d.numero).toUpperCase(); }
  function validarDatos(d) {
    exigir(d && typeof d === 'object' && !Array.isArray(d), 'La fila debe ser un objeto JSON.');
    exigir(texto(d.nit), 'Falta identificación del emisor; se conserva como incidencia.', 'nit');
    exigir(texto(d.numero), 'Falta el número de factura; se conserva como incidencia.', 'numero');
    exigir(normalizarNit(d.nit).length > 0 && /^[A-Z0-9]+$/.test(normalizarNit(d.nit)), 'Usa una identificación ficticia con letras/números y separadores válidos.', 'nit');
    exigir(texto(d.proveedor), 'Falta el nombre informado del proveedor.', 'proveedor');
    exigir(typeof d.total === 'number' && Number.isFinite(d.total) && d.total >= 0 && Number.isSafeInteger(Math.round(d.total * 100)) && Math.abs(d.total * 100 - Math.round(d.total * 100)) < 0.00001, 'El total debe ser un número no negativo, de hasta dos decimales.', 'total');
    exigir(['COP','USD','EUR'].includes(d.moneda), 'Moneda admitida: COP, USD o EUR.', 'moneda');
    const out = {};
    for (const k of ['numero','proveedor','nit','moneda','emision','recepcion','vencimiento','oc','area','servicio']) { exigir(d[k] === undefined || typeof d[k] === 'string', 'El campo debe ser texto.', k); out[k] = texto(d[k]); exigir(out[k].length <= 200, 'Máximo 200 caracteres.', k); }
    for (const k of ['emision','recepcion','vencimiento']) exigir(!out[k] || fechaValida(out[k]), 'Fecha inválida. Déjala vacía si no fue informada.', k);
    out.total = d.total;
    return out;
  }
  function revisar(s, id, actor, resultado, motivo) {
    permiso(actor,'operar'); const f = ver(s,id,actor); exigir(f.estado !== 'Cerrada', 'El trámite está cerrado.');
    exigir(['Validada ficticia','Pendiente','Rechazada preliminarmente'].includes(resultado), 'Selecciona un resultado disponible.', 'resultado');
    exigir(texto(motivo), 'Explica el resultado de revisión.', 'motivo');
    if (resultado === 'Validada ficticia' && !s.reglaRevision.disponible) { resultado = 'Pendiente'; motivo = 'Falta REV-DEMO-01; no puede avanzar. ' + motivo; }
    validarDatos(actual(f));
    // Solo una revisión válida de la versión ya vigente conserva el avance.
    const conservarTramite = f.estado === 'En trámite' && vigente(f);
    f.revisiones.push({ version: f.version, resultado, motivo: texto(motivo), actor: identidad(actor).nombre, fecha: CORTE, regla: s.reglaRevision.disponible ? s.reglaRevision.id : 'Falta regla' });
    f.estado = resultado === 'Rechazada preliminarmente' ? resultado : resultado === 'Pendiente' ? 'Pendiente de corrección' : conservarTramite ? 'En trámite' : f.responsable ? 'Asignada' : 'Recibida';
    evento(s,actor,'Revisión',id,`Versión ${f.version}: ${resultado}. ${motivo}`); return resultado;
  }
  function propuesta(s, f) {
    const d = actual(f); const reglas = s.reglas.filter(r => r.activa && texto(d[r.campo]).toLowerCase() === r.valor.toLowerCase()).sort((a,b) => a.prioridad-b.prioridad);
    if (!reglas.length) return { tipo: 'manual', mensaje: 'No coincide una regla activa. Selecciona responsable y motivo manualmente.' };
    const ganadoras = reglas.filter(r => r.prioridad === reglas[0].prioridad);
    if (ganadoras.length > 1) return { tipo: 'empate', mensaje: 'Empate en prioridad ' + reglas[0].prioridad + '. Se requiere asignación manual.', reglas: ganadoras.map(r=>r.id) };
    return { tipo: 'regla', responsable: reglas[0].responsable, regla: reglas[0].id, mensaje: 'Propuesta ' + reglas[0].id + ', prioridad ' + reglas[0].prioridad + '. Confirma responsable y motivo.' };
  }
  function asignar(s,id,actor,responsable,motivo) {
    permiso(actor,'operar');const f=ver(s,id,actor);exigir(f.estado!=='Cerrada','El trámite está cerrado.');exigir(vigente(f),'Primero revisa y valida ficticiamente la versión actual.');
    exigir(IDENTIDADES.some(x=>x.id===responsable && x.rol==='RESP'),'Selecciona un responsable ficticio activo.','responsable');exigir(texto(motivo),'Escribe el motivo de asignación o reasignación.','motivo');
    const anterior=f.responsable; const prop=propuesta(s,f); f.responsable=responsable;f.estado='Asignada';
    evento(s,actor,anterior?'Reasignación':'Asignación',id,`De ${anterior||'sin asignar'} a ${responsable}. ${texto(motivo)}. Propuesta: ${prop.tipo}.`);
  }
  function corregir(s,id,actor,datos,motivo) {
    permiso(actor,'operar');const f=ver(s,id,actor);exigir(f.estado!=='Cerrada','No se modifica un trámite cerrado.');exigir(texto(motivo),'Escribe el motivo de corrección.','motivo');const d=validarDatos(datos);
    exigir(!s.facturas.some(x=>x.id!==id && x.versiones.some(v=>clave(v.datos)===clave(d))),'Ya existe otra factura con ese NIT y número.','numero');
    f.version += 1;
    f.versiones.push({ version: f.version, datos: d });
    f.estado = 'Pendiente de corrección';
    evento(s,actor,'Nueva versión',id,`Versión ${f.version}. Se conserva la anterior y se exige revisión nueva. Motivo: ${texto(motivo)}`);
  }
  function transicion(s,id,actor,estado,motivo) {
    permiso(actor,'gestionar');const f=ver(s,id,actor);exigir(vigente(f),'La versión actual necesita revisión vigente.');
    const siguiente={'Asignada':'En trámite','En trámite':'Cerrada'}[f.estado];exigir(siguiente && estado===siguiente,'Transición no permitida desde '+f.estado+'.','estado');exigir(texto(motivo),'Escribe una observación de avance.','motivo');
    const anterior=f.estado;f.estado=estado;evento(s,actor,'Cambio de estado',id,`${anterior} → ${estado}. ${texto(motivo)}. Cierre interno, sin pago ni contabilización.`);
  }
  function guardarRegla(s,actor,datos,id) {
    permiso(actor,'reglas');exigir(['proveedor','oc','area','servicio'].includes(datos.campo),'Selecciona una condición disponible.','campo');exigir(texto(datos.valor),'Escribe el valor de la condición.','valor');exigir(texto(datos.valor).length<=200,'Máximo 200 caracteres.','valor');
    exigir(IDENTIDADES.some(x=>x.id===datos.responsable && x.rol==='RESP'),'Selecciona un responsable activo.','responsable');exigir(Number.isSafeInteger(datos.prioridad)&&datos.prioridad>=1,'La prioridad debe ser un entero mayor o igual a 1.','prioridad');
    const limpio={campo:datos.campo,valor:texto(datos.valor),responsable:datos.responsable,prioridad:datos.prioridad,activa:datos.activa===true};
    let r;if(id){r=s.reglas.find(x=>x.id===id);exigir(r,'La regla no existe.');r.versiones.push(copia({campo:r.campo,valor:r.valor,responsable:r.responsable,prioridad:r.prioridad,activa:r.activa}));Object.assign(r,limpio);}else{r={id:'R-'+(s.reglas.length+1),...limpio,versiones:[]};s.reglas.push(r);}
    evento(s,actor,'Regla',r.id,(id?'Edición':'Creación')+' de regla. No reasigna facturas existentes.');return r.id;
  }
  function cambiarRevisionDemo(s,actor,disponible) { permiso(actor,'reglas');s.reglaRevision.disponible=disponible===true;evento(s,actor,'Regla de revisión','sistema',disponible?'REV-DEMO-01 disponible.':'REV-DEMO-01 ausente: las nuevas revisiones quedan pendientes.'); }
  function intento(s,actor,archivo,resultado,motivo,datos,raw) {
    const i={id:'REC-'+(s.recepciones.length+1),fecha:CORTE,archivo:texto(archivo)||'Archivo sin nombre',resultado,motivo,referencia:texto(datos?.numero),datos:datos ? copia(datos):null,fragmento:typeof raw==='string'?raw.slice(0,2000):''};s.recepciones.push(i);evento(s,actor,'Recepción',i.id,resultado+': '+motivo);return i;
  }
  function importar(s,actor,raw,archivo) {
    permiso(actor,'operar');const resumen=[];let filas;
    try { exigir(typeof raw==='string' && raw.length<=1000000,'Máximo 1 MB de texto.');const obj=JSON.parse(raw);filas=Array.isArray(obj)?obj:obj?.facturas;exigir(Array.isArray(filas)&&filas.length>0&&filas.length<=100,'Se espera {"facturas":[...]} con 1 a 100 filas.'); }
    catch(e){resumen.push(intento(s,actor,archivo,'Incidencia',e.message,null,raw));return resumen;}
    for(const original of filas){
      try {const d=validarDatos(original);exigir(!s.facturas.some(f=>f.versiones.some(v=>clave(v.datos)===clave(d))),'Duplicado: ya existe ese NIT y número.');
        const n=s.siguiente++;const f={id:'F-N'+n,consecutivo:'AF-DEMO-'+String(n).padStart(3,'0'),estado:'Recibida',responsable:'',version:1,versiones:[{version:1,datos:d}],revisiones:[]};s.facturas.push(f);const i=intento(s,actor,archivo,'Registrada','Se registra antes de revisar.',d);i.factura=f.id;resumen.push(i);
      }catch(e){resumen.push(intento(s,actor,archivo,'Incidencia',e.message,original));}
    }return resumen;
  }
  function registrarFallo(s,actor,archivo,motivo){permiso(actor,'operar');return intento(s,actor,archivo,'Incidencia',motivo,null);}
  function filtrar(s,actor,q={}) {
    return s.facturas.filter(f=>puedeVer(f,actor)).filter(f=>{const d=actual(f);return (!q.buscar||[d.numero,d.nit,d.proveedor,f.consecutivo].join(' ').toLowerCase().includes(q.buscar.toLowerCase()))&&(!q.estado||f.estado===q.estado)&&(!q.responsable||f.responsable===q.responsable)&&(!q.desde||(d.recepcion && d.recepcion>=q.desde))&&(!q.hasta||(d.recepcion && d.recepcion<=q.hasta));});
  }
  function totales(filas) { const cents={};for(const f of filas){const d=actual(f);cents[d.moneda]=(cents[d.moneda]||0)+Math.round(d.total*100);}return Object.fromEntries(Object.entries(cents).map(([k,v])=>[k,v/100])); }
  function celdaCSV(v) {
    let x = String(v ?? '');
    if (/^[\s\u0000-\u0020\uFEFF]*[=+@-]/.test(x) || /^[\t\r\n]/.test(x)) x = "'" + x;
    return '"' + x.replace(/"/g, '""') + '"';
  }
  function csv(filas) {const rows=[['Consecutivo','Factura','NIT ficticio','Proveedor ficticio','Estado','Responsable ficticio','Moneda','Total informado','Versión']];for(const f of filas){const d=actual(f);rows.push([f.consecutivo,d.numero,d.nit,d.proveedor,f.estado,IDENTIDADES.find(x=>x.id===f.responsable)?.nombre||'Sin asignar',d.moneda,d.total.toFixed(2),f.version]);}return '\uFEFF'+rows.map(row=>row.map(celdaCSV).join(';')).join('\r\n');}
  function alertas(s,actor) {return filtrar(s,actor).filter(f=>f.estado!=='Cerrada').map(f=>{const d=actual(f);const dias=d.recepcion?Math.floor((Date.parse(CORTE.slice(0,10)+'T12:00:00Z')-Date.parse(d.recepcion+'T12:00:00Z'))/86400000):null;return {id:f.id,numero:d.numero,dias,vencida:!!d.vencimiento&&d.vencimiento<CORTE.slice(0,10),mensaje:!vigente(f)?'Revisión vigente pendiente':!d.vencimiento?'Vencimiento no informado':d.vencimiento<CORTE.slice(0,10)?'Vencida al corte':'No vencida al corte'};});}
  const API={CORTE,IDENTIDADES,ESTADOS,inicial,copia,identidad,actual,ver,vigente,clave,validarDatos,revisar,propuesta,asignar,corregir,transicion,guardarRegla,cambiarRevisionDemo,importar,registrarFallo,filtrar,totales,csv,celdaCSV,alertas};
  raiz.AutoFactureModelo=API;if(typeof module!=='undefined'&&module.exports)module.exports=API;
})(typeof globalThis!=='undefined'?globalThis:this);
