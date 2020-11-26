import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given('que o usuário está na tela Entrar', () => {
    cy.visit('/login');
    
});

And('temos um usuário cadastrado', async function (usuario) {
	    this.usuario = usuario.hashes();
	    var i = 0;

	    //aqui deveria incluir os dados em um banco de dados de teste.
	    for(let p of this.usuario){
	        
	        let p_cast = {

	            id: p.id,
	            nome: p.nome,
	            senha: p.senha
	        }
	        this.usuario[i] = p_cast;
	        

	        i++;
	    }
	});

	Then('ele pode logar', ()=> cy.visit('login'));


	

	Given('que o usuário inseriu nome e sua senha cadastrados e correspondentes de uma mesma conta', () => cy.visit('/login'));
	 

	When('ele aperta o botão Entrar', () => cy.get('#loginButton').click());

	Then('a tela Dashboard será carregada', () => 
	    cy.visit('/dashboard')
	)

	Given('o usuário inseriu um nome não cadastrado', () => cy.visit('/login'));
	 

	When('ele aperta o botão Entrar', () => cy.get('#loginButton').click());

	Then('será notificado que o usuário não foi encontrado', () => cy.get('#alert_msg').contains('Usuário Não Encontrado!'))


	Given('que o usuário inseriu um nome cadastrado', () => {
		console.log("Checa nome cadastrado");
		
	});

	And('o usuário inseriu uma senha que não corresponde a conta do nome inserido', () => console.log("Checar Senha incorreta"));//cy.get('#alert_msg').contains('Senha Incorreta'));

	When('ele aperta o botão Entrar', () => cy.get('#loginButton').click());

	Then('será notificado que a senha está incorreta', () => {//
		cy.get('#alert_msg').contains('Senha Incorreta!');
	    cy.visit('/login');
		});

	Given('que o usuario quer cadastrar nova conta',() => cy.visit('/login'));
	When('o usuário clica no botão Cadastrar', () => 
		cy.get('#goToCreateNewAccButton').click());
	
	Then('a tela CriarNovaConta será carregada', () =>   cy.visit('/signup'));
