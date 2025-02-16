// Função para salvar a lista no localStorage
function salvarLista() {
    const itens = [];
    document.querySelectorAll('#listaCompras li').forEach(li => {
        const nome = li.querySelector('span').textContent;
        const quantidade = li.querySelector('input').value;
        const pego = li.classList.contains('pego'); // Verifica se o item foi pego
        itens.push({ nome, quantidade, pego });
    });
    localStorage.setItem('listaCompras', JSON.stringify(itens));
}

// Função para carregar a lista do localStorage
function carregarLista() {
    const listaSalva = localStorage.getItem('listaCompras');
    if (listaSalva) {
        const itens = JSON.parse(listaSalva);
        itens.forEach(item => {
            adicionarItemNaLista(item.nome, item.quantidade, item.pego);
        });
    }
}

// Função para adicionar um item na lista
function adicionarItemNaLista(nome, quantidade = 1, pego = false) {
    const lista = document.getElementById('listaCompras');
    const novoItem = document.createElement('li');
    if (pego) {
        novoItem.classList.add('pego'); // Marca o item como "já peguei"
    }
    novoItem.innerHTML = `
        <div class="item-info">
            <span>${nome}</span>
            <input type="number" value="${quantidade}" min="1">
            <span class="checkmark">✔️</span> <!-- Ícone de checkmark -->
        </div>
        <button class="${pego ? 'pego' : 'nao-pego'}" onclick="marcarComoPego(this)">Já Peguei</button>
        <button onclick="removerItem(this)">Remover</button>
    `;
    lista.appendChild(novoItem);
    salvarLista(); // Salva a lista após adicionar um item
}

// Função para marcar o item como "já peguei"
function marcarComoPego(button) {
    const item = button.parentElement;
    item.classList.toggle('pego'); // Alterna a classe "pego"
    button.classList.toggle('pego'); // Alterna a classe do botão
    button.classList.toggle('nao-pego'); // Alterna a classe do botão
    const checkmark = item.querySelector('.checkmark');
    checkmark.style.display = item.classList.contains('pego') ? 'inline' : 'none'; // Mostra ou oculta o ícone
    salvarLista(); // Salva a lista após marcar o item
}

// Função para remover um item da lista
function removerItem(button) {
    const item = button.parentElement;
    item.remove();
    salvarLista(); // Salva a lista após remover o item
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