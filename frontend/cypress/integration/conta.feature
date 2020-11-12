
# language: pt
Funcionalidade: Conta
                
        Cenário: Usuário insere com Nome válido
                Dado que o usuário está na tela de Conta
                E entra com Nome válido,
                Quando ele clica no botão Salvar Mudanças
                Então a conta é atualizada com o Novo nome
                
        Cenário: Usuário insere Nome inválido
                Dado que o usuário está na tela de Conta e entra com Nome inválido
                Quando ele clica no botão Salvar Mudanças
                Então a conta não é atualizada com o Novo nome
                
         Cenário: Usuário insere Email válido
                Dado que o usuário está na tela de Conta 
                E entra com Email válido
                Quando ele clica no botão Salvar Mudanças
                Então a conta é atualizada com o Novo nome
                
          Cenário: Usuário insere Email inválido
                Dado que o usuário está na tela de Conta 
                E entra com Email inválido
                Quando ele clica no botão Salvar Mudanças
                Então a conta não é atualizada com o Novo nome
          
          Cenário: Usuário insere Senha e Confirmar senha iguais e válidos e Senha antiga correta
                Dado que o usuário está na tela de Conta
                E entra com os valor de Senha
                E Confirmar Senha iguais
                E Senha antiga correta
                Quando ele clica no botão Salvar Mudanças
                Então a conta é atualizada com a Nova senha
                
          Cenário: Usuário insere Senha e Confirmar senha diferentes
                Dado que o usuário está na tela de Conta 
                E entra com valores de nova Senha
                E Confirmar Senha diferentes
                Quando ele clica no botão Salvar Mudanças
                Então a conta não é atualizada com a Nova senha
                
          Cenário: Usuário insere Senha e Confirmar senha inválidos
                Dado que o usuário está na tela de Conta 
                E entra com valores de nova Senha
                E Confirmar Senha inválidos
                Quando ele clica no botão Salvar Mudanças
                Então a conta não é atualizada com a Nova senha
                
          Cenário: Usuário insere Senha antiga incorreta
                Dado que o usuário está na tela de Conta
                E entra com valor de Senha antiga incorreta
                Quando ele clica no botão Salvar Mudanças
                Então a conta não é atualizada com a Nova senha

           Cenário: Usuário cadastrado que quer deletar conta e confirma a deleção
                Dado que o usuário está na tela de Conta
                Quando ele clica no botão Deletar Conta
                E recebe o alerta
                E confirma
                Então conta será deletada
                
           Cenário: Usuário cadastrado que quer deletar conta e não confirma a deleção
                Dado que o usuário está na tela de Conta
                Quando ele clica no botão Deletar Conta
                E recebe o alerta
                E cancela
                Então a operação de Deletar Conta será cancelada
