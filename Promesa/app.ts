let prom1 = new Promise(function(resolve, reject){
    setTimeout( ()=>{
        console.log("Promesa terminada");
        //Si fue exitoso
        //resolve();

        //Si termina mal
        reject();
    }, 1500)
})

prom1.then(function(){
    console.log("Ejecutarme cuando se termine bien");
},
function(){
    console.error("Ejecutarme si algo sale mal");
}
)