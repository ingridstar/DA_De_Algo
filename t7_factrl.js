function  Factrl(n){
    if(n==1){
        return 1;
    }else{
        return n* Factrl(n-1);
    }
}
console.log("el resultado es "+Factrl(4));