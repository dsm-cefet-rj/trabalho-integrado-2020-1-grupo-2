[![Work in Repl.it](https://classroom.github.com/assets/work-in-replit-14baed9a392b3a25080506f3b7b6d57f295ec2978f6f33ec97e36a161684cbe9.svg)](https://classroom.github.com/online_ide?assignment_repo_id=318866&assignment_repo_type=GroupAssignmentRepo)
# Trabalho Integrado

Este repositório servirá como base para o desenvolvimento da primeira parte do trabalho integrado entre as turmas de PSW, Teste de Software, Gestão de Projetos e Arquitetura e Padrões de Software. Neste repositório será desenvolvida a aplicação e registrada sua documentação.

Organizaremos os arquivos de código-fonte do projeto na seguinte estrutura.

- front-end/ - Código front-end em React (a primeira parte do trabalho é feita aqui)
- back-end/ - Código back-end em node.js (a segunda será feita aqui)

A gestão do andamento dos projetos será feita com pelos projetos no github na aba projetos.

A documentação do projeto será feita em formato wiki na aba wiki do projeto (utilizem a formatação markdown para o wiki, que é a default).


#Testes de Software

1- Após clonar repositorio, entre na pasta frontend e instale os módulos com:
yarn

2-Rode o banco com:
npm run json-server

3- Em outro terminal rode:
yarn test

4- Num terceiro terminal rode o plugin a ser ativado com o cypress, que disponibilizará além da interface, uma pasta com os testes de cobertura:
npm run cypress:open
