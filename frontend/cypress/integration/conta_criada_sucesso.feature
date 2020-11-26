#language: pt
Funcionalidade: Confirmar se a conta foi criada com sucesso
	Um usuário acabou de cadastrar uma nova conta válida com sucesso e o sistema está dando feedback para ele

	Cenário: Tela de conta criada com sucesso é exibida
		Dado que o usuário encerrou a criação de uma conta válida com sucesso
		Quando a tela CriarNovaContaSucesso é exibida
		Então o usuário é informado na interface que a conta foi criada com sucesso

	Cenário: Abrir Dashboard
		Dado a tela CriarNovaContaSucesso é exibida
		Quando o usuário clica no botão Ir para o Dashboard
		Então a tela Dashboard é exibida
