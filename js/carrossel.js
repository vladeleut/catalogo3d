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
});
}