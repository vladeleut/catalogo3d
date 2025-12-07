const ITENS_POR_PAGINA = 10;


function obterPaginaAtual() {
const params = new URLSearchParams(window.location.search);
return parseInt(params.get("pagina") || "1");
}


function paginarProdutos(produtos) {
const pagina = obterPaginaAtual();
const inicio = (pagina - 1) * ITENS_POR_PAGINA;
const fim = inicio + ITENS_POR_PAGINA;
return produtos.slice(inicio, fim);
}


function renderizarPaginacao(total) {
const totalPaginas = Math.ceil(total / ITENS_POR_PAGINA);
const pagina = obterPaginaAtual();


let html = "";
for (let i = 1; i <= totalPaginas; i++) {
html += `<button onclick="window.location='?pagina=${i}'" ${i===pagina?"style='background:#ff9800'":""}>${i}</button>`;
}
document.getElementById("paginacao").innerHTML = html;
}