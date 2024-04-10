document.getElementById('save-buttonFac').addEventListener('click', function() {
  var fechaActual = new Date();
  var formatoFecha = fechaActual.getFullYear() + '-' + (fechaActual.getMonth() + 1) + '-' + fechaActual.getDate();
  var formatoHora = fechaActual.getHours() + '-' + fechaActual.getMinutes() + '-' + fechaActual.getSeconds();

  // Crear el nombre del archivo con el timestamp
  var nombreArchivo = 'factura_' + formatoFecha + '_' + formatoHora + '.pdf';

  // Cambiar el nombre del archivo antes de imprimir
  document.title = nombreArchivo;
  window.print();

  // Restaurar el título original después de imprimir
  setTimeout(function() {
      document.title = "TodoLens"; // Cambia "Tu título original aquí" por el título que tenía tu página antes de imprimir
  }, 100);
});

