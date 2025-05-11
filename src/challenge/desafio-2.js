const MIN = -40
const MAX = 40

let qtdePositivos = 0
let qtdeNegativos = 0

for (let i = MIN ;i <= MAX; i++) {
    if(i > 0 && i % 2 === 0) {
        qtdePositivos++
    }
    else if (i < 0 && i % 2 === -1) {
        qtdeNegativos++
    }  
}
console.log(`Quantidade de Positivos ${qtdePositivos}`)
console.log(`Quantidade de Negativos ${qtdeNegativos}`)