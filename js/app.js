function renderizarCategorias() {
  // extrai categorias únicas mesmo quando produto tem várias
  const all = PRODUTOS.flatMap(p => p.categorias || (p.categoria ? [p.categoria] : []));
  const categoriasUnicas = [...new Set(all)];

  // renderiza no sidebar se existir
  const sidebar = document.getElementById('sidebarCategorias');
  const nav = document.getElementById('categorias');

  const catButtons = ['<li><button class="cat-btn" data-cat="">Todos</button></li>']
    .concat(categoriasUnicas.map(c => `<li><button class="cat-btn" data-cat="${c}">${c}</button></li>`));

  if (sidebar) sidebar.innerHTML = catButtons.join('');
  if (nav) nav.innerHTML = `<a href="?">Todos</a>` + categoriasUnicas.map(c => `<a href="?categoria=${c}">${c}</a>`).join("");

  // attach handlers to sidebar buttons
  if (sidebar) {
    [...sidebar.querySelectorAll('.cat-btn')].forEach(btn => {
      btn.addEventListener('click', () => {
        const cat = btn.getAttribute('data-cat') || '';
        selectCategory(cat);
      });
    });
    // marcar a categoria ativa de acordo com URL
    const params = new URLSearchParams(window.location.search);
    const current = params.get('categoria') || '';
    [...sidebar.querySelectorAll('.cat-btn')].forEach(b => b.classList.toggle('active', (b.getAttribute('data-cat')||'')===current));
  }
}


function filtrarPorCategoria(lista) {
  const params = new URLSearchParams(window.location.search);
  const cat = params.get("categoria") || '';
  if (!cat) return lista;
  return lista.filter(p => {
    const cats = p.categorias || (p.categoria ? [p.categoria] : []);
    return cats.includes(cat);
  });
}

function selectCategory(cat){
  const params = new URLSearchParams(window.location.search);
  if (cat) params.set('categoria', cat); else params.delete('categoria');
  const qs = params.toString();
  const url = qs ? `?${qs}` : window.location.pathname;
  history.pushState(null,'',url);
  // update active classes in sidebar
  const sidebar = document.getElementById('sidebarCategorias');
  if (sidebar) {
    [...sidebar.querySelectorAll('.cat-btn')].forEach(b => b.classList.toggle('active', (b.getAttribute('data-cat')||'')===cat));
  }
  renderizarProdutos();
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

function setupSidebar(){
  const open = document.getElementById('openSidebar');
  const close = document.getElementById('closeSidebar');
  const overlay = document.getElementById('sidebarOverlay');
  const sidebar = document.getElementById('sidebar');
  if(open) open.addEventListener('click', ()=>{ if(sidebar) sidebar.classList.add('open'); if(overlay) overlay.classList.add('show'); });
  if(close) close.addEventListener('click', ()=>{ if(sidebar) sidebar.classList.remove('open'); if(overlay) overlay.classList.remove('show'); });
  if(overlay) overlay.addEventListener('click', ()=>{ if(sidebar) sidebar.classList.remove('open'); overlay.classList.remove('show'); });
}

setupSidebar();

renderizarProdutos();