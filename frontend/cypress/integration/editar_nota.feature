#language: pt
Funcionalidade: Editar Notas
	Um usuário é capaz de criar, editar e excluir notas sobre uma cidade salva 

	Contexto:
		Dado que o usuário selecionou criar ou editar uma nota na tela NotasCidade
		E a tela NotaCidade é exibida

	Cenário: Entrar no modo de edição de texto de notas
		Quando o usuário clica no botão Editar
		Então o campo do texto da nota exibida se torna editável
		E o campo de visitas da nota exibida se torna editável

	Cenário: Editar visitas de cidade
		Quando o usuário seleciona o campo visitas
		Então abre o teclado
		E o usuário pode editar o número de visitas que fez à cidade

	Cenário: Salvar uma nova nota
		Dado que o usuário editou uma nota ainda não cadastrada e salva
		Quando clica no botão Salvar
		Então as informações inseridas na nota são salvas
		E a nota é cadastrada no sistema
		E a nota estará visível na listagem de Notas na tela NotasCidade

	Cenário: Salvar edição de uma nota já cadastrada e salva
		Dado que o usuário fez edições em uma nota
		Quando clica no botão Salvar
		Então as edições são salvas
		E o modo de edição de nota é encerrado

	Cenário: Erro ao salvar uma nota sobre uma cidade
		Dado que o usuário insriu um dado inválido em um dos campos de edição da nota
		Quando ele clica no botão Salvar
		Então a nota não é salva 
		E o sistema notifica que a ação não foi concluída com sucesso.

	Cenário: Deletar Nota
		Quando o usuário clica no botão Deletar nota
		E confirma a exclusão
		Então a nota é removida do sistema
		E é exibida a tela NotasCidade
		E é exibida a mensagem de exclusão com sucesso
		E a nota excluída não é exibida na lista de notas