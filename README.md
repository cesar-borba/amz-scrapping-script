# Scrapping Livros Amazon

Este script JavaScript permite capturar, exibir e analisar os dados dos livros mais vendidos diretamente da página de **bestsellers da Amazon Brasil**. Ele deve ser executado no **console do navegador**, dentro da página:

🔗 [Mais Vendidos: Livros - os mais vendidos na Amazon.com.br](https://www.amazon.com.br/gp/bestsellers/books/ref=zg_bs_nav_books_0)

## ✨ Funções

- **capturaLivros()**: Coleta os títulos, autores e preços dos livros da página atual e armazena em uma lista (`listaDeProdutos`).

- **listaLivros()**: Lista todos os livros capturados, mostrando rank, título, autor e preço formatado em BRL (`R$`).

- **limpaLista()**: Limpa a lista de livros carregada anteriormente.

- **buscaMenorPreco()**: Exibe o livro com o menor preço da lista.

- **buscaMaiorPreco()**: Exibe o livro com o maior preço da lista.

- **buscaPrecoMedio()**: Calcula e exibe o preço médio de todos os livros capturados.

- **ehListaVazia()**: Verifica se a lista de produtos está vazia antes de executar ações que dependem dela.

- **help()**: Disponibiliza uma listagem das funções disponíveis.

## 🚀 Como usar

1. Abra uma **aba anônima** em seu browser, você pode utilizar o atalho: **Ctrl + Shift + N** (isso fará com que a amazon não crie novas seções baseadas na sua navegação anterior).

2. Acesse o link: https://www.amazon.com.br/gp/bestsellers/books/ref=zg_bs_nav_books_0

3. Abra o **Console do Navegador** (F12 ou Ctrl+Shift+I).

4. Cole o script completo e pressione **Enter**.

5. Execute as funções desejadas, por exemplo:
   ```js
   capturaLivros()
   listaLivros()
   buscaMenorPreco()
   ```

## ⚠️ Observações

- As classes usadas para selecionar elementos (`_cDEzb_p13n-sc-css-line-clamp-` e `p13n-sc-price`) podem mudar com o tempo, pois são geradas dinamicamente pela Amazon.
- O script é sensível à estrutura atual da página da Amazon, portanto pode precisar de ajustes se a estrutura HTML for alterada.

## 🔮 Futuras atualizações

- Implementar automação com **Selenium** para captura automática dos dados.
- Permitir exportação dos dados em formatos como **CSV** ou **JSON**.

### 🛠️ Ferramentas utilizadas

[![Ferramentas Utilizadas](https://skillicons.dev/icons?i=js,vscode,git&theme=light)](https://skillicons.dev)