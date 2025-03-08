document.addEventListener('DOMContentLoaded', function() {
    const inputTarefa = document.getElementById('novaTarefa');
    const btnAdicionar = document.getElementById('adicionarTarefa');
    const listaTarefas = document.getElementById('listaTarefas');

    let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

    function atualizarLocalStorage() {
        localStorage.setItem('tarefas', JSON.stringify(tarefas));
    }

    function renderizarTarefas() {
        listaTarefas.innerHTML = '';
        tarefas.forEach((tarefa, index) => {
            const li = document.createElement('li');
            li.className = 'flex items-center justify-between p-3 border rounded';
            li.innerHTML = `
                <span class="${tarefa.concluida ? 'line-through' : ''}">${tarefa.texto}</span>
                <div>
                    <button data-index="${index}" class="editar bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-1">Editar</button>
                    <button data-index="${index}" class="excluir bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Excluir</button>
                    <button data-index="${index}" class="concluir bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">Concluir</button>
                </div>
            `;
            listaTarefas.appendChild(li);
        });
    }

    renderizarTarefas();

    btnAdicionar.addEventListener('click', function() {
        const textoTarefa = inputTarefa.value.trim();
        if (textoTarefa) {
            tarefas.push({ texto: textoTarefa, concluida: false });
            atualizarLocalStorage();
            renderizarTarefas();
            inputTarefa.value = '';
        }
    });

    listaTarefas.addEventListener('click', function(event) {
        if (event.target.classList.contains('excluir')) {
            tarefas.splice(event.target.dataset.index, 1);
            atualizarLocalStorage();
            renderizarTarefas();
        } else if (event.target.classList.contains('editar')) {
            const index = event.target.dataset.index;
            const novoTexto = prompt('Editar tarefa:', tarefas[index].texto);
            if (novoTexto) {
                tarefas[index].texto = novoTexto;
                atualizarLocalStorage();
                renderizarTarefas();
            }
        } else if (event.target.classList.contains('concluir')) {
            const index = event.target.dataset.index;
            tarefas[index].concluida = !tarefas[index].concluida;
            atualizarLocalStorage();
            renderizarTarefas();
        }
    });
});