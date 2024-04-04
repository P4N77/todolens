
function mostrarToast() {
  var toast = new bootstrap.Toast(document.getElementById('liveToast'));
  toast.show();
}   

document.getElementById('activar').addEventListener('click',function(e) {
  e.preventDefault()
  var lentesA =document.getElementById('lentes');
  var monturasA=document.getElementById('monturas');
  var otrosA =document.getElementById('otros');
  document.getElementById('abono').removeAttribute('disabled');
  document.getElementById('actualizar').removeAttribute('disabled');
  lentesA.disabled= true;
  monturasA.disabled= true;
  otrosA.disabled= true;
})

document.getElementById('actualizar').addEventListener('click',function(e) {
  e.preventDefault()

  var abonoAc = document.getElementById('abono').value;
  var saldoAc = parseFloat(document.getElementById('saldo').value);
  console.log(saldoAc);
  console.log(abonoAc);
  var nuevoValor = saldoAc - abonoAc;
  actualizarAbono(nuevoValor);
  var lentesAc =document.getElementById('lentes');
  var monturasAc=document.getElementById('monturas');
  var otrosAc =document.getElementById('otros');
  var abonoA= document.getElementById('abono');
  var botonA = document.getElementById('actualizar');
  lentesAc.disabled= false;
  monturasAc.disabled= false;
  otrosAc.disabled= false;
  abonoA.disabled= true;
  botonA.disabled = true;
  
})

function actualizarAbono(nuevo) {
  document.getElementById('saldo').value = nuevo.toFixed(2);
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

  // document.getElementById('boton1').addEventListener('click', function() {
  //   document.getElementById('actualizar').removeAttribute('disabled');
  // });
  
  // document.getElementById('boton2').addEventListener('click', function() {
  //   document.getElementById('boton3').style.display = 'block';
  // });



