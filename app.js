const readlineSync = require('readline-sync');
const nroRandom = () => { //funcion para hacer un rango aleatorio de numeros
    return Math.floor(Math.random() * (100 - 1 + 1)) + 1;

}

const NumeroSecreto = () => { 
let adivina_numero_secreto=nroRandom();
let ingresarNumero= readlineSync.question("Adivina el numero secreto, ingresa un numero: ");

while (ingresarNumero!=adivina_numero_secreto) {
    if (ingresarNumero<adivina_numero_secreto) {
        console.log("El numero es muy bajo, intente con otro");
        ingresarNumero= readlineSync.question("Ingrese otro numero: ");
    } else {
        if (ingresarNumero>adivina_numero_secreto) {
            console.log("El numero es muy alto, intente con otro");
            ingresarNumero= readlineSync.question("Ingrese otro numero: ");
        }
        }
} 
if (ingresarNumero==adivina_numero_secreto) {
    console.log("Felicidades, ha encontrado el numero secreto!")
}
}
NumeroSecreto();
