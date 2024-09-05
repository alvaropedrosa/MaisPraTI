const prompt = require ('prompt-sync')()

//Exercício 1
// const num1 = Number(prompt('Digite um número: '))

// if (num1 > 0){
//     console.log('O número informado é positivo!')
// } else if (num1 < 0){
//     console.log('O número informado é negativo!')
// } else if (num1 === 0){
//     console.log('O número é zero.')
// } else {
//     console.log('Erro! Informe um número.')
// }

//Exercicio 2

// const  year = Number(prompt('Informe um ano: '))

// if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0 )){
//     console.log(`O ano ${year} é um ano bissexto!`)
// } else {
//     console.log(`${year} não é um ano bissexto!`)
// }

//Exercício 3

let grade1 = Number(prompt(`Informe a primeira nota: `))
let grade2 = Number(prompt(`Informe a segunda nota: `))
let grade3 = Number(prompt(`Informe a terceira nota: `))

const avg = (grade1 + grade2 + grade3)/3
let concept = ''

if (avg >= 90){
    console.log(`A média das notas é ${avg.fix(2)}`)
    concept = 'A'
} else if (avg <= 80){
    console.log(`A média das notas é ${avg.toFixed(2)}`)
    concept = 'B'
} else {
    console.log(`É outra nota.`)
}

console.log('O conceito do aluno é: ' + concept)

// let carros = Array()()

// carros[0] = 'Civic'
// carros[1] = 10
// carros[2] = true
// carros['Hyago'] = '10'

// console.log(carros)

// let motos = Array('cbr', 'ninja', 10)
// let  livros = ['senhor dos aneis', 'o hobbit', 'harry potter']

// livros.push('sherlock holmes')
// livros.unshift('1984')
// livros.pop()
// livros.shift()