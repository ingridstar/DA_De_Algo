const A = [3,1,5,13,9,7]

 function SelectionSrt (A){
    
for(let y = 0 ; y < A.length ;y++){ // Recorre todo el arreglo 
    let med = y
    for(let x = y ;x<A.length;x++ ){ // Se compara, esto significa que va ir intercambiando el arreglo
    if(A[x]<A[med]){
            med = x 

    }
    }
    let aux = A[y]   // aux primero va a almacenar el estado inicial
     A[y] = A[med]    // Despues se almacena los estados de transicion de A[y] = A [med]
     A[med] = aux;  // Finalmente el ultimo estado se guarda dentro de aux
}
return A;
 }
 console.log(SelectionSrt(A)) // Imprime el arreglo