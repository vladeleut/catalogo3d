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
// Make header title act like "Home": clear query and re-render products
document.addEventListener('DOMContentLoaded', function(){
  var siteTitle = document.getElementById('siteTitle');
  if(siteTitle){
    siteTitle.addEventListener('click', function(e){
      e.preventDefault();
      // remove querystring params (categoria, pagina, busca)
      if(history && history.pushState){
        var url = new URL(location.href);
        url.search = '';
        history.pushState({}, document.title, url.toString());
      } else {
        // fallback
        location.href = location.pathname;
      }
      // ensure search input cleared and re-render
      var search = document.getElementById('searchInput');
      if(search) search.value = '';
      renderizarProdutos();
    });
  }
});
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
<button class='cart' data-id='${p.id}'>Adicionar</button>
</div>
`).join('');


iniciarCarrosseis();
renderizarPaginacao(lista.length);
atualizarCarrinhoUI();

  // ligar botões de adicionar (abrirão modal de cores)
  attachAddButtons();
}

function attachAddButtons(){
  document.querySelectorAll('.cart').forEach(btn=>{
    if(btn._hasHandler) return; btn._hasHandler = true;
    btn.addEventListener('click', ()=>{
      const id = btn.getAttribute('data-id');
      const prod = PRODUTOS.find(p=>String(p.id)===String(id));
      if(!prod) return alert('Produto não encontrado');
      // open visual color picker modal and add after confirmation
      openColorPickerModal(prod.id);
    });
  });
}

// Color picker modal flow
let _pendingAddProductId = null;
function openColorPickerModal(prodId){
  _pendingAddProductId = prodId;
  const modal = document.getElementById('colorModal');
  const swatches = document.getElementById('colorSwatches');
  if(!modal || !swatches) return;
  // populate swatches
  swatches.innerHTML = '';
  if(typeof COLORS === 'undefined' || !Array.isArray(COLORS)) return;
  COLORS.forEach(c=>{
    const el = document.createElement('button');
    el.type = 'button';
    el.className = 'color-swatch';
    el.title = c.name;
    el.style.background = c.hex;
    el.setAttribute('data-color', c.id);
    el.addEventListener('click', ()=>{
      [...swatches.querySelectorAll('.color-swatch')].forEach(x=>x.classList.remove('selected'));
      el.classList.add('selected');
      // enable confirm button when a color is chosen
      const confirmBtn = document.getElementById('confirmColor');
      if(confirmBtn) confirmBtn.disabled = false;
    });
    swatches.appendChild(el);
  });
  // ensure confirm starts disabled until a swatch is chosen
  const confirmBtn = document.getElementById('confirmColor');
  if(confirmBtn) confirmBtn.disabled = true;
  modal.classList.add('show');
}

function closeColorPickerModal(){
  const modal = document.getElementById('colorModal');
  if(modal) modal.classList.remove('show');
  _pendingAddProductId = null;
  const confirmBtn = document.getElementById('confirmColor');
  if(confirmBtn) confirmBtn.disabled = true;
}

document.addEventListener('DOMContentLoaded', ()=>{
  const backdrop = document.getElementById('colorModalBackdrop');
  const closeBtn = document.getElementById('closeColorModal');
  const cancelBtn = document.getElementById('cancelColor');
  const confirmBtn = document.getElementById('confirmColor');
  if(backdrop) backdrop.addEventListener('click', closeColorPickerModal);
  if(closeBtn) closeBtn.addEventListener('click', closeColorPickerModal);
  if(cancelBtn) cancelBtn.addEventListener('click', closeColorPickerModal);
  if(confirmBtn) confirmBtn.addEventListener('click', ()=>{
    const swatches = document.getElementById('colorSwatches');
    const sel = swatches.querySelector('.color-swatch.selected');
    const color = sel? sel.getAttribute('data-color') : null;
    if(!color){ alert('Por favor, selecione uma cor antes de adicionar ao carrinho.'); return; }
    if(!_pendingAddProductId) { closeColorPickerModal(); return; }
    const prod = PRODUTOS.find(p=>String(p.id)===String(_pendingAddProductId));
    if(!prod){ alert('Produto não encontrado'); closeColorPickerModal(); return; }
    if(typeof addCarrinho === 'function') addCarrinho(prod, color);
    closeColorPickerModal();
  });
  // close on Esc
  document.addEventListener('keydown', e=>{ if(e.key==='Escape') closeColorPickerModal(); });
});

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