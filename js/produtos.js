const PRODUTOS = [
	/*{
		id: X,
		nome: "EXEMPLO",
		preco: X,
		vendidos: X,
		descricao: "DESC",
		categorias: ["Destaque","Novidades","Presentes"],
		imagens: ["01.jpg","02.jpg","03.jpg"]
	},*/
	{
		id: 32,
		nome: "Miniatura Sonic: the Hedgehog",
		preco: 85,
		vendidos: 1,
		descricao: "Miniatura de 15cm do personagem Sonic, o ouriço azul dos videogames e das telonas. Detalhes incríveis na pose dinâmica e expressão facial.",
		categorias: ["Destaque","Novidades","Presentes","Personagens"],
		imagens: ["0321.jpg","0322.jpg"]
	},
	{
		id: 28,
		nome: "Drogon - Miniatura Game of Thrones",
		preco: 199.9,
		vendidos: 1,
		descricao: "Miniatura do Dragão Drogon da série Game of Thrones. Detalhes incríveis na cauda, nas asas e no corpo.",
		detalhamento: "Impressão em alta qualidade com filamento PLA Dual Color Shadow com acabamento único em cada peça.<br><br>Dimensões:<br>Altura: 9 cm<br>Largura: 23,4 cm (Total entre as asas)<br>Comprimento: 24,4 cm (Cabeça até a cauda e fim das asas)<br><br>Base Trono de Ferro vendida separadamente, <a href='https://vladeleut.github.io/catalogo3d/product.html?produto=27'>clique aqui</a> para consultar a peça.</a>",
		categorias: ["Destaque","Novidades","Colecionáveis","Personagens"],
		imagens: ["0281.jpg","0282.jpg","0283.jpg","0284.jpg","0285.jpg"]
	},
	{
		id: 27,
		nome: "Trono de Ferro - Miniatura Game of Thrones",
		preco: 149.9,
		vendidos: 1,
		descricao: "Miniatura do Trono de Ferro da série Game of Thrones. Detalhes incríveis na estrutura e acabamento realista.",
		detalhamento: "Impressão em alta qualidade.<br><br>Dimensões:<br>Altura: 15 cm<br>Largura: 16,7 cm<br>Comprimento: 16,7 cm <br><br>Dragão Drogon vendido separadamente, <a href='https://vladeleut.github.io/catalogo3d/product.html?produto=28'>clique aqui</a> para consultar a peça.</a>",
		categorias: ["Destaque","Novidades","Colecionáveis"],
		imagens: ["0271.jpg","0282.jpg","0272.jpg"]/*reutiliza foto do dragão com o trono*/
	},
	{
		id: 19,
		nome: "Miniatura Banguela - Como Treinar o Seu Dragão",
		preco: 50,
		vendidos: 1,
		descricao: "Miniatura do Personagem Banguela do filme 'Como Treinar o Seu Dragão'. Dragão Fúria da Noite com detalhes incríveis, cauda, asas e membros articulados.",
		categorias: ["Destaque","Presentes","Personagens"],
		imagens: ["0196.jpg","0191.jpg","0192.jpg","0193.jpg","0194.jpg","0195.jpg"]
	},
	{
		id: 25,
		nome: "Miniatura Stitch articulado",
		preco: 45,
		vendidos: 1,
		descricao: "Divirta-se com esta miniatura articulada do Stitch. Com aproximadamente 12 cm, esta figura detalhada é perfeita para fãs e colecionadores.",
		categorias: ["Destaque","Novidades","Presentes","Personagens"],
		imagens: ["0251.jpg","0252.jpg","0253.jpg","0254.jpg"]
	},
	{
		id: 29,
		nome: "Pomo de Ouro com Suporte",
		preco: 25,
		vendidos: 0,
		descricao: "Pomo de Ouro, objeto mágico dos jogos de Quadribol da saga Harry Potter. Acompanha suporte decorativo.",
		categorias: ["Colecionáveis","Decoração","Presentes","Novidades"],
		imagens: ["0291.jpg","0292.jpg","0293.jpg"]
	},
	{
		id: 26,
		nome: "Suporte de Mesa ajustável para Celular",
		preco: 15,
		vendidos: 1,
		descricao: "Suporte de mesa ajustável para celular, ideal para assistir vídeos, fazer videochamadas ou ler receitas na cozinha. Compatível com diversos tamanhos de smartphones.",
		categorias: ["Utilidades","Novidades","Organização"],
		imagens: ["0261.jpg","0262.jpg","0263.jpg","0264.jpg","0265.jpg"]
	},
	{
		id: 24,
		nome: "Jogo Cathedral (Tabuleiro de Estratégia)",
		preco: 200,
		vendidos: 1,
		descricao: "Cathedral é um jogo de tabuleiro de estratégia para dois jogadores, onde o objetivo é cercar o maior número possível de áreas dentro das muralhas com suas peças.",
		detalhamento: "Composto por tabuleiro, 2 conjuntos de peças de cores diferentes, a Catedral e 1 manual de regras.",
		categorias: ["Destaque","Presentes","Jogos"],
		imagens: ["0241.jpg","0242.jpg","0243.jpg","0244.jpg"]
	},
	{
		id: 14,
		nome: "Spinner Geométrico Planetário",
		preco: 30,
		vendidos: 1,
		descricao: "Spinner geométrico planetário com design único e inovador",
		categorias: ["Antiestresse","Destaque","Presentes"],
		imagens: ["0141.gif","0142.jpg","0143.jpg"]
	},
	{
		id: 17,
		nome: "Tabuleiro de Xadrez Harry Potter",
		preco: 350,
		vendidos: 0,
		descricao: "Revolucione sua experiência de xadrez com este tabuleiro inspirado na série Harry Potter. Cada peça é meticulosamente detalhada para capturar a essência dos personagens e elementos do universo mágico.",
		detalhamento: "Disponível em outras cores e times (Grifinória, Sonserina, Corvinal, Lufa-Lufa). Entre em contato para personalização.<br><br><b>Time Grifinória</b><br>Rei: Albus Dumbledore<br>Rainha: Minerva McGonagall Granger<br>Bispos: Sirius Black<br>Cavalos: Bicuço<br>Torres: Torres de Hogwarts<br>Peões: Harry Potter<br><br><b>Time Sonserina</b><br>Rei: Voldemort<br>Rainha: Bellatrix Lestrange<br>Bispos: Severus Snape<br>Cavalos: Serpente<br>Torres: Torres de Hogwarts<br>Peões: Draco Malfoy",
		categorias: ["Jogos","Decoração","Destaque","Presentes"],
		imagens: ["0171.jpg","0172.jpg","0173.jpg","0174.jpg","0175.jpg"]
	},
	{
		id: 15,
		nome: "Dado Giratório Automático",
		preco: 20,
		vendidos: 0,
		descricao: "Não perca mais seu dado ao lançar! Ideal para jogos de tabuleiro e RPGs. Basta pressionar um botão e assistir ao dado girar e parar em um número aleatório.",
		categorias: ["Jogos","Acessórios"],
		imagens: ["0151.gif","0152.jpg"]
	},
	{
		id: 16,
		nome: "Porta Remédio Giratóro",
		preco: 45,
		vendidos: 1,
		descricao: "Porta remédio giratório com compartimentos para organizar seus medicamentos diários de forma prática.",
		categorias: ["Organização","Saúde"],
		imagens: ["0161.gif","0162.jpg","0163.jpg"]
	},
	{
		id: 6,
		nome: "Cubo infinito Antiestresse",
		preco: 20,
		vendidos: 5,
		descricao: "Cubo infinito antiestresse com várias faces para manipular.",
		categorias: ["Antiestresse","Destaque"],
		imagens: ["0061.jpg","0062.jpg","0063.jpg"]
	},
	{
		id: 9,
		nome: "Quebra Cabeça 54 peças",
		preco: 85,
		vendidos: 1,
		descricao: "Quebra cabeça com 54 peças, desafio divertido para todas as idades. Encaixe todas as peças para completar o cubo. Acompanha base e suporte.",
		categorias: ["Diversão","Decoração","Presente","Destaque"],
		imagens: ["0091.jpg", "0092.jpg"]
	},
	{
		id: 1,
		nome: "Vaso Porta-Copos",
		preco: 65,
		vendidos: 0,
		descricao: "Porta Copos decorativo em formato de vaso.",
		categorias: ["Organização","Decoração","Presente"],
		imagens: ["0011.jpg", "0012.jpg"]
	},
	{
		id: 3,
		nome: "Spinner Planetário Antiestresse",
		preco: 15,
		vendidos: 1,
		descricao: "Spinner planetário com engrenagens antiestresse.",
		categorias: ["Antiestresse"],
		imagens: ["0032.gif","0031.jpg"]
	},
	{
		id: 5,
		nome: "Descanso de Copos Harry Potter",
		preco: 45,
		vendidos: 1,
		descricao: "Descanso de copos com tema Harry Potter.",
		categorias: ["Organização","Presente"],
		imagens: ["0051.jpg","0052.jpg","0053.jpg"]
	},
	{
		id: 7,
		nome: "Dispenser Cápsular Nespresso Pro",
		preco: 50,
		vendidos: 0,
		descricao: "Dispenser para cápsulas Nespresso Pro, organiza e decora. Comporta 19 cápsulas.",
		categorias: ["Organização","Decoração","destaque"],
		imagens: ["0071.jpg","0072.jpg","0073.jpg"]
	},
	{
		id: 8,
		nome: "Spinner Giratório Antiestresse",
		preco: 8,
		vendidos: 0,
		descricao: "Spinner giratório, ideal para aliviar o estresse.",
		categorias: ["Antiestresse","Brinquedo","Presente"],
		imagens: ["0083.gif","0081.jpg","0082.jpg"]
	},
	{
		id: 10,
		nome: "Suporte Pequeno para Celular",
		preco: 9,
		vendidos: 1,
		descricao: "Suporte pequeno e compacto para celular, mantém o aparelho em posição confortável sobre a mesa.",
		categorias: ["Organização","Acessório","Presente"],
		imagens: ["0101.jpg","0102.jpg","0103.jpg","0104.jpg"]
	},
	{
		id: 2,
		nome: "Chaveiro Mini Antiestresse Círculo",
		preco: 5,
		vendidos: 1,
		descricao: "Chaveiro pequeno antiestresse circular.",
		categorias: ["chaveiros","Antiestresse"],
		imagens: ["0021.jpg","0022.jpg","0023.jpg", "0024.jpg"]
	},
	{
		id: 4,
		nome: "Chaveiro Mini Antiestresse hexágono",
		preco: 6,
		vendidos: 1,
		descricao: "Chaveiro pequeno antiestresse hexagonal.",
		categorias: ["chaveiros","Presente"],
		imagens: ["0041.jpg","0042.jpg","0043.jpg"]
	},
	{
		id: 11,
		nome: "Mini arremessador de discos",
		preco: 10,
		vendidos: 3,
		descricao: "Mini arremessador de discos. Acompanha 3 discos para se divertir com seu pet. Ideal para gatos.",
		categorias: ["Pet","Presente","Diversão"],
		imagens: ["0112.gif","0111.jpg"]
	},
	{
		id: 12,
		nome: "Combo mini-discos para mini arremessador de discos",
		preco: 5,
		vendidos: 0,
		descricao: "Combo com 5 mini discos para reposição do mini arremessador de discos. Ideal para gatos.",
		categorias: ["Pet","Presente","Diversão"],
		imagens: ["0122.jpg","0121.jpg"]
	},
	{
		id: 13,
		nome: "Triângulo articulado infinito",
		preco: 20,
		vendidos: 1,
		descricao: "Triângulo articulado infinito antiestresse. Manipule o triângulo para aliviar o estresse e se divertir.",
		categorias: ["Antiestresse"],
		imagens: ["0131.jpg","0132.jpg","0133.jpg"]
	}
];