Funcionalidade: Logout

  Contexto:
    Dado que o usuário logado está em uma das telas
      |tela| nome                   |
      |6   | Dashboard              |
      |7   | AdicionarCidade        |
      |8   | ClimaCidade            |
      |9   | NotasCidade            |
      |10  | NotaCidade             |
      
      Cenário: usuário quer sair da sua conta
              Dado que está em uma das telas
              Quando clica no ícone de logout
              Então é desconectado da conta
