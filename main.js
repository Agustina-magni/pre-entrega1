
let operador = prompt('que operacion desea realizar: 1- sumar || 2 - restar || 3- multiplicar || 4 -dividir');
let numero1 = Number(prompt('ingrese el el primer numero'))
let numero2 = Number(prompt('ingrese el segundo numero'))
let total;

if (operador == 1){
    total = numero1+numero2
    alert ('el resultado de la suma es de' +total)
}else if (operador == 2){
    total = numero1-numero2
    alert ('El resultado de la resta es de'+total)
}else if (operador == 3){
    total = numero1*numero2
    alert('El resultado de la multiplicacion es de' +total)
}else if(operador == 4){
    total = numero1/numero2
    alert ('El resultado de la division es de' +total)
}else {
    alert('Opcion de operacion Incorrecta')
}
