// Função para salvar a lista no localStorage
function salvarLista() {
    const itens = [];
    // Seleciona todos os 'li' dentro de '#listaCompras'
    document.querySelectorAll('#listaCompras li').forEach(li => {
        // Seleciona o span que contém o nome (idealmente com uma classe como .item-name)
        const nomeElement = li.querySelector('.item-info span:not(.checkmark)');
        // Seleciona o input de quantidade (idealmente com uma classe como .item-quantity)
        const quantidadeElement = li.querySelector('.item-info input.item-quantity');
        // Seleciona o input de preço (idealmente com uma classe como .item-price)
        const precoElement = li.querySelector('.item-info input.item-price');

        // Verifica se os elementos foram encontrados antes de acessar suas propriedades
        if (nomeElement && quantidadeElement && precoElement) {
            const nome = nomeElement.textContent;
            const quantidade = quantidadeElement.value;
            const preco = precoElement.value;
            const pego = li.classList.contains('pego'); // Verifica se o item foi pego
            itens.push({ nome, quantidade, preco, pego });
        } else {
            console.warn("Item da lista com estrutura inesperada foi ignorado ao salvar:", li);
        }
    });
    localStorage.setItem('listaCompras', JSON.stringify(itens));
}

// Função para carregar a lista do localStorage
function carregarLista() {
    const listaSalva = localStorage.getItem('listaCompras');
    if (listaSalva) {
        try {
            const itens = JSON.parse(listaSalva);
            // Limpa a lista atual antes de carregar (evita duplicatas se chamada novamente)
            document.getElementById('listaCompras').innerHTML = '';
            itens.forEach(item => {
                // Garante que nome, quantidade e preço existam
                if (item.nome !== undefined && item.quantidade !== undefined && item.preco !== undefined) {
                    adicionarItemNaLista(item.nome, item.quantidade, item.pego, item.preco);
                } else {
                    console.warn("Item inválido encontrado no localStorage:", item);
                }
            });
        } catch (e) {
            console.error("Erro ao parsear lista do localStorage:", e);
        }
    }
}

// Função para adicionar um item na lista (DOM)
function adicionarItemNaDOM(nome, quantidade, pego, preco = '') {
    const lista = document.getElementById('listaCompras');
    const novoItem = document.createElement('li');
    if (pego) {
        novoItem.classList.add('pego');
    }

    // Adiciona classes aos elementos para seleção mais robusta
    novoItem.innerHTML = `
        <div class="item-info">
            <span class="item-name">${nome}</span>
            <input class="item-quantity" type="number" value="${quantidade}" min="1">
            <input class="item-price" type="number" placeholder="Preço" value="${preco}" min="0" step="0.01">
            <span class="checkmark">✔️</span>
        </div>
        <div class="item-actions">
             <button class="status-toggle ${pego ? 'pego' : 'nao-pego'}">
                ${pego ? 'Pego' : 'Não Pego'}
             </button>
             <button class="remover-item">Remover</button>
        </div>
    `;

    // Adiciona event listeners aos elementos criados
    const inputQuantidade = novoItem.querySelector('.item-quantity');
    inputQuantidade.addEventListener('change', salvarLista); // Salva ao mudar quantidade
    inputQuantidade.addEventListener('input', salvarLista); // Salva enquanto digita (opcional)

    const inputPreco = novoItem.querySelector('.item-price');
    inputPreco.addEventListener('change', salvarLista); // Salva ao mudar preço
    inputPreco.addEventListener('input', salvarLista); // Salva enquanto digita (opcional)

    const btnStatus = novoItem.querySelector('.status-toggle');
    btnStatus.addEventListener('click', marcarComoPego);

    const btnRemover = novoItem.querySelector('.remover-item');
    btnRemover.addEventListener('click', removerItem);

    // Esconde o checkmark inicialmente se não estiver pego
    const checkmark = novoItem.querySelector('.checkmark');
    checkmark.style.display = pego ? 'inline' : 'none';

    lista.appendChild(novoItem);
}

// Função principal para adicionar um item (chama a função DOM e salva)
function adicionarItemNaLista(nome, quantidade = 1, pego = false, preco = '') {
    adicionarItemNaDOM(nome, quantidade, pego, preco);
    salvarLista(); // Salva a lista após adicionar um item
}

// Função para marcar o item como "já peguei" (agora usa event listener)
function marcarComoPego(event) {
    const button = event.target; // O botão que foi clicado
    const item = button.closest('li'); // Encontra o <li> pai
    if (!item) return; // Sai se não encontrar o item

    item.classList.toggle('pego');
    const isPego = item.classList.contains('pego');

    // Atualiza o botão
    button.classList.toggle('pego', isPego);
    button.classList.toggle('nao-pego', !isPego);
    button.textContent = isPego ? 'Pego' : 'Não Pego'; // Atualiza o texto do botão

    // Atualiza o checkmark
    const checkmark = item.querySelector('.checkmark');
    if (checkmark) {
        checkmark.style.display = isPego ? 'inline' : 'none';
    }

    salvarLista(); // Salva a lista após marcar o item
}

// Função para remover um item da lista (agora usa event listener e confirmação)
function removerItem(event) {
    const button = event.target; // O botão que foi clicado
    const item = button.closest('li'); // Encontra o <li> pai
    if (!item) return; // Sai se não encontrar o item

    const confirmou = window.confirm("Tem certeza que deseja remover este item?");
    if (confirmou) {
        item.remove(); // Remove o item do HTML
        salvarLista(); // Salva a lista após remover o item
        console.log("Item removido!");
    } else {
        console.log("Remoção cancelada.");
    }
}

// Função para calcular o valor total da compra
function calcularTotal() {
    let total = 0;
    document.querySelectorAll('#listaCompras li').forEach(li => {
        const quantidade = li.querySelector('.item-quantity').value;
        const preco = li.querySelector('.item-price').value;

        if (quantidade && preco) {
            total += quantidade * preco;
        }
    });

    const valorTotalElement = document.getElementById('valorTotal');
    valorTotalElement.textContent = `Valor Total: R$ ${total.toFixed(2)}`;
}

// Evento para adicionar um novo item (botão principal)
document.getElementById('adicionarItem').addEventListener('click', function() {
    const nomeItem = prompt("Digite o nome do item:");
    if (nomeItem && nomeItem.trim() !== "") {
        adicionarItemNaLista(nomeItem.trim().toUpperCase());
    } else if (nomeItem !== null) {
        alert("Por favor, digite um nome para o item.");
    }
});

// Evento para calcular o total
document.getElementById('calcularTotal').addEventListener('click', calcularTotal);

// Carrega a lista ao iniciar
carregarLista();

