let avenger = {
    nombre: "Steve",
    clave: "Capitán America",
    poder: "Droga"
};

//let nombre = avenger.nombre;
//let clave = avenger.clave;
//let poder = avenger.poder;

let {nombre, clave, poder } = avenger;

console.log(nombre, clave, poder);

let avengers: string[] = ["Thor", "Steve", "Tony Start"];

let[thor, capitan, iroman] = avengers;
console.log(thor, capitan, iroman);