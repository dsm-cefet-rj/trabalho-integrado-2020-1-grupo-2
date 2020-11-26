#language: pt
Funcionalidade: Gerenciar Notas
	Um usuário é capaz de criar, editar e excluir notas sobre uma cidade salva 

	Contexto: 
		Dado que o usuário está logado 
		E que temos as notas abaixo cadastradas
		| id  | texto       |  visitas  |
		| 1   | A           |  2        |
		| 2   | B           |  0        |
		| 3   | C           |  3        |


	Cenário: Editar nota existente
		Dado que a tela NotasCidade é exibida
		E há pelo menos uma nota cadastrada exibida na listagem de notas
		Quando o usuário seleciona uma nota
		Então carrega a tela NotaCidade
		E os dados da nota selecionada são exibidos na tela NotaCidade
		
	Cenário: Usuário logado tenta criar nova nota
		Dado que o usuário está na tela NotasCidade
		Quando clica no botão Criar Nova Nota
		Então carrega a tela NotaCidade 
		E uma nota é criada

	# Visto que convidados não podem criar notas, não faz sentido
	# um usuário desse tipo ter acesso a essa tela e esse tratamento existir
	# porém foi pedido na documentação do protótipo
	Cenário: Usuário convidado acessa página de Notas
		Dado que o usuário está usando uma conta convidada, ou seja, não está logado
		Quando clica a tela NotasCidade é exibida
		Então o botão Criar nova nota não é exibido