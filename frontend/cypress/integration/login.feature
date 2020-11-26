#language: pt
Funcionalidade: Login

	Contexto:
		Dado que o usuário está na tela Entrar
			E temos um usuário cadastrado
			|	id	|	nome			|	senha		|
			|	1	|	Roberto			|	abcdxyz234	|
    
	Cenário: O usuário insere login e senha válidos, corretos e correspondentes
		Dado que o usuário inseriu nome e sua senha cadastrados e correspondentes de uma mesma conta
		Quando ele aperta o botão Entrar
		Então a tela Dashboard será carregada

	# Não há nenhuma descrição ou especificação minimamente detalhada em qualquer documentação que
	# descreva como esse sistema de notificação funciona.
	Cenário: O usuário tenta logar com um nome não cadastrado
		Dado o usuário inseriu um nome não cadastrado
		Quando ele aperta o botão Entrar
		Então será notificado que o usuário não foi encontrado
	
	# Não há nenhuma descrição ou especificação minimamente detalhada em qualquer documentação que
	# descreva como esse sistema de notificação funciona.
	Cenário: O usuário tenta logar com uma senha incorreta
		Dado que o usuário inseriu um nome cadastrado
		E o usuário inseriu uma senha que não corresponde a conta do nome inserido
		Quando ele aperta o botão Entrar
		Então será notificado que a senha está incorreta

	Cenário: Cadastrar nova conta
		Quando o usuário clica no botão Cadastrar
		Então a tela CriarNovaConta será carregada
		
