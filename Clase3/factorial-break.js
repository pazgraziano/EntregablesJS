// Entregable --> Factorial utilizando bucle while, bifurcación if y sentencia break

let x = 10;
var i = x-1;

while(x) {
    x *= i;
    i--;
    if (i <= 1) break;
}
console.log(x)