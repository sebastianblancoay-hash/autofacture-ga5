'use strict';
const archivos=['AGENTS.md','docs/requisitos.md','docs/componentes.md','styles.css','plantilla.html'];
const selector=document.getElementById('archivo');
const elegido=new URLSearchParams(location.search).get('archivo');
if(archivos.includes(elegido))selector.value=elegido;
async function mostrar(){
  const ruta=selector.value;
  document.getElementById('titulo').textContent=ruta;
  try{
    const respuesta=await fetch('../'+ruta);
    if(!respuesta.ok)throw new Error('Archivo no disponible');
    document.getElementById('contenido').textContent=await respuesta.text();
  }catch(error){document.getElementById('contenido').textContent='No se pudo leer el archivo desde esta publicación.';}
}
document.getElementById('elegir').addEventListener('submit',evento=>{evento.preventDefault();mostrar();});
mostrar();
