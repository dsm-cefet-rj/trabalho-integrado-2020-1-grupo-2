#language: pt
Funcionalidade: Logout

  Contexto:
    Dado que o usuário logado está em uma das telas
      |tela| nome                   |
      |6   | Dashboard              |
      |7   | AdicionarCidade        |
      |8   | ClimaCidade            |
      |9   | NotasCidade            |
      |10  | NotaCidade             |
      
      Cenário: Usuário quer encerrar a sessão de sua conta
              Quando o usuário clica no ícone de logout
              Então ele é desconectado da conta
