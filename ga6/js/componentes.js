// Demostración aislada de validación: no importa, guarda ni transmite información.
(function () {
  const formulario = document.getElementById('formulario-ejemplo');
  if (!formulario) return;
  const resultado = document.getElementById('resultado-formulario');
  const reglas = [
    ['condicion', campo => campo.value.trim().length > 0, 'Escribe una condición ficticia.'],
    ['responsable', campo => campo.value !== '', 'Selecciona un responsable ficticio.'],
    ['prioridad', campo => campo.value.trim() !== '' && Number.isInteger(Number(campo.value)) && Number(campo.value) >= 1, 'Escribe un número entero mayor o igual a 1.']
  ];
  formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();
    let primero = null;
    reglas.forEach(function ([id, comprobar, mensaje]) {
      const campo = document.getElementById(id);
      const error = document.getElementById('error-' + id);
      const valido = comprobar(campo);
      error.textContent = valido ? '' : mensaje;
      error.hidden = valido;
      if (valido) campo.removeAttribute('aria-invalid');
      else { campo.setAttribute('aria-invalid', 'true'); if (!primero) primero = campo; }
    });
    resultado.textContent = primero ? 'Hay campos por corregir. Revisa los mensajes junto a cada campo.' : 'Campos del ejemplo completos. No se ha guardado ni aplicado ninguna regla.';
    if (primero) primero.focus();
  });
  formulario.addEventListener('reset', function () {
    reglas.forEach(function ([id]) {
      document.getElementById(id).removeAttribute('aria-invalid');
      const error = document.getElementById('error-' + id);
      error.textContent = ''; error.hidden = true;
    });
    resultado.textContent = 'Ejemplo limpio. No se guarda información.';
  });
})();
