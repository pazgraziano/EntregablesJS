//// Entregable cadenas de texto

// Una cadena de texto con tu Nombre
let nombre = "Paz";
console.log(nombre)

// Una cadena de texto con tu Apellido
let apellido = "Graziano";
console.log(apellido)

// Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante = "Paz Graziano";
console.log(nombre.concat(" ", apellido))

// Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus = "Paz Graziano";
console.log(estudianteMayus.toUpperCase())

// Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus = "Paz Graziano"
console.log(estudianteMinus.toLowerCase())

// Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
console.log(estudiante.length)

// Una variable que contenga la primera letra del Nombre
console.log(estudiante.charAt(0))

// Otra variable que contenga la última letra del Apellido
console.log(estudiante.charAt(11))

// Una cadena de texto que elimine los espacios de la variable "estudiante"
console.log(nombre.concat(apellido))

// Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
console.log(estudiante.includes("Paz"))