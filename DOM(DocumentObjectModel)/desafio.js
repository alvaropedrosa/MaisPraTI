let titulo = document.getElementById('titulo')



let add = document.getElementById('add')
let del = document.getElementById('del')

let lista = document.getElementById('lista')

function addItens(){
    let novoItem = document.createElement('li')
    lista.appendChild(novoItem)
    titulo.innerHTML = 'Novo item adicionado!'
    titulo.style.color = 'green'
}

function delItem () {
    if(lista.children.length > 0){
        lista.removeChild(lista.lastElementChild)
        titulo.innerHTML = 'Item removido'
        titulo.style.color = "red"
    } else if(lista.children){
        titulo.innerHTML = 'Nao a mais itens para remover'
        titulo.style.color = 'gray'
    }
}

btAddItem.addEventListener('click', addItens)
btDelItem.addEventListener('click', delItens)