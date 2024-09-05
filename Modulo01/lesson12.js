let serie = {
    nome: "The boys",
    genero: ["Ação", "Parodia", "Heróis"],
    nrTemporadas: 4,
    status: "Em andamento",
    classificação: 18,
    nrEpisodios:{
        temp1: 10,
        temp2: 20,
        temp3: 30,
    },
    
    mostrarCaracteristicas: function(){
        return ("o nome da serie é " + this.nome + "e sua classificaçao é +" + this.classificação)
    }
}
//transformar em for in
//console.log(serie.mostrarCaracteristicas())



let livros = {
    titulo: "harry potter",
    genero: ["Ficção cientifica", "Ação", "Aventura"],
    autor: "J. K. Rowling",
    nrLivros: 6,
    status: "Finalizado",

    mostrarCaracteristicas: function(){
        return ("o nome do livro é " + this.titulo + "e foi escrito por " + this.autor)
    }
}
for(let livros of Object.keys(titulo)){
     console.log(titulo[livros])
}

// let carro = {
//     nome: "Fusca",
//     marca: "Volkswagen",
//     cor: "Branco",
//     ano: 1980,
//     acelerar: function(){
//         return "parado pela bobina"
//     }
// }

// //console.log(carro)
// //console.log(carro.acelerar)


// let motor = "1000"
// let nome = "bmw s1000rr"
// let tipo = "esportiva"

// let moto = {
//     nome: nome,
//     tipo: tipo,
//     motor: motor
// }

// //console.log(moto)

// let atleta = {
//     nome: "Rayssa Leal",
//     esporte: "Sk8",
//     idade: 16
// }

// atleta.nacionalidade = "Brasil"
// atleta.medalhas = {
//     ouro: 10,
//     prata: 1,
//     bronze: 1
// }

// atleta.celebrarVitoria = function() { return("GANHEI !")}

// //console.log(atleta)
// //console.log(atleta.celebrarVitoria())

// let obj1 = {
//     nome: "Bruce",
//     profissao: "Batman"
// }

// let obj2 = obj1

// obj2.companheiro = "Robin"

// //console.log(obj1)
// //console.log(obj2)

// function computador(pocessador, gpu, ram, armazenamento){
//     this.pocessador = pocessador
//     this.gpu = gpu
//     this.ram = ram
//     this.armazenamento =armazenamento

//     this.ligar = function(){
//         //console.log(`O ${this.pocessador} está funcionando !`)
//     }

//     this.mostrarEspecificacoes = function() {
//         return `
//             processador: ${this.pocessador}
//             gpu: ${this.gpu}
//             ram: ${this.ram}
//             armazenamento: ${this.armazenamento}`
//     }
// }

// let pc = new computador("i9", "rtx4090", "16gb", "500GB SSD")
// //console.log(pc.mostrarEspecificacoes())

// function jogos(titulo, genero, anoLancamento, empresa, jogar){
//     return{
//         titulo,
//         genero,
//         anoLancamento,
//         empresa,
//         jogar
//     }
// }

// let jogo1 = jogos( "final fantasy", "rpg", "1997", "square soft", () => {return 'Jogando'})

// //console.log(jogo1.jogar())



// for(let key in jogo1){
//     //console.log(`${key}: ${jogo1[key]}`)
// }

// const jogadores = ['pele', 'cr7', 'messi']

// for(let key in jogadores){
//     //console.log(jogadores[key])
// }

// const NOME = "silva"

// for(let char of NOME){
//     //console.log(char)
// }

// for(let jogo of Object.keys(jogo1)){
//     //console.log(jogo1[jogo])
// }

// jogadores.forEach((indice, valor) =>
//     console.log(`O indice é: ${indice} e o valor é ${valor}`)

// )