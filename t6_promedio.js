let A = [20,11,8,9,15,7,6,1]
let suma = A[0]
let promed = 0

function promedio(){
    for(let i = 1; i<A.length; i++){
        sum = suma+A[i]
    }

    promed = suma/A.length

    return promed
}

console.log(promedio())