function enviarMision(xmen) {
    console.log("Enviando a: " + xmen.nombre);
}
function enviarCuartel(xmen) {
    console.log("Enviando al cuarel a: " + xmen.nombre);
}
var wolverine = {
    nombre: "Wolverine",
    poder: "Regeneración"
};
enviarMision(wolverine);
enviarCuartel(wolverine);
