# Lista De Compras - Versão 8

Uma lista de compras interativa e responsiva, desenvolvida com **HTML**, **CSS** e **JavaScript**. Permite adicionar, remover (com confirmação) e salvar itens localmente, utilizando o `localStorage` do navegador. Ideal para organizar suas compras de forma simples e eficiente.

## Acesso Online

Você pode acessar e usar a versão online da lista de compras diretamente no seu navegador:

**https://felipesoeirolopes.github.io/lista-de-compras/**

## Funcionalidades

- **Adicionar itens**: Adicione novos itens à lista com um simples clique.
- **Remover itens com Confirmação**: Remova itens indesejados com um botão de exclusão. Uma caixa de diálogo pedirá confirmação para evitar exclusões acidentais.
- **Indicador Visual de Status**: Cada item da lista possui uma borda colorida à esquerda (vermelha para "não pego", verde para "pego") para rápida identificação do status.
- **Ícone de Checkmark (✔️)**: Quando um item é marcado como "pego", um ícone de checkmark (✔️) aparece ao lado do nome do item.
- **Melhorias Visuais**: O botão de status muda de cor e texto ("Não Pego" / "Pego"). Itens marcados como "pego" têm o texto riscado, opacidade reduzida e a borda do item fica verde.
- **Salvamento automático**: Os itens são salvos automaticamente no `localStorage`, permanecendo disponíveis mesmo após fechar o navegador.
- **Design responsivo**: A responsividade do site foi aprimorada, garantindo uma boa experiência em dispositivos móveis e desktops.

## Novidades na Versão 8

- **Confirmação ao Remover**: Implementada uma caixa de diálogo (`window.confirm`) que solicita a confirmação do usuário antes de remover um item da lista, prevenindo exclusões acidentais.
- **Indicador de Status no Item**: Adicionada uma borda colorida (`border-left`) diretamente no elemento do item (`<li>`). A borda é vermelha por padrão (indicando "não pego") e muda para verde quando o item é marcado como "pego", oferecendo um feedback visual imediato sobre o estado de cada item.
- **Melhorias no Código JavaScript**:
    - Refatoração para usar seletores de classe mais específicos ao salvar e carregar dados.
    - Adição de tratamento de erro básico ao carregar dados do `localStorage`.
    - Validação para evitar adição de itens com nome vazio.
    - Atualização do texto do botão de status ("Pego" / "Não Pego").
    - (Opcional/Comentado no código) Demonstração de como usar delegação de eventos para maior eficiência.

## Novidades na Versão 6 (Histórico)

- **Centralização e Uniformização dos Botões em Dispositivos Móveis**:
  - Centralização dos botões: Em dispositivos menores (telas com até 600px de largura), os botões foram centralizados.
  - Tamanho igual para todos os botões: Todos os botões passaram a ter o mesmo tamanho em dispositivos móveis.
  - Melhoria no layout: Os itens da lista foram reorganizados em colunas para dispositivos móveis, com os botões ocupando a largura total e alinhados ao centro.
- **Melhorias no Código CSS**:
  - Ajustes na responsividade (`max-width`, `width`, `text-align`, `padding` dos botões).
  - Centralização dos itens (`align-items: center` para `li` e `.item-info`).

## Como Usar

1.  **Acesse a página**: Abra o link https://felipesoeirolopes.github.io/listadecompras.github.io/ no seu navegador.
2.  **Adicionar um item**:
    *   Clique no botão **"Adicionar Item"**.
    *   Digite o nome do item no prompt que aparecer e clique em "OK".
    *   O item será adicionado à lista com uma borda vermelha à esquerda.
3.  **Marcar um item como "pego"**:
    *   Clique no botão **"Não Pego"** (ou **"Pego"** para desmarcar) ao lado do item.
    *   O botão mudará de cor e texto, a borda do item ficará verde, o texto será riscado e um ícone de checkmark (✔️) aparecerá.
4.  **Remover um item**:
    *   Clique no botão **"Remover"** ao lado do item que deseja excluir.
    *   Uma caixa de diálogo perguntará "Tem certeza que deseja remover este item?".
    *   Clique em **"OK"** para confirmar a remoção ou em "Cancelar".
5.  **Salvamento automático**:
    *   Os itens são salvos automaticamente no `localStorage` do seu navegador. Mesmo que você feche a aba ou o navegador, eles permanecerão na lista quando você reabrir a página no mesmo navegador.

## Tecnologias Utilizadas

- **HTML**: Estrutura da página.
- **CSS**: Estilização, design responsivo e indicadores visuais.
- **JavaScript**: Lógica de interação, manipulação do DOM, confirmações e manipulação do `localStorage`.

## Como Executar o Projeto Localmente (Opcional)

Se você quiser rodar o projeto no seu próprio computador:

1.  Clone o repositório (substitua com seu usuário e nome de repositório, se for um fork):
    ```bash
    git clone https://github.com/felipesoeirolopes/listadecompras.github.io.git
    cd listadecompras.github.io
    ```
2.  Abra o arquivo `index.html` diretamente no seu navegador.

 
 