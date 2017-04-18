class Avenger{
    nombre:string = undefined;
    equipo:string = undefined;
    nombreReal:string = undefined;

    puedePelear:boolean = false;
    peleasGanadas:number = 0;

    /*constructor(){
        console.log("Se ejecuto el constructor");
    }*/

    constructor(nombre: string, equipo:string, nombreReal:string){
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
}

let antman:Avenger = new Avenger("Antman", "Cap","Scott Lang");

console.log(antman);