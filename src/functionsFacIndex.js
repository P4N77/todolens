function mostrarToast() {
    var toast = new bootstrap.Toast(document.getElementById('liveToast'));
    toast.show();
  }   


  document.getElementById('calcularButton').addEventListener('click', function(e) {
    e.preventDefault()
    // Obtener los valores de los inputs
    var lentes = parseFloat(document.getElementById('lentes').value);
    var monturas = parseFloat(document.getElementById('monturas').value);
    var otros = parseFloat(document.getElementById('otros').value);
    var abono = parseFloat(document.getElementById('abono').value);

    // Calcular el total
    var total = lentes + monturas + otros;

    // Mostrar el total
    document.getElementById('total').value = total.toFixed(2);

    // Calcular el saldo
    if (abono>total) {
      mostrarToast();
      return false
    }else{
      var saldo = total - abono;
          // Mostrar el saldo
    document.getElementById('saldo').value = saldo.toFixed(2);
    }
    
  });