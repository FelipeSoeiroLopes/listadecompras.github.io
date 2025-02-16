// Função para salvar a lista no localStorage
function salvarLista() {
    const itens = [];
    document.querySelectorAll('#listaCompras li').forEach(li => {
        const nome = li.querySelector('span').textContent;
        const quantidade = li.querySelector('input').value;
        itens.push({ nome, quantidade });
    });
    localStorage.setItem('listaCompras', JSON.stringify(itens));
}

// Função para carregar a lista do localStorage
function carregarLista() {
    const listaSalva = localStorage.getItem('listaCompras');
    if (listaSalva) {
        const itens = JSON.parse(listaSalva);
        itens.forEach(item => {
            adicionarItemNaLista(item.nome, item.quantidade);
        });
    }
}

// Função para adicionar um item na lista
function adicionarItemNaLista(nome, quantidade = 1) {
    const lista = document.getElementById('listaCompras');
    const novoItem = document.createElement('li');
    novoItem.innerHTML = `
        <div class="item-info">
            <span>${nome}</span>
            <input type="number" value="${quantidade}" min="1">
        </div>
        <button onclick="removerItem(this)">Remover</button>
    `;
    lista.appendChild(novoItem);
    salvarLista(); // Salva a lista após adicionar um item
}

// Função para remover um item da lista
function removerItem(button) {
    const item = button.parentElement;
    item.remove();
    salvarLista(); // Salva a lista após remover um item
}

// Evento para adicionar um novo item
document.getElementById('adicionarItem').addEventListener('click', function() {
    const nomeItem = prompt("Digite o nome do item:");
    if (nomeItem) {
        adicionarItemNaLista(nomeItem);
    }
});

// Carrega a lista salva ao abrir a página
carregarLista();