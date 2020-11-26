#language: pt
Funcionalidade: Detalhes de uma Cidade

	Cenário: Exibir Detalhes de uma cidade
		Dado que o usuário selecionou uma cidade na tela Dashboard
		Quando carrega a tela ClimaCidade
		Então é exibido nome e informações detalhadas da cidade selecionada

	Cenário: Editar notas da cidade
		Dado que a tela ClimaCidade é exibida
		Quando o usuário clica no botão de Notas da cidade
		Então a tela NotasCidade é exibida
