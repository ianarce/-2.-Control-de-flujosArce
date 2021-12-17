
let numIngresado = parseInt(prompt("Ingresa un numero"))

if ((numIngresado > 0) && (numIngresado <=100) ){
    alert("El numero es mayor a 0 y menor o igual a 100")
}
else if( (numIngresado => 100) && (numIngresado <1000)){
    alert("El numero es mayor o igual a 100 y menor a 1000")
} 
else if( numIngresado < 0)
{
    alert("El numero es negativo")
}
else{
    alert("El numero es mayor a 1000")
}