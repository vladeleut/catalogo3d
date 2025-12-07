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
lista.innerHTML = CARRINHO.map(p => `<li>${p.nome} — R$ ${p.preco.toFixed(2)}</li>`).join("");
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
const texto = CARRINHO.map(p => `${p.nome} - R$ ${p.preco.toFixed(2)}`).join("%0A");
const url = `https://wa.me/5511999999999?text=Pedido:%0A${texto}`;
window.open(url, "_blank");
};