//tarea 7
const arreglo= [1,2,4,5,7,11,15]; 

if(arreglo.length != null){
    console.log("existen datos");
}else {
  console.log("no existen datos en el arreglo ")
}

   
const {[arreglo.length - 2] : penult} = arreglo;


const {[arreglo.length - 3] : antepenult} = arreglo;

console.log(penult)
console.log(antepenult )

const fbcci = penult+antepenult
console.log("el resutado de fbcci es "+fbcci)