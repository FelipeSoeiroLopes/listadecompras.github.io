## Lista De Compras - Versão 5

Uma lista de compras interativa e responsiva, desenvolvida com **HTML**, **CSS** e **JavaScript**. Permite adicionar, remover e salvar itens localmente, utilizando o `localStorage` do navegador. Ideal para organizar suas compras de forma simples e eficiente.

### Funcionalidades

- **Adicionar itens**: Adicione novos itens à lista com um simples clique.
- **Remover itens**: Remova itens indesejados com um botão de exclusão.
- **Ícone de Checkmark (✔️)**: Quando um item é marcado como "já peguei", um ícone de checkmark (✔️) aparece ao lado do nome do item, fornecendo um feedback visual claro de que o item foi coletado.
- **Melhorias Visuais**: O botão "Já Peguei" muda de laranja (não pego) para verde (já peguei). Itens marcados como "já peguei" têm o texto riscado e opacidade reduzida.
- **Salvamento automático**: Os itens são salvos automaticamente no `localStorage`, permanecendo disponíveis mesmo após fechar o navegador.
- **Design responsivo**: A responsividade do site foi aprimorada, garantindo uma melhor experiência em dispositivos móveis e desktops.

### Como Usar

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

### Tecnologias Utilizadas

- **HTML**: Estrutura da página.
- **CSS**: Estilização e design responsivo.
- **JavaScript**: Lógica de interação e manipulação do `localStorage`.

### Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio