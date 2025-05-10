const nota = (Math.random() * 10).toFixed(1)
// Math.random, gera valores aleatórios entre 0.01 até 1
// toFixed, foi utilizado para fixar em somente duas casa decimais (pós ponto)

if (nota >= 9) {
    console.log('Quadro de honra!')
    console.log('Ganhou um desconto de 35%')
} else {
    if (nota >= 7) {
        console.log('Aprovado!')
        console.log('Parabéns')
    } else {
            if (nota >= 4.5) {
            console.log('Recuperação!')
            console.log('Você vai fazer algumas provas!')
        } else {
            console.log('Reprovado!')
        }
    }
}
console.log(`A nota do aluno foi ${nota}!`)
// Para incluir valores dentro da string texto, precisa ser dentro de duas crases ``
// vale lembrar que precisa colocar o valor dentro de chaves com o prefixo $

