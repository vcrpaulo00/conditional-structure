const nota = (Math.random() * 10). toFixed(1)
let conceito

switch(Math.floor(nota)){
    case 10:
    case 9:
        conceito ='A+'
        break // caso não seja inserido o break, será lido todas os cases.
    case 8:
    case 7:
        conceito = 'A'
        break
    default:
        conceito = 'F'
}

console.log(`A nota ${nota} recebe o conceito ${conceito}!`)

// console.log(Math.ceil(nota)) - ceil (arredonda para cima a casa decimal)
// console.log(Math.floor(nota)) - floor (arredonda para baixo a casa decimal)