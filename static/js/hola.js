//alert('Hola desde la PC');
//document.getElementById('sensor').innerHTML='Valor1';
//document.getElementById('sensor2').innerHTML='Valor2';

function LED1_On(){
  document.getElementById('sensor').innerHTML='Led Encendido';
  console.log('Se presiono el boton On')
}

function LED1_Off(){
  document.getElementById('sensor').innerHTML='Led Apagado';
  console.log('Se presiono el boton Off')
}
