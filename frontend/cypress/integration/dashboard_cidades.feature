#language: pt
Funcionalidade: Dashboard

	Apresenta uma lista de cidades selecionadas e/ou salvas pelo usuário, permitindoq ue ele edite seus detalhes.

	Cenário: Exibir listagem de cidades
		Dado que o usuário está logado
		Quando a tela de Dashboard é acessada
		Então as cidades salvas pelo usuário são exibidas na listagem do Dashboard
		E um resumo climático de cada cidade é exibido

	# Não há nenhuma descrição ou especificação minimamente detalhada em qualquer documentação que
	# descreva como esse sistema de alerta meterológico funciona.
	Cenário: Receber alerta meterológico de uma cidade
		Dado que é exibida a tela de Dashboard
		E há pelo menos uma cidade exibida na tela de Dashboard
		Quando uma das cidades listada no Dashboard recebe um alerta meterológico
		Então o usuário recebe um alerta com as informações recebidas

	Cenário: Selecionar uma cidade listada no Dashboard
		Dado que é exibida a tela de Dashboard
		E há pelo menos uma cidade exibida na tela de Dashboard
		Quando o usuário clica numa das cidades listadas no Dashboard
		Então a tela ClimaCidade é exibida
		E as informações correspondentes da cidade selecionada são exibidas na tela ClimaCidade

	Cenário: Deletar uma cidade do Dashboard
		Dado que é exibida a tela de Dashboard
		E há pelo menos uma cidade exibida na tela de Dashboard
		Quando o usuário clica no ícone de deletar cidade
		Então a cidade removida não é mais exibida na tela de Dashboard

	Cenário: Abrir busca de cidades
		Dado que é exibida a tela Dashboard
		Quando o usuário clica no botão "Adicionar cidade"
		Então a tela AdicionarCidade é exibida

	# Ainda não recebemos uma documentação detalhando como tratar a confirmação da exclusão,
	#  então não podemos especificar o teste adequadamente.
	Cenário: Tentar deletar todas as cidades confirmando a exclusão
		Dado que é exibida a tela de Dashboard
		E há pelo menos uma cidade exibida na tela de Dashboard
		Quando o usuário clica no botão "Deletar todas as cidades"
		E confirmar a exclusão
		Então nenhuma cidade é exibida na tela de Dashboard
	
	Cenário: Tentar deletar todas as cidades cancelando a exclusão
		Dado que é exibida a tela de Dashboard
		E há pelo menos uma cidade exibida na tela de Dashboard
		Quando o usuário clica no botão "Deletar todas as cidades"
		E cancelo a exclusão
		Então todas as cidades exibidas antes das ações de exclusão devem permanecer exibidas na tela de Dashboard

	Cenário: Salvar cidades numa conta logada
		Dado que o usuário está logado
		E que é exibida a tela de Dashboard
		E há pelo menos uma cidade salva em sua conta e exibida na tela de Dashboard
		Quando o usuário clica no botão "Salvar cidades"
		Então todas as cidades exibidas devem permanecer na tela de Dashboard do usuário
		E todas as cidades exibidas devem permanecer salvas em sua conta logada

	Cenário: Salvar cidades numa conta convidada
		Dado que o usuário está usando uma conta convidada, ou seja, não está logado
		E que é exibida a tela de Dashboard
		E há pelo menos uma cidade exibida na tela de Dashboard
		Quando o usuário clica no botão "Salvar cidades"
		Então um alerta de que ele precisa estar de uma conta será exibido

	Cenário: Botão de gerenciamento de conta
		Dado que é exibida a tela de Dashboard
		Quando o usuário clica no botão "Conta"
		Então a tela Conta é exibida
