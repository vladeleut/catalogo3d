// product.js - render single product from PRODUTOS using ?produto=ID
(function(){
  function getParam(name){
    return new URLSearchParams(window.location.search).get(name);
  }

  function el(id){ return document.getElementById(id); }

  function renderNotFound(){
    const out = el('productContainer');
    out.innerHTML = `<div style="background:#fff;padding:20px;border-radius:8px">Produto não encontrado. <a href="index.html">Voltar</a></div>`;
  }

  function renderProduct(prod){
    const out = el('productContainer');
    const imagesHtml = (prod.imagens||[]).map(src=>`<img src="img/produtos/${src}" style="max-width:180px;border-radius:8px;cursor:pointer;margin-right:8px" data-src="img/produtos/${src}">`).join('');
    out.innerHTML = `
      <div style="display:flex;gap:20px;flex-wrap:wrap">
        <div style="flex:1 1 260px">${imagesHtml}</div>
        <div style="flex:2 1 360px;background:#fff;padding:16px;border-radius:8px">
          <h2 style="margin-top:0">${prod.nome}</h2>
          <p style="color:#444">${prod.descricao || ''}</p>
          <b style="display:block;margin-top:8px">R$ ${prod.preco.toFixed(2)}</b>
          <div style="margin-top:12px;display:flex;gap:8px">
            <button id="addToCartProduct" style="padding:8px 12px;border-radius:6px;border:0;background:#0369a1;color:#fff">Adicionar ao carrinho</button>
            <button id="sendWhatsProduct" style="padding:8px 12px;border-radius:6px;border:0;background:#25d366;color:#fff">Enviar por WhatsApp</button>
          </div>
        </div>
      </div>
    `;

    // image click -> open modal
    (out.querySelectorAll('img[data-src]')||[]).forEach(img=>{
      img.addEventListener('click', ()=> openImageModal(img.getAttribute('data-src')));
    });

    const addBtn = el('addToCartProduct');
    const sendBtn = el('sendWhatsProduct');
    if(!addBtn || !sendBtn) return;

    addBtn.addEventListener('click', ()=>{
      if(Array.isArray(COLORS) && COLORS.length>0){
        openColorPickerProduct(prod.id, 'cart');
      } else {
        if(typeof addCarrinho === 'function') addCarrinho(prod, null);
      }
    });

    sendBtn.addEventListener('click', ()=>{
      if(Array.isArray(COLORS) && COLORS.length>0){
        openColorPickerProduct(prod.id, 'send');
      } else {
        sendWhatsSingle(prod, null);
      }
    });
  }

  // IMAGE MODAL
  function openImageModal(src){
    const m = el('imageModalProduct');
    const img = el('imageModalProductImg');
    if(img) img.src = src;
    if(m) m.classList.add('show');
  }
  function closeImageModal(){ const m = el('imageModalProduct'); if(m) m.classList.remove('show'); }

  // COLOR PICKER (product-scoped)
  let _pendingProductId = null;
  let _pendingProductMode = 'cart';
  function openColorPickerProduct(prodId, mode){
    _pendingProductId = prodId; _pendingProductMode = mode || 'cart';
    const modal = el('colorModalProduct');
    const swatches = el('colorSwatchesProduct');
    if(!modal || !swatches) return;
    swatches.innerHTML = '';
    if(!Array.isArray(COLORS)) return;
    COLORS.forEach(c=>{
      const b = document.createElement('button');
      b.type='button'; b.className='color-swatch'; b.title = c.name; b.style.background = c.hex; b.setAttribute('data-color', c.id);
      b.addEventListener('click', ()=>{ [...swatches.querySelectorAll('.color-swatch')].forEach(x=>x.classList.remove('selected')); b.classList.add('selected'); const cb = el('confirmColorProduct'); if(cb) cb.disabled = false; });
      swatches.appendChild(b);
    });
    const cb = el('confirmColorProduct'); if(cb) cb.disabled = true;
    modal.classList.add('show');
  }
  function closeColorPickerProduct(){ const modal = el('colorModalProduct'); if(modal) modal.classList.remove('show'); _pendingProductId = null; const cb = el('confirmColorProduct'); if(cb) cb.disabled = true; }

  function confirmColorProductHandler(){
    const swatches = el('colorSwatchesProduct'); if(!swatches) return;
    const sel = swatches.querySelector('.color-swatch.selected');
    const color = sel? sel.getAttribute('data-color') : null;
    if(!color){ alert('Por favor, selecione uma cor.'); return; }
    if(!_pendingProductId){ closeColorPickerProduct(); return; }
    const prod = PRODUTOS.find(p=>String(p.id)===String(_pendingProductId));
    if(!prod){ alert('Produto não encontrado'); closeColorPickerProduct(); return; }
    if(_pendingProductMode === 'send'){
      sendWhatsSingle(prod, color);
    } else {
      if(typeof addCarrinho === 'function') addCarrinho(prod, color);
    }
    closeColorPickerProduct();
  }

  function sendWhatsSingle(prod, color){
    const colorLabel = (color && Array.isArray(COLORS)) ? (COLORS.find(c=>c.id===color)?.name || color) : '';
    const origin = window.location && window.location.origin ? window.location.origin : '';
    const link = origin + window.location.pathname + `?produto=${encodeURIComponent(prod.id)}`;
    const lines = [ `Pedido rápido:`, `ID:${prod.id} - ${prod.nome}${colorLabel? ' - cor: '+colorLabel : ''} - R$ ${prod.preco.toFixed(2)}`, '', `Link: ${link}` ];
    const texto = encodeURIComponent(lines.join('\n'));
    const url = `https://wa.me/5516988087678?text=${texto}`;
    window.open(url, '_blank');
  }

  // wire modal buttons
  document.addEventListener('DOMContentLoaded', ()=>{
    const backdrop = el('colorModalProductBackdrop'); if(backdrop) backdrop.addEventListener('click', closeColorPickerProduct);
    const closeBtn = el('closeColorModalProduct'); if(closeBtn) closeBtn.addEventListener('click', closeColorPickerProduct);
    const cancelBtn = el('cancelColorProduct'); if(cancelBtn) cancelBtn.addEventListener('click', closeColorPickerProduct);
    const confirmBtn = el('confirmColorProduct'); if(confirmBtn) confirmBtn.addEventListener('click', confirmColorProductHandler);

    const imgBackdrop = el('imageModalProductBackdrop'); if(imgBackdrop) imgBackdrop.addEventListener('click', closeImageModal);
    const closeImg = el('closeImageModalProduct'); if(closeImg) closeImg.addEventListener('click', closeImageModal);

    // render product on load
    const pid = getParam('produto') || getParam('id');
    if(!pid) { renderNotFound(); return; }
    const prod = PRODUTOS.find(p=>String(p.id)===String(pid));
    if(!prod) { renderNotFound(); return; }
    renderProduct(prod);
  });

})();
