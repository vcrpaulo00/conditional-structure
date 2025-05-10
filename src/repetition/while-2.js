let nota = 0

while (nota <= 9) {
    console.log('Você precisa ser aprovado com louvor!')
    nota = (Math.random() * 10). toFixed(1)
}

console.log(`A nota ${nota} foi excelente!`)

// nesse caso, o laço é infinito e finalizará quando a nota for maior que 9