// Solo presentación del recorrido. No autentica ni guarda datos.
(function(){
const q=new URLSearchParams(location.search), rol=q.get('rol')||'revision';
const nombres={auxr:'AUXR','auxr-autorizado':'AUXR autorizado',resp:'RESP · Lina Demo',coda:'CODA · solo consulta',revision:'Revisión de las quince pantallas'};
document.getElementById('perfil').textContent='Recorrido: '+(nombres[rol]||nombres.revision)+'. La selección no acredita permisos reales.';
const autorizado=rol==='auxr-autorizado'||rol==='revision';
document.querySelectorAll('[data-actor="autorizado"]').forEach(x=>x.hidden=!autorizado);
document.querySelectorAll('[data-actor="consulta"]').forEach(x=>x.hidden=autorizado);
document.querySelectorAll('[data-actor="auxr"]').forEach(x=>x.hidden=!['auxr','auxr-autorizado','revision'].includes(rol));
const fact=q.get('factura')||'101';
const datos={'101':['Proveedor Alfa','1.190.000','Recibida','Sin asignar','07/10/2026','20/10/2026'],'102':['Proveedor Beta','595.000','Asignada','Lina Demo','05/10/2026','18/10/2026'],'103':['Proveedor Gamma','238.000','En trámite','Pablo Demo','03/10/2026','12/10/2026']};
const v=datos[fact]||datos['101'];const n=datos[fact]?fact:'101';
if(document.getElementById('doc')){document.getElementById('doc').textContent='FE-DEMO-'+n+' · '+v[0]+' · COP '+v[1];document.getElementById('docestado').textContent='Estado: '+v[2]+' · Responsable: '+v[3];document.getElementById('docfechas').textContent='Recepción: '+v[4]+' · Vencimiento: '+v[5];}
if(document.getElementById('histdoc'))document.getElementById('histdoc').textContent='FE-DEMO-'+n+' · Eventos ilustrativos';
if(document.getElementById('reglatitulo')){const editar=q.get('modo')==='editar';document.getElementById('reglatitulo').textContent=editar?'Editar REGLA-DEMO-01 · AUXR autorizado':'Crear regla · AUXR autorizado';if(!editar){['condicion','prioridad'].forEach(id=>document.getElementById(id).value='');}}
document.querySelectorAll('a[href]').forEach(a=>{const raw=a.getAttribute('href');if(raw.startsWith('#')||/^(https?:|mailto:)/.test(raw))return;const u=new URL(raw,location.href);if(!u.pathname.endsWith('.html'))return;if(u.pathname.endsWith('/index.html'))return;u.searchParams.set('rol',rol);if((location.pathname.endsWith('detalle.html')||location.pathname.endsWith('historial.html'))&&(u.pathname.endsWith('detalle.html')||u.pathname.endsWith('historial.html')))u.searchParams.set('factura',n);a.href=u.href;});
const ingreso=document.getElementById('rol');if(ingreso){if(nombres[rol]&&rol!=='revision')ingreso.value=rol;ingreso.form.addEventListener('submit',()=>{ingreso.form.action=ingreso.value==='coda'?'panel.html':ingreso.value==='resp'?'tramite.html':'bandeja.html';});}
})();