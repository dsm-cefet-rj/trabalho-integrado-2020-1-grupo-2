#language: pt
Funcionalidade: Home

    Contexto:
        Dado que o usuário está na tela Home

    Cenário: Entrar como convidado
        Quando clica no botão Entrar como convidado
        Então a tela Dashboard é carregada

    Cenário: Acessar página de criação de nova conta
        Quando clica no botão Nova Conta
        Então a tela CriarNovaConta é carregada
    
    Cenário: Acessar página de login
        Quando clica no botão Entrar
        Então a tela Entrar é carregada
    
