 
# language: pt
Funcionalidade: Adicionar cidade

        Cenário: Botão de Adicionar cidade no Dashboard
                Dado que o usuário está na tela de Dashboard
                Quando ele clica no botão de Adicionar cidade
                Então ele é direcionado para a tela AdicionarCidade
                
                
        Cenário: Buscar uma cidade válida
                Dado que o usuário está na tela AdicionarCidade
                E inseriu o nome da cidade que deseja,
                E a cidade consta nos resultados da busca
                Quando apertar no ícone de buscar,
                Então resultados correspondentes serão exibidos.
        
        
        Cenário: Buscar uma cidade inválida
                Dado que o usuário está na tela AdicionarCidade
                E inseriu o nome da cidade que deseja
                E a cidade não consta nos resultados da busca
                Quando apertar no ícone de buscar
                Então usuário será notificado que a cidade não foi encontrada
                
        Cenário: Usuário adiciona um resultado de busca ao Dashboard
                Dado que o usuário está na tela AdicionarCidade
                E a busca do usuário retornou um ou mais resultados válidos,
                Quando o usuário clica em um dos resultados,
                Então a cidade daquele resultado é adicionada ao dashboard
                E o usuario será redirecionado para a tela Dashboard
