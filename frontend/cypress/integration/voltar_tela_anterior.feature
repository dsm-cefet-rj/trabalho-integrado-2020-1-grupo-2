# language: pt
Funcionalidade: Retorna a tela anterior

  Contexto:
    Dado que o usuário logado está em uma das telas
      |tela| nome                   |
      |2   | CriarNovaConta         |
      |3   | CriarNovaContaSucesso  |
      |4   | Entrar                 |
      |5   | Conta                  |
      |6   | Dashboard              |
      |7   | AdicionarCidade        |
      |8   | ClimaCidade            |
      |9   | NotasCidade            |
      |10  | NotaCidade             |
      
      Cenário: usuário quer retornar a pagina anterior
              Dado que está em uma das telas
              Quando clica no ícone de voltar
              Então retorna a pagina anterior
