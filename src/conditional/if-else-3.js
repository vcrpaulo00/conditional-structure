const nota = (Math.random() * 10).toFixed(1)

if (nota >= 9) {
    console.log('Quadro de honra!')
    console.log('Ganhou um desconto de 35%')
} else if (nota >= 7) {
    console.log('Aprovado!')
    console.log('Parabéns')
} else if (nota >= 4.5) {
    console.log('Recuperação!')
    console.log('Você vai fazer algumas provas!')
} else {
    console.log('Reprovado!')
}

console.log(`A nota do aluno foi ${nota}!`)
