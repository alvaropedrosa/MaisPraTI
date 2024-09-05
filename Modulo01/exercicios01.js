const prompt = require('prompt-sync')()
/*1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.*/

// let nu1 = Number(prompt("Digite um número: "))
// nu1 %2 === 0 ? console.log(`PAR!`) : console.log(`IMPAR!`)

/*2. Crie um programa que classifica a idade de uma pessoa em categorias 
(criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else./*

// let idade = Number(prompt("Digite sua idade: "))

// if(idade > 0, idade <= 11){
//     console.log(`Sua idade é ${idade} então você é uma criança!`)
// } else if(idade > 11, idade <=17){
//     console.log(`Sua idade é ${idade} então você é um adolecente!`)
// } else if(idade > 17, idade <=49){
//     console.log(`Sua idade é ${idade} então você é um adulto!`)
// } else if(idade > 49){
//     console.log(`Sua idade é ${idade} então você está na melhor idade!`)
// } else {
//     console.log(`Idade inválida`)
// }

/*3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.*/

// let nota = Number(prompt("Digite a sua nota: "))

// if(nota >= 5 && nota <= 10){
//     console.log(`Nota ${nota}, você está aprovado!`)
// } else if(nota > 3 && nota <=4.9){
//     console.log(`Nota ${nota}, você está de recuperação!`)
// } else if(nota > 0 && nota <= 3){
//         console.log(`Nota ${nota}, você está reprovado!`)
// } else {
//     console.log("Nota invalida")
// }

/*4.Crie um menu interativo no console que oferece ao usuário a escolha de três opções. 
Utilize switch-case para implementar a lógica de cada opção selecionada.*/

// function menuInterativo(){

// console.log("Menu de opções:")
// console.log("1. Misto-quente!")
// console.log("2. Pão de queijo recheado!")
// console.log("3. Coxinha de frango!")

// let opcao = prompt("Escolha uma opção: ")

//     switch(opcao){
//         case '1':
//             console.log("Voçê selecionou Misto-Quente")
//             break
//         case '2':
//             console.log("Voçê selecionou Pão de queijo recheado")
//             break
//         case '3':
//             console.log("Voçê selecionou Coxinha de frango")
//             break
//         default:
//             console.log("Opção inválida. tente novamente!")
//             menuInterativo()
//     }
// }

// menuInterativo()

/*5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else.*/

// function calcImc(){

//     let altura = prompt("Informe a sua altura: ")
//     let peso = prompt("Informe o seu peso: ")

//     let imc = peso / (altura*altura)

//     if(imc < 18.5){
//         console.log(`Seu IMC é: ${imc}, e você está abaixo do peso ideal`)
//     } else if(imc >= 18.5, imc <= 29.9){
//         console.log(`Seu IMC é: ${imc}, e você está no seu peso ideal`)
//     } else if(imc >=25, imc <= 29.9){
//         console.log(`Seu IMC é: ${imc}, e você está em sobrepeso`)
//     } else if(imc >= 30, imc <= 34.9){
//         console.log(`Seu IMC é: ${imc}, e você está obeso no gral 1`)
//     } else if(imc >= 35, imc <= 39.9){
//         console.log(`Seu IMC é: ${imc}, e você está obeso no gral 2`)
//     } else if(imc > 40){
//         console.log(`Seu IMC é: ${imc}, e você está obeso no gral 3`)
//     } else {
//         console.log("Entrada invalida, tente novamente!")
//         calcImc()
//     }
// }
// calcImc()


/*6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)*/

// function triangulos(){
//     console.log("Informe os valores dos lados para saber o tipo de triângulo.")
//     let a = parseInt(prompt("Digite o valor do lado A: "))
//     let b = parseInt(prompt("Digite o valor do lado B: "))
//     let c = parseInt(prompt("Digite o valor do lado C: "))

//     if((a < (b + c)) && (b < (a + c)) && (c < (a + b))){
//         if(a == b || a == c || b == c){
//             console.log("Os dados informados correspondem a um triangulo isósceles!")
//         } else if(a !== b && b !== c){
//             console.log("Os dados informados correspondem a um triangulo escaleno!")
//         } else if(a == b && b == c){
//             console.log("Os dados informados correspondem a um triangulo equilátero!")
//         } else {
//             console.log("Os dados informados são inválidos, tente novamente!")
//             triangulos()
//         }
//     }
// }

// triangulos()

/*7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.*/

// let maca = parseInt(prompt("Digite a quantidade de maçãs compradas: "))
// let precoMaca = 0.30
// let promoMaca = 0.25

// if(maca < 12){
//     console.log(`Você comprou ${maca} maçãs, cada uma custa R$ ${precoMaca}, total a pagar R$ ${maca*precoMaca}`)
// } else if(maca >=12){
//     console.log(`Você comprou ${maca} maçãs, na promoção cada uma custa R$ ${promoMaca}, total a pagar R$ ${maca*promoMaca}`)
// }

/*8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.*/



/*9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
utilizando um loop for.*/



/*10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.*/