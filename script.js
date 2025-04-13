// Função para salvar a lista no localStorage
function salvarLista() {
    const itens = [];
    // Seleciona todos os 'li' dentro de '#listaCompras'
    document.querySelectorAll('#listaCompras li').forEach(li => {
        // Seleciona o span que contém o nome (idealmente com uma classe como .item-name)
        const nomeElement = li.querySelector('.item-info span:not(.checkmark)');
        // Seleciona o input de quantidade (idealmente com uma classe como .item-quantity)
        const quantidadeElement = li.querySelector('.item-info input[type="number"]');

        // Verifica se os elementos foram encontrados antes de acessar suas propriedades
        if (nomeElement && quantidadeElement) {
            const nome = nomeElement.textContent;
            const quantidade = quantidadeElement.value;
            const pego = li.classList.contains('pego'); // Verifica se o item foi pego
            itens.push({ nome, quantidade, pego });
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
                // Garante que nome e quantidade existam
                if (item.nome !== undefined && item.quantidade !== undefined) {
                    adicionarItemNaLista(item.nome, item.quantidade, item.pego);
                } else {
                    console.warn("Item inválido encontrado no localStorage:", item);
                }
            });
        } catch (e) {
            console.error("Erro ao parsear lista do localStorage:", e);
            // Opcional: Limpar localStorage se estiver corrompido
            // localStorage.removeItem('listaCompras');
        }
    }
}

// Função para adicionar um item na lista (DOM)
function adicionarItemNaDOM(nome, quantidade, pego) {
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
function adicionarItemNaLista(nome, quantidade = 1, pego = false) {
    adicionarItemNaDOM(nome, quantidade, pego);
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

    // --- ALTERAÇÃO AQUI ---
    // Mostra a caixa de diálogo de confirmação
    const confirmou = window.confirm("Tem certeza que deseja remover este item?");
    // ----------------------

    // Se o usuário clicou em "OK" (confirmou), então remove o item
    if (confirmou) {
        item.remove(); // Remove o item do HTML
        salvarLista(); // Salva a lista após remover o item
        console.log("Item removido!");
    } else {
        // Se o usuário clicou em "Cancelar", não faz nada
        console.log("Remoção cancelada.");
    }
}

// Evento para adicionar um novo item (botão principal)
document.getElementById('adicionarItem').addEventListener('click', function() {
    const nomeItem = prompt("Digite o nome do item:");
    // Verifica se o usuário digitou algo e não cancelou
    if (nomeItem && nomeItem.trim() !== "") {
        adicionarItemNaLista(nomeItem.trim()); // Usa trim() para remover espaços extras
    } else if (nomeItem !== null) { // Se não for nulo (cancelar), mas estiver vazio
        alert("Por favor, digite um nome para o item.");
    }
});
carregarLista();
 