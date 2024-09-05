// let thingsList = Array()
// //1. Soma dos Elementos de um Array

// function arrSum(arr){
//     let sum = 0

//     for(let i= 0; i< arr.length; i++){
//         sum += arr[i]
//     }

//     return sum
// }

// let arrSum = function(arr){

//     let sum = 0

//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i]
//     }

//     return sum
// }

// console.log(arrSum([10, 20, 40, 30]))


// //2. Encontre o maior numero em um array

// let arr = [10, 20, 30, 40]
// console.log(arr.length)
// function findMax(arr){
//     for(let i = 0; i < arr.length; i++){

//         if(arr[i] <
//              max){
        
//             max += arr[i]
        
//         }
//     }

//     return max

// }

// console.log(findMax(arr))









// let nome = "Equipe Olimpica"

// console.log("Alvaro".length)
// console.log("Alvaro".charAt(0))
// console.log(nome.indexOf('q'))

// //console.log(nome.replace('Alvaro', 'Yago'))

// console.log(nome.substr(7, 8))

// console.log((nome.toUpperCase()))
// console.log((nome.toLocaleLowerCase()))

// console.log('-' + nome.trim() + '-')

//metricas

// console.log(Math.ceil(100.73))//arredonda pra cima
// console.log(Math.floor(100.73))//arredonda pra baixo
// console.log(Math.round(100.73))//arredonda inteligente
// console.log(Math.sqrt(100))//raiz
// console.log(Math.pow(100))//potencia
// console.log(Math.cbrt(100))//cubica
// console.log(Math.abs(100))//absoluta
// console.log(Math.random())//numero aleatorio

//datas

// let date = new Date()//inicializamos sempre 

// console.log(date.getDate())

// console.log(date.getMonth()  +1)
// console.log(date.getFullYear())

// console.log(date.toDateString())

// date.setDate(date.getDate() +720)
// console.log(date.toString())

// date.setFullYear(date.getFullYear() +720)
// console.log(date.toString())

// let date1 = new Date(2024, 7, 6)
// let date2 = new Date(2023, 7, 6)

// console.log(date1.toString())

// console.log(date1.getTime())
// console.log(date2.getTime())

// let milisecondes_between_dates = Math.abs(date1.getTime() - date2.getTime)
// console.log(milisecondes_between_dates)

// let milisecondes_per_day = (1 * 24 * 60 * 60 * 1000)
// console.log(`um dia tem ${milisecondes_per_day} milisegundos`)

// console.log(`a diferença entre as datas é ${Math.ceil(milisecondes_between_dates/milisecondes_per_day)} dias`)

//inverter uma string
let str1 = "Minha Frase"

function invertStrin(str){
    
    let arrString = str.split('')
    let arrRev = arrString.reverse()
    let strInvert = arrRev.join('')
    
    return strInvert
    
}

let result = invertStrin(str1)
console.log(result)

//contar vogais
let nom1 = 'Alvaro Pedrosa'

function contChar(ctg){
    
}

//gerar numero aleatório
//dias entre duas semanas
//formatar data