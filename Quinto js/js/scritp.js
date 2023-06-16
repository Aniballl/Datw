/**
 * if-else-> tambien existe otra estructura de conreol de flujo que es switch-case
 * Su función es: segun el parametro o el valor que contenga, puede realizar una serie de opciones
 * Ej:
 * switch(expresión){
 * case x
 *  //codel block
 * break;
 * case y:
 *  //code block
 * brak;
 * deffault:
 *  //code block
 * }
 * Asi es como funciona:
 * La expresión de cambio se evalúa una vez.
 * El valor de la expresión se compara con los valores de cada caso. Si hay una coincidencia, se ejecuta el bloque de codigo asociado. Si no hay ninguna coincidencia, se ejecuta el bloque de código predeterminado (default).
 */
//Ejemplo sencillo
let dia=new Date().getDay();
//let dia=2
console.log(dia);
let diaS; //declaramos una variable donde fuardamos el nombre del dia
switch(dia){ //5
    case 1:
        diaS="Lunes"
        break;
     case 2:
        diaS="Martes"
        break;
    case 3:
        diaS="Miercoles"
        break;
    case 4:
        diaS="Jueves"
        break;
    case 5:
        diaS="Viernes"
        break;
    case 6:
        diaS="Sabado"
       break;
    case 7:
        diaS="Domingo"
        break;
    default:
        diasS="Este dia no existe";         
}
document.getElementById("dia").innerHTML=diaS;
/**
 * Ejercicio:
 * De la base de la puntuación numerica de los alumnos, indicamos del 0 al 4 -> Insuficiente del 5 al 6-> bien, del 7-8->notable, y del 9-10->Sobresaliente.
 */
let nota= 7
console.log(nota);
let notaS;
switch(nota){
    case 1:
    case 2:
    case 3:
    case 4:
        notaS="Insuficiente";
        break;
    case 6:
    case 5:
        notaS="Bien";
        break;
    case 8:
    case 7:
        notaS="Notable";
        break;
    case 9:
    case 10:
        notaS="Sobresaliente";
        break;
    default:
        notaS="Esta no es tu nota";
}
document.getElementById("nota").innerHTML=notaS;
//Calcualar edad
function notaT(){
    let notaZ=document.getElementById("notaT").value;
    let msnNota;
    if(notaZ <= 0||notaZ >11 || notaZ== ""){
        let msnError="Indique bien su edad";
        document.getElementById("msnError").innerHTML=msnError;
    }else{
        if(notaZ>5){
            msnNota="Suspenso"; 
         }else if(notaZ>7){
            msnNota="biem";
        }else if(notaZ>9){
            msnNota="notable"
        }else if(notaZ<=9){
            msnNota="Sobresaliente"
         }else{
            msnNota="Ponlo bien bobo"
         }
        document.getElementById("resultado").innerHTML=msnNota;
    }
}