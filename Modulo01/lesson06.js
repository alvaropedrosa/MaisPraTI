
// exercício 1

//let num1 = 18
//
//num1 %2 === 0 ? console.log(`PAR!`) : console.log(`IMPAR!`)

//excercício 2

//let n1 = 2
//let n2 = 5
//let n3 = 3
//
//if((n1 > n2) && (n1 > n3)){
//    console.log('O primeiro valor é maior')
//} else if((n2 > n1) && (n2 > n3)){
//    console.log('O segundo é maior')
//} else {
//    console.log('O terceiro é maior')
//}

//const prompt = require('prompt-sync')()
//
//let num1 = Number(prompt("Insira o primeiro valor: "))
//let num2 = Number(prompt("Insira o segundo valor: "))
//let operation = prompt('Informe a operação desejada (+, -, /, *):')
//let result = 0
//
//if(operation === '+'){
//    result = num1 +num2
//} else if(operation === '-'){
//    result = num1 - num2
//} else if(operation === '*'){
//    result = num1 * num2
//} else if(operation === '/'){
//    if(num2 !==0){
//        result = num1 / num2
//    } else {
//        console.log("Erro: divisão por zero!")
//        result = undefined
//    }
//} if(result !== undefined){
//    console.log('Resultado: ', result)
//}

//let opt = 1
//
//switch(opt){
//    case 1:
//        console.log('vc selecionou a primeira opção')
//        break
//    case 2:
//        console.log('vc selecionou a primeira opção')
//        break
//    default:
//        console.log('vc não selecionou uma opção')
//        break
//}

//excercício calculadora switch

//const prompt = require('prompt-sync')()
//
//let num1 = Number(prompt("Insira o primeiro valor: "))
//let num2 = Number(prompt("Insira o segundo valor: "))
//let operation = prompt('Informe a operação desejada (+, -, /, *):')
//let result = 0
//
//if(operation === '+'){
//    result = num1 +num2
//} else if(operation === '-'){
//    result = num1 - num2
//} else if(operation === '*'){
//    result = num1 * num2
//} else if(operation === '/'){
//    if(num2 !==0){
//        result = num1 / num2
//    } else {
//        console.log("Erro: divisão por zero!")
//        result = undefined
//    }
//} if(result !== undefined){
//    console.log('Resultado: ', result)
//
//}
//

//Exercício 1: Verifiquem o dia da semana com a estrutura switch-case
const prompt = require('prompt-sync')()

let sem = Number(prompt("Insira um número de 1 a 7: "))

switch(sem){
    case 1:
        console.log("O ", sem,"º dia é domingo!")
        break
    case 2:
         console.log("O ", sem,"º dia é segunda-feira!")
         break
    case 3:
        console.log("O ", sem,"º dia é terça-feira!")
        break
    case 4:
         console.log("O ", sem,"º dia é quarta-feira!")
        break
    case 5:
        console.log("O ", sem,"º dia é quinta-feira!")
        break
    case 6:
        console.log("O ", sem,"º dia é sexta-feira!")
        break
    case 7:
        console.log("O ", 7,"º dia é sabado!")
        break
}

//Exercício 2: Calcular o número de dias em um mês.


//- Sendo que o mês 1, 3, 5, 7, 8, 10 e 12 tem 31 dias
//- Os meses 4, 6, 9 e 11 tem 30 dias 
//- Mês 2 tem 28 dias