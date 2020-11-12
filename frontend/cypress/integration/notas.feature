Funcionalidade: Notas
    Um usuário é capaz de criar, editar e excluir notas sobre uma cidade salva 

    Contexto: 
        Dado que o usuário está logado 
        E que temos as notas abaixo cadastradas
            | id  | texto       |  visitas  |
            | 1   | A           |  2        |
            | 2   | B           |  0        |
            | 3   | C           |  3        |

    
    Cenário: Acessar Notas
        Dado que o usuário está na tela de "ClimaCidade"
        Quando clica no botão "Notas"
        Então carrega a tela de "NotasCidade"
    
    Cenário: Selecionar Nota
        Dado que o usuário está na tela "NotasCidade"
        Quando o usuário seleciona uma nota
        Então carrega a tela "NotaCidade"
        
    Cenário: Criar Nota    
        Dado que o usuário está na tela "NotasCidade"
        Quando clica no botão "Criar Nova Nota"
        Então carrega a tela "NotaCidade" 
            E uma nota é criada
    
    Cenário: Salvar Nota
        Dado que o usuário está na tela "NotaCidade" e criou uma nota
        Quando clica no botão "Salvar"
        Então a nota é salva
    
    Cenário: Entrar no modo de edição de notas
        Dado que o usuário está na tela "NotaCidade"
        Quando clica no botão "Editar"
        Então abre o teclado 
            E é possível editar a nota
    
    Cenário: Salvar edição de Nota
        Dado que o usuário está na tela "NotaCidade"
            E fez edições em uma nota
        Quando clica no botão "Salvar"
        Então as edições são salvas

    Cenário: Editar visitas de cidade
        Dado que o usuário está na tela "NotaCidade"
        Quando o usuário seleciona o campo "visitas"
        Então abre o teclado
            E o usuário pode editar o número de visitas que fez à cidade

    Cenário: Erro ao salvar uma nota sobre uma cidade
        Dado que o usuário fez uma edição da nota,
        Quando clica no botão "Salvar",
        Então a nota não é salva 
            E o sistema notifica que a ação não foi concluída com sucesso.
    
    Cenário: Deletar Nota
        Dado que o usuário está na tela "NotaCidade"
        Quando clica no botão "Deletar nota"
            E confirma a exclusão
        Então é exibida a tela "NotasCidade"
            E é exibida a mensagem de exclusão com sucesso
            E a nota excluída não aparece mais na lista de notas
