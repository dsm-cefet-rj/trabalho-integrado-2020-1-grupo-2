Funcionalidade: Notas
    Um usuário é capaz de criar, editar e excluir notas sobre uma cidade salva 

    Contexto: 
        Dado que o usuário está logado
    
    Cenário: Entrar em "Notas"
        Dado que o usuário está na tela de "Clima de Cidade"
        Quando clica no botão "Notas"
        Então carrega a tela de "Notas"
        
    Cenário: Criar Nota    
        Dado que o usuário está na tela "Notas"
        Quando clica no botão "Criar Nota"
        Então uma nota é criada
    
    Cenário: Salvar Nota
        Dado que o usuário cria uma nota
        Quando clica no botão "Salvar Nota"
        Então a nota é salva
    
    Cenário: Entrar no modo de edição de notas
        Dado que o usuário está na tela "Notas"
        Quando clica no botão "Editar Nota"
        Então abre o teclado
    
    Cenário: Salvar edição de Nota
        Dado que o usuário fez edições em uma nota
        Quando clica no botão "Salvar Nota"
        Então as edições são salvas
    
    Cenário: Erro ao salvar uma nota sobre uma cidade

        Dado que o usuário fez uma edição da nota,
        Quando clica no botão "Salvar",
        Então a nota não é salva e o sistema notifica que a ação não foi concluída com sucesso.