function GregoryLeiPi(n) {
    let piGrL = 0.0;

    for (let i = 0; i < n; i++) {
        let term = 1.0 / (2 * i + 1);
        if (i % 2 === 0) {
            piGrL += term;
        } else {
            piGrL -= term;
        }
    }
    
    piGrL *= 4.0;

    console.log(`La aproximación que tiene π utilizando ${n} términos es de: ${piGrL}`);
}
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Teclea la longitud de (n) para calcular π: ", (n) => {
    GregoryLeiPi(parseInt(n));
    rl.close();
});