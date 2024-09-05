// //1. Sum of Elements of an Array

// let sum = 0

// let arr = [10, 20, 30, 40]

// for(let i = 0; i < arr.length; i++){
//     sum = arr[i]
// }

// console.log(sum)

// //2. Encontre o Maior Número em um array

// let max = arr[0]

// for(let j = 0; j < arr.length; j++){
//     if (arr[j] > max) {
//         max = arr[j]
//     }
// }

// //3. Reverter um Array

// let reversed = []

// for(let k = arr.length -1; k>=0; k--){
//     reversed.push(arr[k])
// }
// console.log(reversed)

// //4. Criem um novo array contendo apenas os numeros pares

// let pares = []

// for(let l = 0; l < arr.length; l++){
//     if(arr[l] % 2 === 0){
//         pares.push(arr[l])
//     }
// }

// console.log(pares)

// //5. Contar Ocorrências de um valor
// const prompt = require('prompt-sync')()
// let vet = [10,10,7,5,10]
// let value = Number(prompt('Insira o valor a ser verificado: '))
// let count = 0

// for (let m = 0; m < array.length; m++) {
//     if (vet[m] === value) {
//         count++
//     }
// }

// console.log(`O valor ${value} ocorre ${count} vezes no vetor.`)


// arrays/vetores multidimensionais

// let matriz = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// // console.log(matriz)

// // console.log(matriz[1][1])

// for(let i = 0; i < matriz.length; i++){
//     for(let j = 0; j < matriz[i].length; j++){
//     matriz.push[j]
//     }

// console.log(`Elemento na linha ${i} e coluna ${j} é ${matriz[i][j]}`)
// }

let m1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
let m2 = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
]

let resultado = []

if(m1.length !== m2.length || m1[0].length !== m2[0].length){
    throw new Error("Os arrays devem ter o mesmo tamanho.")
}


for(let i = 0; i < m1.length; i++){
    let somaLinha = []
    for(let j = 0; j < m2[i].length; j++){
        somaLinha.push(m1[i][j]+m2[i][j])
    }

    resultado.push(somaLinha)
}

console.table(resultado)

//somar diagonal da matriz

let ma1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
let ma2 = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
]

let result = []

if(m1.length !== ma2.length || ma1[0].length !== ma2[0].length){
    throw new Error("Os arrays devem ter o mesmo tamanho.")
}

for(let i = 0; i < ma1.length; i++){
    let somaDiagonal = []
    for(let j = 0; j < ma2[i].length; j++){
        somaDiagonal.push(ma1[i][j]+ma2[i][j])
        
    }
    result.push(somaDiagonal)
    
}

console.table(result)