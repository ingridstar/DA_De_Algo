function fbcciRecu(limite) {
    if (limite < 3) {
        return 1;
    }
    return fbcciRecu(limite - 1) + fbcciRecu(limite - 2);
}
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Ingrese el límite de Fibonacci: ', (limite) => {
    const resultado = fbcciRecu(parseInt(limite));
    console.log(`Su ${limite}-ésimo término de la serie es: ${resultado}`);
    rl.close();
});