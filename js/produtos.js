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
		id: 19,
		nome: "Miniatura Banguela - Como Treinar o Seu Dragão",
		preco: 50,
		vendidos: 1,
		descricao: "Miniatura do Personagem Banguela do filme 'Como Treinar o Seu Dragão'. Dragão Fúria da Noite com detalhes incríveis, cauda, asas e membros articulados.",
		categorias: ["Destaque","Novidades","Presentes","Personagens"],
		imagens: ["0191.jpg","0192.jpg","0193.jpg","0194.jpg","0195.jpg","0196.jpg"]
	},
	{
		id: 24,
		nome: "Jogo Cathedral (Tabuleiro de Estratégia)",
		preco: 200,
		vendidos: 1,
		descricao: "Cathedral é um jogo de tabuleiro de estratégia para dois jogadores, onde o objetivo é cercar o maior número possível de áreas dentro das muralhas com suas peças.",
		detalhamento: "Composto por tabuleiro, 2 conjuntos de peças de cores diferentes, a Catedral e 1 manual de regras.",
		categorias: ["Destaque","Novidades","Presentes","Jogos"],
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