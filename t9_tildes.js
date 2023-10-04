function contaVocles(frase) {
    let contaVocles = 0;
    let vocales = 'aeiouáéíóúÁÉÍÓÚAEIOU';

    for(let i = 0; i < frase.length; ++i) {
        if (vocales.indexOf(frase[i]) !== -1) {
            ++contaVocles;
    }
}
return contaVocles;
}
//examples
try {
    console.log(contaVocles('Hoy iré a la playa en un camión')); // 12
} catch (e) {
    console.log(`Error: ${e.message}`);
}
console.log();

try {
     console.log(contaVocles('Cuál es la diferencia entre tú y yo?')); // 13
} catch (e) {
     console.log(`Error: ${e.message}`);
}
console.log();