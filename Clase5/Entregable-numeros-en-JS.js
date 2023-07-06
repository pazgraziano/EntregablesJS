//// Entregable Números en JS

// Una variable que contenga tu altura en centímetros (entero)
let alt_cm = 156;
console.log(parseInt(alt_cm));

// Una variable que contenga tu altura en metros (número de coma flotante)
let alt_mt = 1.56;
console.log(parseFloat(alt_mt));

// Una variable que contenga tu peso en kilogramos (número de coma flotante)
let peso = 50.500;
console.log(parseFloat(peso));

// Una variable que contenga tu altura en metros redondeada hacia arriba
console.log(alt_mt.toFixed(0));

// Una variable que contenga tu peso en kilogramos redondeado hacia abajo
console.log(Math.floor(peso));

// Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript 
let max_valor_JS = Number.MAX_VALUE;

// Pendiente