let listaDeProdutos = [];

const classe = "_cDEzb_p13n-sc-css-line-clamp-";
const classePreco = "p13n-sc-price";

function capturaLivros() {
  let titulo_autor = []
  let precos_span = []

  titulo_autor = document.querySelectorAll("[class^=" + classe + "]");
  precos_span = document.querySelectorAll("span[class*=" + classePreco + "]");

  let titulos = []
  let autores = []
  let precos = []

  for (let i = 0; i < (titulo_autor.length - 1); i += 2) {
    titulos.push(titulo_autor[i].textContent);
    autores.push(titulo_autor[i + 1].textContent);
  }

  precos_span.forEach(p => {
    const preco = p.textContent.replace(/\s/g, "").replace("R$", "").replace(",", ".");
    const floatPreco = parseFloat(preco);
    precos.push(floatPreco);
  });

  for (let i = 0; i < titulos.length; i++) {
    const produto = {};

    produto.rank = i + 1;
    produto.titulo = titulos[i];
    produto.autor = autores[i];
    produto.preco = precos[i];

    listaDeProdutos.push(produto);
  }

  console.log("Os livros foram carregados.");
}

function listaLivros() {

  if (ehListaVazia()) return;

  console.log("RANK DOS LIVROS\n");
  listaDeProdutos.forEach(p => {
    listaLivro(p);
  })
}

function listaLivro(livro) {
  const precoFormatado = livro.preco.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });

  console.log("#" + livro.rank);
  console.log(livro.titulo);
  console.log(livro.autor);
  console.log(precoFormatado);
}

function limpaLista() {
  listaDeProdutos = [];
  console.log("Os livros foram descarregados.");
}

function buscaMenorPreco() {

  if (ehListaVazia()) return;

  let minimum = listaDeProdutos[0];

  for (let i = 0; i < listaDeProdutos.length; i++) {
    if (minimum.preco > listaDeProdutos[i].preco) minimum = listaDeProdutos[i];
  }
  console.log("Livro com o menor preço: \n");
  listaLivro(minimum);
}

function buscaMaiorPreco() {

  if (ehListaVazia()) return;

  let maximum = listaDeProdutos[0];

  for (let i = 0; i < listaDeProdutos.length; i++) {
    if (maximum.preco < listaDeProdutos[i].preco) maximum = listaDeProdutos[i];
  }
  console.log("Livro com o maior preço: \n");

  listaLivro(maximum);
}

function buscaPrecoMedio() {

  if (ehListaVazia()) return;

  let precoMedio = 0;

  listaDeProdutos.forEach(p => precoMedio += p.preco);
  precoMedio /= listaDeProdutos.length;

  const precoFormatado = precoMedio.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });

  console.log("Preço médio dos livros: " + precoFormatado);
}

function ehListaVazia() {
  if (listaDeProdutos.length == 0) {
    console.log("Os livros ainda não foram capturados.");
    return true;
  }
  return false;
}

function help() {
  console.log("- capturaLivros()\n//roda o script para a captura dos livros na página");
  console.log("- listaLivros()\n//lista os livros da lista");
  console.log("- limpaLista()\n//limpa a lista de livros");
  console.log("- buscaMenorPreco()\n//traz o livro com o menor preço");
  console.log("- buscaMaiorPreco()\n//traz o livro com o maior preço");
  console.log("- buscaPrecoMedio()\n//traz o preço médio dos livros listados");
  console.log("- ehListaVazia()\n//confere se a lista de livros é vazia ou não");
}

//https://www.amazon.com.br/gp/bestsellers/books/ref=zg_bs_nav_books_0