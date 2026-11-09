'use strict';
const paginas=[['P01 Acceso','index.html'],['P02 Bandeja','bandeja.html'],['P03 Detalle y revisión','detalle.html'],['P04 Asignación','asignacion.html'],['P05 Reportes','reportes.html'],['P06 Informe de novedad','errores.html'],['P07 Panel','panel.html'],['P08 Importar','importar.html'],['P09 Recepciones','recepciones.html'],['P10 Corregir datos','corregir.html'],['P11 Trámite','tramite.html'],['P12 Historial','historial.html'],['P13 Alertas','alertas.html'],['P14 Reglas','reglas.html'],['P15 Crear o editar regla','regla.html'],['Componentes','componentes.html']];
const form=document.getElementById('visor');
const pagina=document.getElementById('pagina');
const ancho=document.getElementById('ancho');
const tipo=document.getElementById('tipo');
const marco=document.getElementById('marco');
const medida=document.getElementById('medida');
for(const [nombre,archivo] of paginas){const o=document.createElement('option');o.value=archivo;o.textContent=nombre;pagina.append(o);}
const q=new URLSearchParams(location.search);
if(paginas.some(p=>p[1]===q.get('archivo')))pagina.value=q.get('archivo');
if(['360','768','1280'].includes(q.get('ancho')))ancho.value=q.get('ancho');
if(q.get('tipo')==='prototipo')tipo.value='prototipo';
function mostrar(){
  marco.width=Number(ancho.value);marco.height=1000;
  marco.src='../'+(tipo.value==='prototipo'?'prototipo/':'')+pagina.value;
  medida.textContent='Ancho solicitado '+ancho.value+' píxeles CSS.';
}
marco.addEventListener('load',()=>{
  try{
    const d=marco.contentDocument;
    const altura=Math.min(7500,Math.max(650,d.body.scrollHeight+30));
    marco.height=altura;
    medida.textContent='Ancho CSS observado '+marco.contentWindow.innerWidth+' píxeles. Alto del contenido '+d.body.scrollHeight+' píxeles.';
  }catch(e){medida.textContent='Revisa el marco desde la misma publicación web.';}
});
form.addEventListener('submit',e=>{e.preventDefault();mostrar();});
mostrar();
