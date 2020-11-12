Funcionalidade: Login

    Contexto:
        Dado que o usuário está na tela "Entrar" 
            E temos um usuário cadastrado
            | id  | nome        |  senha  |
            | 1   | Roberto     |  abcdxyz234    |
    
    Cenário: O usuário acerta login e senha
        Quando o usuário digita seu nome e sua senha corretamente
        Então a tela "Dashboard" será carregada

    Cenário: O usuário erra nome
        Quando o usuário digita seu nome incorretamente
        Então será notificado que o usuário não foi encontrado
    
    Cenário: usuário erra senha
        Quando o usuário digita sua senha incorretamente
        Então será notificado que a senha está incorretamente
    
    Cenário: Cadastrar nova conta
        Quando o usuário clica no botão "Cadastrar"
        Então a tela "CriarNovaConta" será carregada
