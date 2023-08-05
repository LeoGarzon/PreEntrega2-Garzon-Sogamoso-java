const Servicios = function(nombre,precio) {
    this.nombre=nombre;
    this.precio=precio;
}

let servicios1 = new Servicios("asesoria", 1200000)
let servicios2 = new Servicios("equipos", 2500000)
let servicios3 = new Servicios("instalacion", 3000000)
let servicios4 = new Servicios("soporte tecnico", 1500000)

let lista = [servicios1,servicios2,servicios3,servicios4]

function filtrarServicios(){
    let palabraClave = prompt("Ingrese servicio a cotizar")
    let resultado = lista.filter((servicio)=> servicio.nombre.includes(palabraClave))

    if(resultado.length > 0){
        console.table(resultado)
    }else{
        alert("sin resultado" + palabraClave)
    }
}




