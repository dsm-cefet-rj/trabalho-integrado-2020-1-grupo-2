#language: pt
Funcionalidade: Adicionar cidade

	Cenário: Buscar uma cidade válida e existente no sistema
		Dado que o usuário está na tela AdicionarCidade
		E inseriu o nome de uma cidade válido
		Quando ele clica no ícone de buscar
		Então resultados correspondentes serão exibidos

	Cenário: Buscar uma cidade válida e não existente no sistema
		Dado que o usuário está na tela AdicionarCidade
		E inseriu o nome de uma cidade válido
		E nenhuma cidade correspondente consta no sistema
		Quando ele clica no ícone de buscar
		Então nenhuma cidade será exibida no resultado da busca

	# A única indicação de limitação do texto de busca da cidade é a quantidade de caracteres
	# porém a documentação não indica se o usuário será capaz de ultrapassaar esse limite
	# por isso consideramos que essa ação é possível e deve ser tratada.
	Cenário: Buscar uma cidade inválida
		Dado que o usuário está na tela AdicionarCidade
		E inseriu o nome de uma cidade inválido
		Quando ele clica no ícone de buscar
		Então usuário será notificado que inseriu uma busca inválida

	Cenário: Usuário adiciona um resultado de busca ao Dashboard
		Dado que o usuário está na tela AdicionarCidade
		E realizou uma busca que retornou um ou mais resultados válidos,
		Quando o usuário clica em um dos resultados,
		Então a tela Dashboard é exibida
		E a cidade daquele resultado é adicionada ao dashboard
