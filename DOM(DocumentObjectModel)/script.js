let titulo = document.getElementById('titulo')

titulo.textContent = "Aula de JS básico"

titulo.innerHTML = "Mudei o conteudo do titulo novamente"

titulo.style.color = "blue"

let botao = document.getElementById('botao')

botao.addEventListener('click', () => {
    alert('Você clicou no botão')
})

let novoParagrafo = document.createElement('p')

novoParagrafo.innerHTML = "Este é um paragrado criado por JS"

document.body.appendChild(novoParagrafo)

let paragrafo = document.querySelector('.paragrafo')

paragrafo.remove()