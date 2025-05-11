for(let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue // diferente do break, nesse caso apenas pula o valor da condicional e continua imprimindo.
    }
    console.log(i)
}

console.log('Fim!')