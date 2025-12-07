function renderizarCategorias() {
const categoriasUnicas = [...new Set(PRODUTOS.map(p => p.categoria))];
const nav = document.getElementById("categorias");


nav.innerHTML = `<a href="?">Todos</a>` +
categoriasUnicas.map(c => `<a href="?categoria=${c}">${c}</a>`).join("");
}


function filtrarPorCategoria(lista) {
const params = new URLSearchParams(window.location.search);
const cat = params.get("categoria");
return cat ? lista.filter(p => p.categoria === cat) : lista;
}

function filtrarPorPesquisa(lista) {
const input = document.getElementById('searchInput');
if(!input) return lista;
const q = input.value.trim().toLowerCase();
if(!q) return lista;
return lista.filter(p => (p.nome || '').toLowerCase().includes(q) || (p.descricao || '').toLowerCase().includes(q));
}


function renderizarProdutos() {
renderizarCategorias();


let lista = filtrarPorCategoria(PRODUTOS);
lista = filtrarPorPesquisa(lista);
let pagina = paginarProdutos(lista);


document.getElementById("listaProdutos").innerHTML = pagina.map(p => `
<div class='produto'>
<div class='carousel'>
<button class='btn-esq'>❮</button>
<button class='btn-dir'>❯</button>
${p.imagens.map((img, i) => 
  `<img src="img/produtos/${img}" class="${i === 0 ? 'active' : ''}">`
).join('')}

</div>
<h3>${p.nome}</h3>
<p>${p.descricao}</p>
<b>R$ ${p.preco.toFixed(2)}</b>
<button class='cart' onclick='addCarrinho(${JSON.stringify(p)})'>Adicionar</button>
</div>
`).join('');


iniciarCarrosseis();
renderizarPaginacao(lista.length);
atualizarCarrinhoUI();
}

function setupSearch(){
  const input = document.getElementById('searchInput');
  if(!input) return;
  input.addEventListener('input', ()=> renderizarProdutos());
  const clearBtn = document.getElementById('searchClear');
  if(clearBtn) clearBtn.addEventListener('click', ()=>{ input.value=''; renderizarProdutos(); });
}

setupSearch();

renderizarProdutos();