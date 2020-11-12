Funcionalidade: Criar Nova Conta

    Visitante acessa Tela 01 - Home e clica em Nova Conta para prosseguir e criar conta
    
    Contexto:
        Dado que o usuario esta na Tela Home
            E não está cadastrado

    Cenário: Usuário sem cadastro tenta criar conta entra com Nome, E-mail, Senha e Confirmar Senha válidos e tenta entrar
        Dado que o usuário inseriu todos os dados corretamente
        Quando ele clica no botão Criar Conta
        Então sua conta é criada
        E a tela CriarNovaContaSucesso é exibida

    Cenário: Usuário tenta criar conta com Nome ou E-mail ou Senha ou Confirmar Senha inválidos
        Dado que o usuário inseriu um ou mais dados inválidos
        Quando ele clica em Criar Conta
        Então recebe uma mensagem informando que a conta não foi criada com sucesso

    Cenário: Usuári tenta criar conta com E-mail já cadastrado
        Dado que o usuário inseriu E-mail pertencentes a um usuário já cadastrado
        Quando ele clica em Entrar
        Então recebe mensagem de Usuário já cadastrado
