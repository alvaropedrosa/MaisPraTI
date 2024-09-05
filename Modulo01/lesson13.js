





// let professor = {
//     name: "Tony Stark",
//     subject: "Physics",
//     grades: {
//         student1: [10.0, 8.0], 
//         student2: 8.0,
//         student3: 7.0
//     }
// }

// let sumGrades = 0
// let numberOfStudents = 0

// for(let student in professor.grades){
//     sumGrades += professor.grades[student]
//     numberOfStudents++
// }

// let average = sumGrades / numberOfStudents

/*console.log(`A nota média da turma é: ${average.toFixed(2)}`)
console.log(average >= 6 
    ? `${professor.name} está acima da média.`
    : `${professor.name} está acima da média.`
)

/*
objetivo: verificar e listar livros publicados antes de 2k.
use um loop for...of para interar sobre o array biblioteca.
imprima o titulo e o ano dos livros que atendem essa condiçao.
*/

// let liraria = [
//     { titulo: "o hobbit", autor: "J. R. R. Tolkien", ano: 1925 },
//     { titulo: "harry potter: prisioneiro de azkaban", autor: "J. K. Rolling", ano: 1999 },
//     { titulo: "narnia", autor: "C. S. Lewis", ano: 2010 }

// ]

// for(let livro of liraria){
//     if(livro.ano < 200){
//         console.log(`o livro ${livro.titulo}, escrito por ${livro.autor}, foi publicado em ${livro.ano}.`)
//     }
// }

/*
    Objetivo: Contar a quantidade de filmes por gênero.
    Use o método forEach para iterar sobre o array filmes.
    Para cada filme, verifique se o gênero já existe no objeto de contagem. 
    Se existir, incremente a contagem; se não, adicione o gênero ao objeto com a contagem inicial de 1.
*/

const filme = [
    {nome: "gasparzinho", genero: "ficção cientifica", duracao: "'120 min"},
    {nome: "os incriveis", genero: "animação", duracao: "'120 min"},
    {nome: "carros", genero: "animação", duracao: "'130 min"},
    {nome: "guerra mundial z", genero: "ficção cientifica", duracao: "'90 min"},
    {nome: "vingadores", genero: "Ação", duracao: "'140 min"}
]

let genCount = {}

filme.forEach(filmes => {
    if(genCount[filmes.genero]){
        genCount[filmes.genero]++
    } else {
        genCount[filmes.genero] = 1
    }
})

for(let genero in genCount){
    console.log(`existem ${genCount[genero]} filmes do genero ${genero}`)
}