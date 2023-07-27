const COTIZACION = 10000000;
const cotizarEquipos = (equipos) => equipos / COTIZACION;
const cotizarAsesoria = (asesoria) => asesoria / COTIZACION;
let seleccion = prompt("SELECCIONAR COTIZACION \n 1 - EQUIPOS \n 2 -  ASESORIA ");
let valor = prompt("VALOR");
let EQUIPO = prompt("CANTIDAD");
switch (seleccion) {
    case "1":
        alert(cotizarEquipos(valor) (EQUIPO));
        break;
    case "2":
        alert(cotizarEquipos(valor));
        break;
    default:
        break;
       
}




