const A = [15,11,2,1,6,4,8]

function BubbleSrt (A){
for(let x = 0 ; x<A.length - 1 ;x++){
    for(let y= 0 ;y <A.length -1  ;y++)  
    if(A[y]>A[y+1]){
            let aux = A[y]  
            A[y] = A[y+1] 
            A[y+1] = aux;  
    }
}
return A 
}
console.log(BubbleSrt(A))