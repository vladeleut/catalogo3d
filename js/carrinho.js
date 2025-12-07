let CARRINHO = JSON.parse(localStorage.getItem("carrinho")) || [];


function salvarCarrinho() {
localStorage.setItem("carrinho", JSON.stringify(CARRINHO));
}


function addCarrinho(prod) {
CARRINHO.push(prod);
salvarCarrinho();
alert(prod.nome + " adicionado ao carrinho");
atualizarCarrinhoUI();
}


function atualizarCarrinhoUI() {
const lista = document.getElementById("listaCarrinho");
if(!CARRINHO || CARRINHO.length === 0){
	lista.innerHTML = `<li>Carrinho vazio</li>`;
} else {
	lista.innerHTML = CARRINHO.map(p => `<li>${p.nome} — R$ ${p.preco.toFixed(2)}</li>`).join("");
}
}


// Abrir e fechar modal
document.getElementById("abrirCarrinho").onclick = () => {
document.getElementById("carrinhoModal").style.display = "flex";
};


document.getElementById("carrinhoModal").onclick = e => {
if (e.target.id === "carrinhoModal") e.target.style.display = "none";
};


// Enviar WhatsApp
document.getElementById("enviarZap").onclick = () => {
if(!CARRINHO || CARRINHO.length === 0){
	alert('Carrinho vazio');
	return;
}
const texto = CARRINHO.map(p => `${p.nome} - R$ ${p.preco.toFixed(2)}`).join("%0A");
const url = `https://wa.me/5516988087678?text=Pedido:%0A${texto}`;
window.open(url, "_blank");
};

// Limpar carrinho
function limparCarrinho(){
	CARRINHO = [];
	salvarCarrinho();
	atualizarCarrinhoUI();
}

const btnLimpar = document.getElementById('limparCarrinho');
if(btnLimpar) btnLimpar.onclick = limparCarrinho;

// inicializa UI
atualizarCarrinhoUI();