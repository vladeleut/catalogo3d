function iniciarCarrosseis() {
document.querySelectorAll('.carousel').forEach(carousel => {
let imagens = carousel.querySelectorAll('img');
let index = 0;


const btnEsq = carousel.querySelector('.btn-esq');
const btnDir = carousel.querySelector('.btn-dir');


function mostrar(i) {
imagens[index].classList.remove('active');
index = i;
imagens[index].classList.add('active');
}


btnDir.onclick = () => mostrar((index + 1) % imagens.length);
btnEsq.onclick = () => mostrar((index - 1 + imagens.length) % imagens.length);


// Controle por Swipe
let startX = 0;


carousel.addEventListener('touchstart', e => {
startX = e.touches[0].clientX;
});


carousel.addEventListener('touchend', e => {
const endX = e.changedTouches[0].clientX;
if (endX < startX - 40) btnDir.onclick();
if (endX > startX + 40) btnEsq.onclick();
});

 // clique na imagem abre modal (se existir)
 imagens.forEach(img => {
	 img.style.cursor = 'pointer';
	 img.addEventListener('click', () => {
		 if (typeof openImageModal === 'function') openImageModal(img.src);
	 });
 });
});
}

// Image modal helpers (useful if index.html contains the modal markup)
function openImageModal(src){
	const modal = document.getElementById('imageModal');
	const img = document.getElementById('imageModalImg');
	if(!modal || !img) return;
	img.src = src;
	modal.classList.add('show');
}

function closeImageModal(){
	const modal = document.getElementById('imageModal');
	const img = document.getElementById('imageModalImg');
	if(!modal || !img) return;
	modal.classList.remove('show');
	img.src = '';
}

// attach modal close handlers if markup exists
document.addEventListener('DOMContentLoaded', () => {
	const backdrop = document.getElementById('imageModalBackdrop');
	const closeBtn = document.getElementById('closeImageModal');
	if (backdrop) backdrop.addEventListener('click', closeImageModal);
	if (closeBtn) closeBtn.addEventListener('click', closeImageModal);
});