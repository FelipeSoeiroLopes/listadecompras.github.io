# Lista De Compras - Versão 6

Uma lista de compras interativa e responsiva, desenvolvida com **HTML**, **CSS** e **JavaScript**. Permite adicionar, remover e salvar itens localmente, utilizando o `localStorage` do navegador. Ideal para organizar suas compras de forma simples e eficiente.

## Funcionalidades

- **Adicionar itens**: Adicione novos itens à lista com um simples clique.
- **Remover itens**: Remova itens indesejados com um botão de exclusão.
- **Ícone de Checkmark (✔️)**: Quando um item é marcado como "já peguei", um ícone de checkmark (✔️) aparece ao lado do nome do item, fornecendo um feedback visual claro de que o item foi coletado.
- **Melhorias Visuais**: O botão "Já Peguei" muda de laranja (não pego) para verde (já peguei). Itens marcados como "já peguei" têm o texto riscado e opacidade reduzida.
- **Salvamento automático**: Os itens são salvos automaticamente no `localStorage`, permanecendo disponíveis mesmo após fechar o navegador.
- **Design responsivo**: A responsividade do site foi aprimorada, garantindo uma melhor experiência em dispositivos móveis e desktops.

## Novidades na Versão 6

- **Centralização e Uniformização dos Botões em Dispositivos Móveis**:
  - Centralização dos botões: Em dispositivos menores (telas com até 600px de largura), os botões foram centralizados para melhorar a usabilidade e a aparência.
  - Tamanho igual para todos os botões: Todos os botões agora têm o mesmo tamanho em dispositivos móveis, garantindo consistência visual.
  - Melhoria no layout: Os itens da lista foram reorganizados em colunas para dispositivos móveis, com os botões ocupando a largura total e alinhados ao centro.

- **Melhorias no Código CSS**:
  - Ajustes na responsividade:
    - Os botões agora têm um `max-width: 200px` e ocupam 100% da largura disponível em dispositivos móveis.
    - O texto dentro dos botões foi centralizado com `text-align: center`.
    - O padding dos botões foi aumentado para 10px, melhorando a aparência e a usabilidade em telas menores.
  - Centralização dos itens:
    - Os itens da lista (`li`) e os elementos internos (como `.item-info`) foram centralizados com `align-items: center`.

## Como Usar

1. **Adicionar um item**:
   - Clique no botão **"Adicionar Item"**.
   - Digite o nome do item no prompt que aparecer.
   - O item será adicionado à lista.

2. **Marcar um item como "já peguei"**:
   - Clique no botão **"Já Peguei"** ao lado do item. O botão mudará de cor para verde e um ícone de checkmark (✔️) aparecerá ao lado do nome do item.

3. **Remover um item**:
   - Clique no botão **"Remover"** ao lado do item que deseja excluir.

4. **Salvamento automático**:
   - Os itens são salvos automaticamente no `localStorage`. Mesmo que você feche o navegador, eles permanecerão na lista.

## Tecnologias Utilizadas

- **HTML**: Estrutura da página.
- **CSS**: Estilização e design responsivo.
- **JavaScript**: Lógica de interação e manipulação do `localStorage`.

## Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio