Funcionalidade: Criar Nova Conta

    Visitante acessa Tela 01 - Home e clica em Nova Conta para prosseguir e criar conta
    

    Contexto:
    Dado que o usuario esta na Tela "Home"
        E não está cadastrado
        

    Cenário: Criar conta
        Dado que é exibida a tela Home
        Quando clico no botão criar conta
        Então a tela de cadastramento de nova conta é exibida

    Cenário: Usuário sem cadastro tenta criar conta entra com Nome, E-mail, Senha e Confirmar Senha corretos e tenta entrar
        Dado que o usuário inseriu todos os dados corretamente,
        Quando clica no botão Criar Conta,
        Então sua conta é criada e é redirecionado para página de Cadastro com Sucesso.

    Cenário: Usuário com ou sem cadastro tenta criar conta com Nome ou E-mail ou Senha ou Confirmar Senha incorretos
        Dado que o usuário inseriu um ou mais * Dados inválidos,
        Quando clica em “Criar Conta”,
        Então recebe uma mensagem de Erro.

    Cenário: Usuário com cadastro tenta criar conta com Nome, E-mail, Senha e Confirmar Senha corretos e tenta entrar
        Dado que o usuário inseriu * Dados pertencentes a outro usuário,
        Quando clica em “Entrar”,
        Então recebe mensagem de Usuário já cadastrado.
